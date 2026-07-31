import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/support-request")({
  head: () => ({
    meta: [
      { title: "Technical Support Request - C11 Recovery" },
      {
        name: "description",
        content:
          "Raise a technical support request for your C11 ice bath. Send your serial number, symptoms, checks already done and photos or video in one go.",
      },
      { property: "og:title", content: "Technical Support Request - C11 Recovery" },
      {
        property: "og:description",
        content:
          "One form, everything our engineers need: model, serial number, symptoms, checks completed, photos and video.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SupportRequestPage,
});

/* Central config - swap destinations here. */
const SUPPORT = {
  email: "service@c11recovery.com",
  whatsappNumber: "+353 85 142 6203",
  whatsappBase: "https://wa.me/353851426203",
  hours: "Mon-Fri · 9:00-17:30 GMT",
  responseTime: "Replies within 1 working day.",
};

const MODELS = ["Kinos", "Kinos Plus", "Hanki", "Kuura", "Not sure"];

const ISSUE_AREAS = [
  "Not cooling / not reaching temperature",
  "Not pumping / low flow (P01)",
  "Error code on display",
  "Leak or water loss",
  "Water quality / cloudy water",
  "Wi-Fi or controller / app",
  "Noise or vibration",
  "Power / unit will not start",
  "Other",
];

const CHECKS = [
  "Cleaned or replaced the filter",
  "Checked water level is above the intake",
  "Power-cycled the unit at the isolator",
  "Checked the pump is primed / no airlock",
  "Checked inlet & outlet are not blocked",
  "Checked ambient temperature & ventilation clearance",
  "Read the relevant section of the manual",
];

const FREQUENCY = ["Constant", "Intermittent", "Only on startup", "Only at certain temperatures"];

const ACCESS = ["Remote call is fine to start", "Needs on-site visit", "Not sure yet"];

type Files = File[];

const labelCls = "block text-xs uppercase tracking-[0.2em] font-medium text-obsidian/70";

function inputCls(invalid?: boolean) {
  return [
    "mt-3 w-full bg-stone-base border rounded-[2px] px-4 py-3 text-[15px]",
    "placeholder:text-obsidian/35 focus:outline-none focus:border-deep-current transition-colors",
    invalid ? "border-thermal-rose" : "border-obsidian/25",
  ].join(" ");
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className={labelCls}>
        {label}
        {required ? <span className="text-thermal-rose"> *</span> : null}
      </span>
      {children}
      {hint ? (
        <p className="mt-2 text-[13px] text-obsidian/50 font-editorial italic">{hint}</p>
      ) : null}
    </div>
  );
}

function StepHeading({ n, title, blurb }: { n: string; title: string; blurb?: string }) {
  return (
    <div className="mb-8">
      <div className="text-xs uppercase tracking-[0.22em] font-medium text-obsidian/50 flex items-center gap-2">
        <span aria-hidden>✳</span>
        <span>Step {n}</span>
      </div>
      <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none">
        {title}
      </h2>
      {blurb ? <p className="mt-3 font-editorial italic text-obsidian/60 max-w-xl">{blurb}</p> : null}
    </div>
  );
}

function bytes(n: number) {
  if (n < 1024 * 1024) return `${Math.max(1, Math.round(n / 1024))} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

const chipCls = (on: boolean, invalid?: boolean) =>
  `px-4 py-3 rounded-[2px] border text-[13px] transition-colors ${
    on
      ? "bg-obsidian text-stone-base border-obsidian"
      : `bg-stone-base ${invalid ? "border-thermal-rose" : "border-obsidian/25"} hover:border-obsidian`
  }`;

function SupportRequestPage() {
  const [f, setF] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    model: "",
    serial: "",
    purchased: "",
    installedBy: "",
    area: "",
    errorCode: "",
    frequency: "",
    started: "",
    waterTemp: "",
    description: "",
    access: "",
    availability: "",
  });
  const [checks, setChecks] = useState<string[]>([]);
  const [files, setFiles] = useState<Files>([]);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  const set = (k: keyof typeof f) => (v: string) => setF((p) => ({ ...p, [k]: v }));

  const toggleCheck = (c: string) =>
    setChecks((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));

  const summary = useMemo(() => {
    const L = (label: string, value: string) => (value.trim() ? `${label}: ${value.trim()}` : null);
    const lines = [
      "C11 TECHNICAL SUPPORT REQUEST",
      "",
      "-- CUSTOMER --",
      L("Name", f.name),
      L("Company / site", f.company),
      L("Email", f.email),
      L("Phone", f.phone),
      L("Address", f.address),
      "",
      "-- PRODUCT --",
      L("Model", f.model),
      L("Serial number", f.serial),
      L("Purchase / install date", f.purchased),
      L("Installed by", f.installedBy),
      "",
      "-- ISSUE --",
      L("Issue area", f.area),
      L("Error code on display", f.errorCode),
      L("Frequency", f.frequency),
      L("First noticed", f.started),
      L("Current water temp", f.waterTemp),
      "",
      "Description:",
      f.description.trim() || "(none provided)",
      "",
      "-- ALREADY CHECKED --",
      checks.length ? checks.map((c) => `• ${c}`).join("\n") : "• Nothing checked yet",
      "",
      "-- MEDIA --",
      files.length
        ? files.map((x) => `• ${x.name} (${bytes(x.size)})`).join("\n")
        : "• No files selected",
      "",
      "-- NEXT STEP --",
      L("Site access", f.access),
      L("Availability", f.availability),
    ];
    return lines.filter((x) => x !== null).join("\n");
  }, [f, checks, files]);

  const mailtoHref = useMemo(() => {
    const subject = `Support Request - ${f.model || "C11"}${f.serial ? ` - ${f.serial}` : ""}${
      f.name ? ` - ${f.name}` : ""
    }`;
    return `mailto:${SUPPORT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`;
  }, [summary, f.model, f.serial, f.name]);

  const whatsappHref = useMemo(
    () => `${SUPPORT.whatsappBase}?text=${encodeURIComponent(summary)}`,
    [summary],
  );

  const onFiles = (list: FileList | null) => {
    if (!list) return;
    setFiles((p) => [...p, ...Array.from(list)]);
  };

  const validate = () => {
    const req: (keyof typeof f)[] = ["name", "email", "phone", "model", "serial", "description"];
    const next: Record<string, boolean> = {};
    req.forEach((k) => {
      if (!f[k].trim()) next[k] = true;
    });
    if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) next.email = true;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    if (!validate()) {
      const first = document.querySelector('[data-invalid="true"]') as HTMLElement | null;
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSending(true);
    setSendError(null);

    try {
      const ref = crypto.randomUUID();
      const uploaded: { name: string; size: number; path: string }[] = [];

      for (const file of files) {
        const safe = file.name.replace(/[^\w.\-]+/g, "_").slice(-80);
        const path = `${ref}/${Date.now()}-${safe}`;
        const { error } = await supabase.storage
          .from("support-uploads")
          .upload(path, file, { upsert: false, contentType: file.type || undefined });
        if (error) throw error;
        uploaded.push({ name: file.name, size: file.size, path });
      }

      const { error: insertError } = await supabase.from("support_requests").insert({
        name: f.name.trim(),
        company: f.company.trim() || null,
        email: f.email.trim(),
        phone: f.phone.trim(),
        address: f.address.trim() || null,
        model: f.model,
        serial: f.serial.trim(),
        purchased: f.purchased.trim() || null,
        installed_by: f.installedBy.trim() || null,
        issue_area: f.area || null,
        error_code: f.errorCode.trim() || null,
        frequency: f.frequency || null,
        started: f.started.trim() || null,
        water_temp: f.waterTemp.trim() || null,
        description: f.description.trim(),
        checks,
        files: uploaded,
        access: f.access || null,
        availability: f.availability.trim() || null,
        summary,
      });
      if (insertError) throw insertError;

      setSubmitted(true);
      window.setTimeout(
        () => summaryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
        50,
      );
    } catch (err) {
      console.error("Support request submit failed", err);
      setSendError(
        "We could not send that automatically. Please try again, or email service@c11recovery.com.",
      );
    } finally {
      setSending(false);
    }
  };


  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="bg-stone-base text-obsidian">
      {/* HERO */}
      <section className="border-b border-obsidian">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="text-xs uppercase tracking-[0.22em] font-medium text-obsidian/60 flex items-center gap-2">
            <span aria-hidden>✳</span>
            <span>Technical Support Request</span>
          </div>
          <h1
            className="mt-8 font-display uppercase font-bold leading-[0.88] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Tell us what
            <br />
            it&apos;s doing.
          </h1>
          <p className="mt-8 font-editorial italic text-lg md:text-xl text-obsidian/70 max-w-2xl">
            One form with everything our engineers need - model, serial number, symptoms, what
            you&apos;ve already tried, and photos or video. We diagnose remotely first and only send
            an engineer if the unit genuinely needs one.
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-obsidian/60">
            {SUPPORT.hours} · {SUPPORT.responseTime}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-obsidian border border-obsidian rounded-[2px] overflow-hidden max-w-3xl">
            {[
              ["01", "Fill this form", "Details, symptoms, media."],
              ["02", "Remote diagnosis", "We review and call you back."],
              ["03", "Site visit if needed", "Only when it can't be fixed remotely."],
            ].map(([n, t, b]) => (
              <div key={n} className="bg-stone-base p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-obsidian/50">{n}</div>
                <div className="mt-3 font-display text-lg font-bold uppercase leading-none">{t}</div>
                <div className="mt-2 text-[13px] text-obsidian/60">{b}</div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-obsidian/70 max-w-2xl">
            Before you submit: most call-outs are a blocked filter or a low water level.{" "}
            <Link
              to="/manual"
              className="border-b border-obsidian hover:text-deep-current hover:border-deep-current transition-colors"
            >
              Check the engineering reference
            </Link>{" "}
            or{" "}
            <Link
              to="/videos"
              className="border-b border-obsidian hover:text-deep-current hover:border-deep-current transition-colors"
            >
              the maintenance videos
            </Link>{" "}
            first - it may save you a wait.
          </p>
        </div>
      </section>

      {/* FORM */}
      <form
        onSubmit={submit}
        className="mx-auto max-w-[1000px] px-6 md:px-12 py-16 md:py-24 space-y-20"
      >
        {/* 1 */}
        <section>
          <StepHeading
            n="01"
            title="Your details"
            blurb="So we can call you back on the right number."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Field label="Full name" required>
              <input
                className={inputCls(errors.name)}
                data-invalid={errors.name ? "true" : undefined}
                value={f.name}
                onChange={(e) => set("name")(e.target.value)}
                placeholder="Rob Byrne"
                maxLength={100}
              />
            </Field>
            <Field label="Company / site name">
              <input
                className={inputCls()}
                value={f.company}
                onChange={(e) => set("company")(e.target.value)}
                placeholder="Optional"
                maxLength={100}
              />
            </Field>
            <Field label="Email" required>
              <input
                type="email"
                className={inputCls(errors.email)}
                data-invalid={errors.email ? "true" : undefined}
                value={f.email}
                onChange={(e) => set("email")(e.target.value)}
                placeholder="you@example.com"
                maxLength={255}
              />
            </Field>
            <Field label="Phone" required>
              <input
                type="tel"
                className={inputCls(errors.phone)}
                data-invalid={errors.phone ? "true" : undefined}
                value={f.phone}
                onChange={(e) => set("phone")(e.target.value)}
                placeholder="+353 ..."
                maxLength={40}
              />
            </Field>
            <div className="md:col-span-2">
              <Field
                label="Installation address"
                hint="Where the unit actually sits - include Eircode / postcode."
              >
                <input
                  className={inputCls()}
                  value={f.address}
                  onChange={(e) => set("address")(e.target.value)}
                  placeholder="Street, town, Eircode"
                  maxLength={200}
                />
              </Field>
            </div>
          </div>
        </section>

        <hr className="border-obsidian/20" />

        {/* 2 */}
        <section>
          <StepHeading
            n="02"
            title="Your unit"
            blurb="The serial number is on the silver plate on the chiller housing. Without it we can't check your warranty or parts."
          />
          <Field label="Model" required>
            <div className="mt-3 flex flex-wrap gap-3" data-invalid={errors.model ? "true" : undefined}>
              {MODELS.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => set("model")(m)}
                  className={`${chipCls(f.model === m, errors.model)} uppercase tracking-[0.18em] font-medium text-xs px-5`}
                >
                  {m}
                </button>
              ))}
            </div>
          </Field>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Field label="Serial number" required hint="On the silver plate, chiller housing.">
              <input
                className={inputCls(errors.serial)}
                data-invalid={errors.serial ? "true" : undefined}
                value={f.serial}
                onChange={(e) => set("serial")(e.target.value)}
                placeholder="Serial / unit number"
                maxLength={60}
              />
            </Field>
            <Field label="Purchase / install date">
              <input
                type="date"
                className={inputCls()}
                value={f.purchased}
                onChange={(e) => set("purchased")(e.target.value)}
              />
            </Field>
            <div className="md:col-span-2">
              <Field label="Installed by">
                <input
                  className={inputCls()}
                  value={f.installedBy}
                  onChange={(e) => set("installedBy")(e.target.value)}
                  placeholder="C11 team / own contractor / self-installed"
                  maxLength={120}
                />
              </Field>
            </div>
          </div>
        </section>

        <hr className="border-obsidian/20" />

        {/* 3 */}
        <section>
          <StepHeading
            n="03"
            title="What's happening"
            blurb="The more specific, the faster we can fix it remotely."
          />

          <Field label="Issue area">
            <div className="mt-3 flex flex-wrap gap-3">
              {ISSUE_AREAS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => set("area")(a)}
                  className={chipCls(f.area === a)}
                >
                  {a}
                </button>
              ))}
            </div>
          </Field>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Field label="Error code shown" hint="e.g. P01, E05.">
              <input
                className={inputCls()}
                value={f.errorCode}
                onChange={(e) => set("errorCode")(e.target.value)}
                placeholder="None / P01"
                maxLength={30}
              />
            </Field>
            <Field label="Current water temp">
              <input
                className={inputCls()}
                value={f.waterTemp}
                onChange={(e) => set("waterTemp")(e.target.value)}
                placeholder="e.g. 14°C"
                maxLength={20}
              />
            </Field>
            <Field label="When did it start?">
              <input
                className={inputCls()}
                value={f.started}
                onChange={(e) => set("started")(e.target.value)}
                placeholder="e.g. 3 days ago"
                maxLength={60}
              />
            </Field>
          </div>

          <div className="mt-8">
            <Field label="How often">
              <div className="mt-3 flex flex-wrap gap-3">
                {FREQUENCY.map((x) => (
                  <button
                    key={x}
                    type="button"
                    onClick={() => set("frequency")(x)}
                    className={chipCls(f.frequency === x)}
                  >
                    {x}
                  </button>
                ))}
              </div>
            </Field>
          </div>

          <div className="mt-8">
            <Field
              label="Describe the issue"
              required
              hint="What you see, hear and what the display says. Include anything that changed recently."
            >
              <textarea
                rows={7}
                className={inputCls(errors.description)}
                data-invalid={errors.description ? "true" : undefined}
                value={f.description}
                onChange={(e) => set("description")(e.target.value)}
                placeholder="The pump runs for about 30 seconds, then the display shows P01 and it stops. Water level is at the line, filter cleaned yesterday..."
                maxLength={2000}
              />
            </Field>
            <div className="mt-2 text-right text-[12px] text-obsidian/40">
              {f.description.length}/2000
            </div>
          </div>
        </section>

        <hr className="border-obsidian/20" />

        {/* 4 */}
        <section>
          <StepHeading
            n="04"
            title="What you've already tried"
            blurb="Tick everything you've done. This is what stops us arriving to clean a filter."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-obsidian border border-obsidian rounded-[2px] overflow-hidden">
            {CHECKS.map((c) => {
              const on = checks.includes(c);
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => toggleCheck(c)}
                  aria-pressed={on}
                  className={`text-left p-5 flex items-start gap-4 transition-colors ${
                    on ? "bg-thermal-rose" : "bg-stone-base hover:bg-soft-mineral/40"
                  }`}
                >
                  <span
                    className={`mt-0.5 h-4 w-4 shrink-0 rounded-[2px] border border-obsidian grid place-items-center text-[10px] font-bold ${
                      on ? "bg-obsidian text-stone-base" : ""
                    }`}
                    aria-hidden
                  >
                    {on ? "✓" : ""}
                  </span>
                  <span className="text-[14px] leading-snug">{c}</span>
                </button>
              );
            })}
          </div>
        </section>

        <hr className="border-obsidian/20" />

        {/* 5 */}
        <section>
          <StepHeading
            n="05"
            title="Photos & video"
            blurb="A 20 second video of the unit running tells us more than ten messages. Include the display, the filter housing and any leak."
          />
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              onFiles(e.dataTransfer.files);
            }}
            className="border border-dashed border-obsidian/40 rounded-[2px] p-10 text-center"
          >
            <p className="font-display text-xl font-bold uppercase leading-none">Drop files here</p>
            <p className="mt-3 font-editorial italic text-obsidian/60">
              Photos of the serial plate, the display, the filter and a short video of the fault.
            </p>
            <input
              ref={fileInput}
              type="file"
              multiple
              accept="image/*,video/*"
              className="hidden"
              onChange={(e) => onFiles(e.target.files)}
            />
            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              className="mt-6 inline-flex items-center gap-2 px-6 py-4 bg-obsidian text-stone-base rounded-[2px] text-sm font-medium uppercase tracking-[0.18em] hover:bg-deep-current transition-colors"
            >
              Choose files →
            </button>
          </div>

          {files.length > 0 && (
            <ul className="mt-6 divide-y divide-obsidian/15 border border-obsidian/20 rounded-[2px]">
              {files.map((x, i) => (
                <li
                  key={`${x.name}-${i}`}
                  className="flex items-center justify-between gap-4 px-5 py-4"
                >
                  <span className="text-sm truncate">{x.name}</span>
                  <span className="flex items-center gap-4 shrink-0">
                    <span className="text-[12px] text-obsidian/50">{bytes(x.size)}</span>
                    <button
                      type="button"
                      onClick={() => setFiles((p) => p.filter((_, j) => j !== i))}
                      className="text-[12px] uppercase tracking-[0.18em] text-obsidian/60 hover:text-deep-current transition-colors"
                    >
                      Remove
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-4 text-[13px] text-obsidian/60 font-editorial italic">
            Your files upload securely with the request - no need to email them separately.
          </p>
        </section>

        <hr className="border-obsidian/20" />

        {/* 6 */}
        <section>
          <StepHeading
            n="06"
            title="Next step"
            blurb="We start with a remote call wherever possible."
          />
          <Field label="Site access">
            <div className="mt-3 flex flex-wrap gap-3">
              {ACCESS.map((x) => (
                <button
                  key={x}
                  type="button"
                  onClick={() => set("access")(x)}
                  className={chipCls(f.access === x)}
                >
                  {x}
                </button>
              ))}
            </div>
          </Field>
          <div className="mt-8">
            <Field label="Best times to reach you">
              <input
                className={inputCls()}
                value={f.availability}
                onChange={(e) => set("availability")(e.target.value)}
                placeholder="e.g. weekday mornings before 11"
                maxLength={120}
              />
            </Field>
          </div>
        </section>

        {!submitted && (
          <div className="pt-4">
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-obsidian text-stone-base rounded-[2px] text-sm font-medium uppercase tracking-[0.18em] hover:bg-deep-current transition-colors disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send request →"}
            </button>
            {Object.keys(errors).length > 0 && (
              <p className="mt-4 text-sm text-deep-current">
                Some required fields are missing - they&apos;re outlined above.
              </p>
            )}
            {sendError && <p className="mt-4 text-sm text-deep-current">{sendError}</p>}
          </div>
        )}

        {/* CONFIRMATION */}
        {submitted && (
          <section ref={summaryRef} className="scroll-mt-24">
            <div className="border border-obsidian rounded-[2px] overflow-hidden">
              <div className="bg-obsidian text-stone-base p-8 md:p-10">
                <div className="text-xs uppercase tracking-[0.22em] text-stone-base/70 flex items-center gap-2">
                  <span aria-hidden>✳</span>
                  <span>Request received</span>
                </div>
                <h2 className="mt-5 font-display text-3xl md:text-4xl font-bold uppercase leading-none">
                  Sent to the team.
                </h2>
                <p className="mt-4 font-editorial italic text-stone-base/70 max-w-xl">
                  Your request{" "}
                  {files.length > 0
                    ? `and ${files.length} file${files.length > 1 ? "s" : ""} are`
                    : "is"}{" "}
                  with our engineers. {SUPPORT.responseTime} Need us sooner, message WhatsApp with
                  your serial number.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-thermal-rose text-obsidian rounded-[2px] text-sm font-medium uppercase tracking-[0.18em] hover:bg-stone-base transition-colors"
                  >
                    Chase on WhatsApp →
                  </a>
                  <button
                    type="button"
                    onClick={copy}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-base/50 rounded-[2px] text-sm font-medium uppercase tracking-[0.18em] hover:border-stone-base transition-colors"
                  >
                    {copied ? "Copied ✓" : "Copy a record"}
                  </button>
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-stone-base/50">
                  {SUPPORT.email} · {SUPPORT.whatsappNumber}
                </p>
              </div>
              <pre className="bg-stone-base p-8 md:p-10 text-[13px] leading-relaxed whitespace-pre-wrap font-sans">
                {summary}
              </pre>
            </div>
          </section>
        )}
      </form>
    </main>
  );
}
