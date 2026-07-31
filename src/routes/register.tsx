import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Warranty Registration - C11 Recovery" },
      {
        name: "description",
        content:
          "Register your C11 ice bath in minutes. We file your serial number and warranty so any future service request is faster.",
      },
      { property: "og:title", content: "Warranty Registration - C11 Recovery" },
      {
        property: "og:description",
        content:
          "Register your C11 ice bath to activate your 2-year chiller and 5-year shell warranty.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegisterPage,
});

const SUPPORT = {
  email: "service@c11recovery.com",
  whatsappBase: "https://wa.me/353851426203",
  hours: "Mon-Fri · 9:00-17:30 GMT",
};

const MODELS = ["Kinos", "Kinos Plus", "Hanki", "Kuura", "Not sure"];

const labelCls = "block text-xs uppercase tracking-[0.2em] font-medium text-obsidian/70";

function inputCls(invalid?: boolean) {
  return [
    "mt-3 w-full bg-stone-base border rounded-[2px] px-4 py-3 text-[15px]",
    "placeholder:text-obsidian/35 focus:outline-none focus:border-deep-current transition-colors",
    invalid ? "border-thermal-rose" : "border-obsidian/25",
  ].join(" ");
}

const chipCls = (on: boolean, invalid?: boolean) =>
  `px-4 py-3 rounded-[2px] border text-[13px] transition-colors ${
    on
      ? "bg-obsidian text-stone-base border-obsidian"
      : `bg-stone-base ${invalid ? "border-thermal-rose" : "border-obsidian/25"} hover:border-obsidian`
  }`;

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

function RegisterPage() {
  const [f, setF] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    model: "",
    serial: "",
    purchaseDate: "",
    retailer: "",
    installDate: "",
    installedBy: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [ref, setRef] = useState<string>("");

  const set = (k: keyof typeof f) => (v: string) => setF((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const req: (keyof typeof f)[] = ["name", "email", "phone", "model", "serial"];
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
      const id = crypto.randomUUID();
      const { error: insertError } = await supabase
        .from("warranty_registrations")
        .insert({
          id,
          name: f.name.trim(),
          email: f.email.trim(),
          phone: f.phone.trim(),
          address: f.address.trim() || null,
          model: f.model,
          serial: f.serial.trim(),
          purchase_date: f.purchaseDate || null,
          retailer: f.retailer.trim() || null,
          install_date: f.installDate || null,
          installed_by: f.installedBy.trim() || null,
          notes: f.notes.trim() || null,
        });
      if (insertError) throw insertError;
      setRef(id.slice(0, 8));

      // Notify the service team by email (non-blocking).
      try {
        await fetch("/api/public/warranty-registration-notify", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id }),
        });
      } catch (notifyErr) {
        console.error("Warranty registration notification failed", notifyErr);
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Warranty registration submit failed", err);
      setSendError(
        "We could not register that automatically. Please try again, or email service@c11recovery.com.",
      );
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <main className="bg-stone-base text-obsidian min-h-screen">
        <section className="border-b border-obsidian">
          <div className="mx-auto max-w-[900px] px-6 md:px-12 py-24 md:py-32 text-center">
          <div className="text-xs uppercase tracking-[0.22em] font-medium text-obsidian/60 flex items-center justify-center gap-2">
            <span aria-hidden>✳</span>
            <span>Registration complete</span>
          </div>
          <h1
            className="mt-10 font-display uppercase font-bold leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            You're on file.
          </h1>
          <p className="mt-8 font-editorial italic text-lg md:text-xl text-obsidian/70 max-w-xl mx-auto">
            Your {f.model} is registered. We've filed your serial number and warranty - any
            future service request will be faster. A copy has been sent to our service team.
          </p>
          {ref ? (
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-obsidian/50">
              Reference: {ref}
            </p>
          ) : null}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-obsidian text-stone-base px-8 py-4 text-sm uppercase tracking-[0.18em] rounded-[2px] hover:bg-deep-current transition-colors"
            >
              Back to Aftercare
            </Link>
            <Link
              to="/support-request"
              className="inline-flex items-center justify-center border border-obsidian text-obsidian px-8 py-4 text-sm uppercase tracking-[0.18em] rounded-[2px] hover:bg-obsidian hover:text-stone-base transition-colors"
            >
              Raise a service request
            </Link>
          </div>
        </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-stone-base text-obsidian">
      {/* HERO */}
      <section className="border-b border-obsidian">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="text-xs uppercase tracking-[0.22em] font-medium text-obsidian/60 flex items-center gap-2">
            <span aria-hidden>✳</span>
            <span>Warranty Registration</span>
          </div>
          <h1
            className="mt-8 font-display uppercase font-bold leading-[0.88] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Register your
            <br />
            unit in minutes.
          </h1>
          <p className="mt-8 font-editorial italic text-lg md:text-xl text-obsidian/70 max-w-2xl">
            Every C11 ice bath ships with a 2-year chiller warranty and a 5-year pool shell
            warranty. Register within 30 days of delivery so we have your serial number on file -
            it makes any future service request faster.
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-obsidian/60">
            {SUPPORT.hours} · Replies within 1 working day.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-obsidian border border-obsidian rounded-[2px] overflow-hidden max-w-3xl">
            {[
              ["01", "Fill this form", "Details & serial number."],
              ["02", "We file it", "Your warranty activates on our side."],
              ["03", "Faster service", "Any future request skips the back-and-forth."],
            ].map(([n, t, b]) => (
              <div key={n} className="bg-stone-base p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-obsidian/50">{n}</div>
                <div className="mt-3 font-display text-lg font-bold uppercase leading-none">{t}</div>
                <div className="mt-2 text-[13px] text-obsidian/60">{b}</div>
              </div>
            ))}
          </div>
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
            blurb="So we can match the registration to you."
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
            blurb="The serial number is on the silver plate on the chiller housing. Without it we can't activate your warranty."
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
                placeholder="e.g. KP-2026-0142"
                maxLength={60}
              />
            </Field>
            <Field label="Purchase date">
              <input
                type="date"
                className={inputCls()}
                value={f.purchaseDate}
                onChange={(e) => set("purchaseDate")(e.target.value)}
              />
            </Field>
            <div className="md:col-span-2">
              <Field label="Purchased from" hint="Retailer, dealer, or c11recovery.com.">
                <input
                  className={inputCls()}
                  value={f.retailer}
                  onChange={(e) => set("retailer")(e.target.value)}
                  placeholder="Optional"
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
            title="Installation"
            blurb="When and how it was installed. Leave blank if you're not sure."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Field label="Install date">
              <input
                type="date"
                className={inputCls()}
                value={f.installDate}
                onChange={(e) => set("installDate")(e.target.value)}
              />
            </Field>
            <Field label="Installed by" hint="Self-installed, C11 engineer, or third party.">
              <input
                className={inputCls()}
                value={f.installedBy}
                onChange={(e) => set("installedBy")(e.target.value)}
                placeholder="Optional"
                maxLength={100}
              />
            </Field>
            <div className="md:col-span-2">
              <Field label="Notes" hint="Anything we should know - outdoor install, enclosure, etc.">
                <textarea
                  className={inputCls()}
                  value={f.notes}
                  onChange={(e) => set("notes")(e.target.value)}
                  placeholder="Optional"
                  rows={3}
                  maxLength={1000}
                />
              </Field>
            </div>
          </div>
        </section>

        {sendError ? (
          <p className="text-sm text-thermal-rose font-medium">{sendError}</p>
        ) : null}

        <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-obsidian/20">
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center bg-obsidian text-stone-base px-10 py-4 text-sm uppercase tracking-[0.18em] rounded-[2px] hover:bg-deep-current transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? "Registering…" : "Register My Unit →"}
          </button>
          <p className="text-xs uppercase tracking-[0.18em] text-obsidian/50">
            We'll email {SUPPORT.email} to confirm.
          </p>
        </div>
      </form>

      {/* HELP STRIP */}
      <section className="bg-obsidian text-stone-base border-t border-stone-base/20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-editorial italic text-lg text-stone-base/80 max-w-xl">
            Not sure where to find your serial number? It's on the silver plate on the side or
            rear of the chiller unit.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/manual"
              className="text-xs uppercase tracking-[0.18em] font-medium border-b border-stone-base pb-1 hover:text-thermal-rose hover:border-thermal-rose transition-colors"
            >
              Check the manual →
            </Link>
            <a
              href={SUPPORT.whatsappBase}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.18em] font-medium border-b border-stone-base pb-1 hover:text-thermal-rose hover:border-thermal-rose transition-colors"
            >
              Ask on WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
