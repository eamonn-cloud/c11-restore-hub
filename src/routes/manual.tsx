import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const Route = createFileRoute("/manual")({
  head: () => ({
    meta: [
      { title: "Engineering & Operations Manual — C11 Recovery" },
      {
        name: "description",
        content:
          "Full engineering reference for Kinos, Kinos Plus, Hanki and Kuura recovery systems: specifications, operating parameters, controller calibration, error codes and maintenance procedures.",
      },
      { property: "og:title", content: "Engineering & Operations Manual — C11 Recovery" },
      {
        property: "og:description",
        content:
          "Specifications, error codes and maintenance procedures for the C11 Recovery hydrotherapy fleet.",
      },
    ],
  }),
  component: ManualPage,
});

/* ---------- shared bits ---------- */

function SectionLabel({
  children,
  tone = "obsidian",
}: {
  children: ReactNode;
  tone?: "obsidian" | "stone";
}) {
  const color = tone === "stone" ? "text-stone-base" : "text-obsidian";
  return (
    <div
      className={`${color} text-xs uppercase tracking-[0.22em] font-medium flex items-center gap-2`}
    >
      <span aria-hidden>✳</span>
      <span>{children}</span>
    </div>
  );
}

function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="font-display font-bold uppercase tracking-tight text-3xl md:text-5xl leading-[0.95] scroll-mt-24"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display font-bold uppercase tracking-tight text-xl md:text-2xl leading-tight">
      {children}
    </h3>
  );
}

function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="font-editorial italic text-xl md:text-2xl leading-snug max-w-3xl text-obsidian/80">
      {children}
    </p>
  );
}

function Body({ children }: { children: ReactNode }) {
  return (
    <p className="text-base md:text-[17px] leading-relaxed text-obsidian/85 max-w-3xl">
      {children}
    </p>
  );
}

/* ---------- data ---------- */

const MODELS = ["Kinos", "Kinos Plus", "Hanki (with CHU)", "Kuura"] as const;

const SPEC_ROWS: { label: string; values: [string, string, string, string] }[] = [
  { label: "Primary application", values: ["Compact premium recovery", "Extended commercial capacity", "Modular / on-the-go", "Flagship luxury recovery"] },
  { label: "Shell material", values: ["Single-piece acrylic / fibreglass", "Gel-coated fibreglass", "Dual-layer polyethylene", "Premium acrylic (Midnight Opal)"] },
  { label: "External length (no steps)", values: ["120 cm", "140 cm", "120 cm", "180 cm"] },
  { label: "External width", values: ["79 cm", "79 cm", "79 cm", "79 cm"] },
  { label: "External height", values: ["105 cm", "105 cm", "100 cm", "78 cm"] },
  { label: "Fluid capacity (optimal)", values: ["300 L", "320 L", "350–380 L", "320 L"] },
  { label: "Dry weight (with steps)", values: ["147 kg", "160 kg", "39 kg (pool) + 9 kg (step)", "110 kg"] },
  { label: "Operational weight (filled)", values: ["450 kg", "480 kg", "400–450 kg", "430 kg"] },
  { label: "Temperature range", values: ["+4 °C to +38 °C", "+4 °C to +40 °C", "+4 °C to +40 °C", "+4 °C to +40 °C"] },
  { label: "Cooling / heating rate", values: ["4–5 °C / hour", "3–4 °C / hour", "8 °C / hour", "6–7 °C / hour"] },
  { label: "Compressor power (cooling)", values: ["0.7 kW", "0.7 kW", "1.0 kW", "1.0 kW (integrated)"] },
  { label: "Electrical heater", values: ["1.5 kW", "1.5 kW", "1.0 kW", "1.0 kW (integrated)"] },
  { label: "Daily power consumption", values: ["~5 kWh", "2–5 kWh", "~5 kWh", "2–5 kWh"] },
  { label: "Refrigerant medium", values: ["R134a or R290", "R32 or R290", "R32", "R32"] },
  { label: "Operational noise level", values: ["54 dB(A)", "46 dB(A)", "51 dB(A)", "46 dB(A)"] },
  { label: "Water purification", values: ["Filtration + Ozone", "Filtration + UV", "Fine mesh + optional UV", "Filtration + UV"] },
];

const ERROR_ROWS: {
  code: string;
  description: string;
  action: string;
  causes: string;
  fix: string;
}[] = [
  { code: "E01", description: "Gas discharge over-temperature", action: "Shuts down compressor.", causes: "Blocked airflow; dirty condenser coils; high load.", fix: "Clean condenser coils; ensure 10–15 cm wall clearance." },
  { code: "E05", description: "Condenser coil temp sensor fault", action: "Shuts down compressor.", causes: "Sensor disconnected; damaged wiring harness.", fix: "Inspect sensor connection on main board; replace sensor if damaged." },
  { code: "E09", description: "Suction line temp sensor fault", action: "Shuts down compressor.", causes: "Broken suction sensor; loose connection.", fix: "Check sensor wiring and board plug; replace suction sensor." },
  { code: "E17", description: "Inlet water temp sensor fault", action: "Suspends heating and cooling.", causes: "Defective sensor; moisture in plug.", fix: "Dry sensor plug connections; replace inlet thermistor." },
  { code: "E18", description: "Outlet water temp sensor fault", action: "Suspends heating and cooling.", causes: "Defective sensor; corrosion.", fix: "Clean sensor terminals; replace outlet thermistor." },
  { code: "E22", description: "Ambient temp sensor fault", action: "Pauses unit operation.", causes: "Damaged sensor; extreme ambient air temperature.", fix: "Relocate unit to a sheltered area with stable ambient air." },
  { code: "P01", description: "Water flow switch fault", action: "Shuts down compressor and heater.", causes: "Trapped air; dirty filter; closed valves; low water.", fix: "Bleed air from system; check valves; clean or replace filter." },
  { code: "P02", description: "High refrigerant pressure protection", action: "Shuts down compressor.", causes: "Condenser fan failure; blocked air vents.", fix: "Clear obstructions around vents; verify fan operates properly." },
  { code: "P06", description: "Low refrigerant pressure protection", action: "Shuts down compressor.", causes: "Refrigerant leak; extremely cold ambient air.", fix: "Inspect lines for oil leaks (refrigerant loss); contact service." },
  { code: "P11", description: "Compressor discharge over-temp", action: "Shuts down compressor.", causes: "Heavy cooling load; blocked air grilles.", fix: "Clean condenser coils; ensure adequate room ventilation." },
  { code: "P15", description: "Water excess temperature protection", action: "Shuts down heating and cooling.", causes: "Water temperature has exceeded +40 °C.", fix: "Add fresh, cold water to the pool to lower overall temperature." },
  { code: "P16", description: "Overcooling safety lockout", action: "Shuts down compressor.", causes: "Low water flow in cooling mode; risk of freezing.", fix: "Verify pump is operating; check flow switch function." },
  { code: "P17", description: "Standby freeze protection", action: "Activates pump to circulate water.", causes: "Ambient temperature has dropped below freezing.", fix: "Keep unit running in Automatic Mode; do not use Sleep Mode." },
  { code: "P23", description: "Low water temp protection", action: "Shuts down compressor.", causes: "Water temperature is too low during a cooling cycle.", fix: "Verify temperature sensors; check that water is circulating." },
  { code: "P25", description: "Ambient air temperature protection", action: "Suspends thermal operations.", causes: "External air outside safe operating range.", fix: "Relocate unit to a sheltered area with stable ambient air." },
  { code: "P26", description: "Heating water over-temp protection", action: "Shuts down heating element.", causes: "Water flow is too slow during heating cycle.", fix: "Verify pump operation; clean filter cartridge to increase flow." },
  { code: "P27", description: "Outside condenser over-temp", action: "Shuts down compressor.", causes: "Accumulation of dust / lint on condenser fins.", fix: "Vacuum condenser fins thoroughly with a soft brush attachment." },
];

/* ---------- page ---------- */

function ManualPage() {
  return (
    <div className="bg-stone-base text-obsidian font-body">
      {/* Back nav */}
      <div className="border-b border-obsidian/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="text-xs uppercase tracking-[0.22em] font-medium hover:text-deep-current transition-colors"
          >
            ← Aftercare
          </Link>
          <span className="text-xs uppercase tracking-[0.22em] text-obsidian/60">
            Engineering Reference
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-obsidian text-stone-base">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-32">
          <SectionLabel tone="stone">Operations, Maintenance & Diagnostics</SectionLabel>
          <h1
            className="mt-8 font-display font-black uppercase tracking-tight leading-[0.9]"
            style={{ fontSize: "clamp(2.75rem, 8vw, 6.5rem)" }}
          >
            Engineering
            <br />
            Reference Manual
          </h1>
          <p className="mt-10 font-editorial italic text-xl md:text-2xl leading-snug max-w-3xl text-stone-base/85">
            Everything an owner or technician needs to configure, maintain and diagnose the C11
            Recovery hydrotherapy fleet — Kinos, Kinos Plus, Hanki and Kuura.
          </p>

          {/* TOC */}
          <nav className="mt-14 border-t border-stone-base/25 pt-8 grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-8 text-sm">
            {[
              ["Comparative specifications", "specs"],
              ["Fluid additions & chemistry", "chemistry"],
              ["Manual ice addition", "ice"],
              ["Electrical & ground-fault", "electrical"],
              ["Ventilation & clearances", "ventilation"],
              ["Outdoor use & enclosures", "outdoor"],
              ["Sleep mode & freezing", "sleep"],
              ["Controller & calibration", "controller"],
              ["Error code matrix", "errors"],
              ["P01 flow fault workflow", "p01"],
              ["Maintenance procedures", "maintenance"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="uppercase tracking-[0.16em] text-stone-base/80 hover:text-thermal-rose transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="border-b border-obsidian/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28">
          <SectionLabel>Comparative Specifications</SectionLabel>
          <H2>System Configurations</H2>
          <div className="mt-8 space-y-6">
            <Lede>
              Four systems engineered by Avantopool — three integrated cabinets and one modular
              basin paired with an external Cooling &amp; Heating Unit.
            </Lede>
            <Body>
              The Kinos, Kinos Plus and Kuura are integrated systems with built-in refrigeration
              and heating machinery in a single ergonomic cabinet. The Hanki is modular: a
              dual-layer insulated polyethylene basin connected to an external CHU via
              quick-connect plumbing.
            </Body>
          </div>

          <div className="mt-12 overflow-x-auto border border-obsidian/20">
            <table className="w-full min-w-[860px] text-sm">
              <thead>
                <tr className="bg-obsidian text-stone-base">
                  <th className="text-left font-medium uppercase tracking-[0.16em] text-xs px-4 py-4 w-56">
                    Parameter
                  </th>
                  {MODELS.map((m) => (
                    <th
                      key={m}
                      className="text-left font-medium uppercase tracking-[0.16em] text-xs px-4 py-4"
                    >
                      {m}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPEC_ROWS.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 ? "bg-obsidian/[0.03]" : "bg-transparent"}
                  >
                    <td className="px-4 py-3 font-medium border-t border-obsidian/15">
                      {row.label}
                    </td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-4 py-3 border-t border-obsidian/15 text-obsidian/85">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Body>
            <span className="block mt-8">
              The Hanki&rsquo;s external CHU delivers the fastest thermal transition (8 °C / hour)
              via its larger 1.0 kW compressor. Integrated Kinos and Kinos Plus prioritise quiet
              operation (46–54 dB(A)) and efficient thermal performance (2–5 kWh / day) using
              robust insulation and smaller 0.7 kW cooling loops. Refrigerant choice reflects
              environmental standards: R134a on older or highly compact units; R32 or the ultra-low
              GWP R290 on newer builds.
            </span>
          </Body>
        </div>
      </section>

      {/* Chemistry */}
      <section id="chemistry" className="border-b border-obsidian/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28">
          <SectionLabel>Fluid Additions & Hydraulic Contaminants</SectionLabel>
          <H2>No Salts. No Oils. No Bath Bombs.</H2>
          <div className="mt-8 space-y-6">
            <Lede>
              On Kinos, Kinos Plus, Kuura and Hanki (with an active CHU), adding any salt, mineral
              or oil is strictly prohibited.
            </Lede>
            <Body>
              The primary heat-exchanger plates are manufactured from high-grade metals that are
              susceptible to chemical attack. Dissolving mineral salts increases the electrical
              conductivity of the water and accelerates galvanic corrosion between dissimilar
              metals in the hydraulic loop, which can produce pinhole leaks in the plates. If a
              leak occurs, high-pressure refrigerant contaminates the water loop and water enters
              the sealed compressor — destroying the thermal machinery and voiding the warranty.
            </Body>
            <Body>
              Essential oils and bath-bomb binders leave organic residues on the quartz sleeve of
              the UV purifier and clog the paper filter cartridge, halting circulation and
              triggering system errors.
            </Body>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                t: "pH Range",
                b: "Maintain water pH strictly between 7.2 and 7.6 to prevent acidic pitting of metals or alkaline scaling on the heat-exchanger plates.",
              },
              {
                n: "02",
                t: "Sanitation",
                b: "Use sodium dichloroisocyanurate dihydrate. Residential / low-use: ½ teaspoon weekly. Commercial (10+ users/day or water above 15 °C): daily monitoring, free chlorine 0.3–1.2 ppm.",
              },
              {
                n: "03",
                t: "Pre-plunge Hygiene",
                b: "Require all users to shower before entering. Removes body oils, lotions and cosmetics — protects filters and extends water life.",
              },
            ].map((c) => (
              <div
                key={c.n}
                className="border border-obsidian/25 p-6 rounded-[2px] flex flex-col gap-3"
              >
                <div className="font-display text-4xl font-bold tabular-nums text-obsidian/40">
                  {c.n}
                </div>
                <H3>{c.t}</H3>
                <p className="text-sm leading-relaxed text-obsidian/80">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ice */}
      <section id="ice" className="border-b border-obsidian/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28">
          <SectionLabel>Manual Ice Addition</SectionLabel>
          <H2>Do Not Add Ice To Active Systems</H2>
          <div className="mt-8 space-y-6">
            <Lede>
              Introducing solid ice into any machine-chilled pool is strictly forbidden.
            </Lede>
            <Body>
              These systems use electronic temperature sensors and automated refrigeration loops to
              hold precise setpoints. Adding ice creates three failure modes:
            </Body>
          </div>

          <div className="mt-10 divide-y divide-obsidian/15 border-y border-obsidian/25">
            {[
              [
                "Sensor malfunction",
                "The sudden drop in water temperature confuses the control sensors, triggering low-temperature protection locks (P15, P16 or P23) and shutting down the system.",
              ],
              [
                "Physical damage",
                "Solid ice pieces bypass suction strainers, enter the pipework, and can damage the circulation pump impeller or block the flow-switch paddle.",
              ],
              [
                "Plate freezing",
                "Ice accumulating near the heat-exchanger inlet drops local water temperature to 0 °C. Water can then freeze inside the narrow channels of the plate exchanger, cracking the plates and destroying the refrigeration unit.",
              ],
            ].map(([t, b]) => (
              <div key={t} className="grid md:grid-cols-[220px_1fr] gap-6 py-6">
                <H3>{t}</H3>
                <p className="text-obsidian/85 leading-relaxed max-w-2xl">{b}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-thermal-rose bg-thermal-rose/25 p-6 rounded-[2px] max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] font-medium mb-2">
              ✳ Operational Exception
            </div>
            <p className="text-obsidian leading-relaxed">
              Manual ice cooling is permitted only when using a standalone, &ldquo;plugged&rdquo;
              Hanki basin operating without an external CHU. In this configuration the inlet and
              outlet ports are sealed with brass plugs, and the water is cooled solely by adding
              ice cubes directly to the tub.
            </p>
          </div>
        </div>
      </section>

      {/* Electrical */}
      <section id="electrical" className="border-b border-obsidian/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28">
          <SectionLabel>Electrical & Ground-Fault Safety</SectionLabel>
          <H2>Grounded, Fused, RCD-Protected</H2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              ["Power supply", "Dedicated, grounded 220–240 V single-phase outlet (50 Hz or 60 Hz)."],
              ["Overcurrent", "Supply circuit must be protected by a dedicated fuse rated 10 A minimum."],
              [
                "Ground-fault (RCD)",
                "Every model ships with a high-sensitivity Residual Current Device on the power cord. It monitors current balance between hot and neutral and cuts power in milliseconds on a leak to ground.",
              ],
            ].map(([t, b]) => (
              <div key={t} className="border border-obsidian/25 p-6 rounded-[2px]">
                <H3>{t}</H3>
                <p className="mt-3 text-sm leading-relaxed text-obsidian/85">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventilation */}
      <section id="ventilation" className="border-b border-obsidian/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28">
          <SectionLabel>Ventilation & Airflow Clearances</SectionLabel>
          <H2>Give The Machinery Air To Breathe</H2>
          <div className="mt-8 space-y-6">
            <Body>
              All active cooling and heating units rely on a heat-rejection cycle that requires a
              steady supply of fresh, ambient air.
            </Body>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="border border-obsidian/25 p-6 rounded-[2px]">
              <H3>Integrated units — Kinos, Kinos Plus, Kuura</H3>
              <p className="mt-3 text-obsidian/85 leading-relaxed">
                Maintain at least <strong>10–15 cm</strong> of clearance between the ventilation
                grilles on the long sides of the cabinet and any wall or solid structure. Never
                block or cover these grilles.
              </p>
              <pre className="mt-4 text-xs leading-snug text-obsidian/75 font-mono whitespace-pre-wrap">
{`[Wall] <── 10–15 cm ──> [Pool Cabinet Vents] → intake`}
              </pre>
            </div>
            <div className="border border-obsidian/25 p-6 rounded-[2px]">
              <H3>External unit — Hanki CHU</H3>
              <p className="mt-3 text-obsidian/85 leading-relaxed">
                Provide a minimum clearance of <strong>150 cm</strong> in front of the exhaust fan.
                Never install the CHU inside a sealed cabinet, box or unventilated storage room.
                Without airflow, heat accumulates and the unit throws high-pressure faults (P02,
                P11) before shutting down the compressor.
              </p>
              <pre className="mt-4 text-xs leading-snug text-obsidian/75 font-mono whitespace-pre-wrap">
{`[CHU Front] <── 150 cm ──> [Open Air] → exhaust`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor */}
      <section id="outdoor" className="border-b border-obsidian/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28">
          <SectionLabel>Environmental Enclosures & Outdoor Use</SectionLabel>
          <H2>Where Each System Can Live</H2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="border border-obsidian/25 p-6 rounded-[2px]">
              <H3>Kinos & Kinos Plus</H3>
              <p className="mt-3 text-obsidian/85 leading-relaxed">
                Designed primarily for indoor use. May be placed outdoors only if completely
                sheltered from rain, snow and direct sunlight — for example on a glazed patio or
                enclosed balcony.
              </p>
            </div>
            <div className="border border-obsidian/25 p-6 rounded-[2px]">
              <H3>Hanki & Kuura</H3>
              <p className="mt-3 text-obsidian/85 leading-relaxed">
                IPX4 weather-resistance rating; approved for outdoor use in ambient air between{" "}
                <strong>−7 °C and +43 °C</strong>. Still require an insulated cover to protect
                the water from rain, wind-blown debris and direct sunlight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sleep mode */}
      <section id="sleep" className="border-b border-obsidian/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28">
          <SectionLabel>Sleep Mode In Freezing Environments</SectionLabel>
          <H2>Never Sleep Below Freezing</H2>
          <div className="mt-8 space-y-6">
            <Lede>
              Sleep Mode reduces power consumption by 30–40% by disabling the circulation pump —
              which is exactly why it must not be used in cold weather.
            </Lede>
          </div>

          <div className="mt-10 divide-y divide-obsidian/15 border-y border-obsidian/25">
            {[
              [
                "Prohibition",
                "Do not use Sleep Mode below +4 °C ambient for Kinos models, or below 0 °C for Hanki and Kuura.",
              ],
              [
                "Mechanism",
                "With Sleep Mode active, the circulation pump stops. In freezing conditions static water can freeze inside the pipes and plate heat exchanger, cracking components and causing extensive water damage.",
              ],
              [
                "Winter operation",
                "In freezing weather, run the system continuously in Automatic Mode — constant water movement prevents ice formation. If the system will be unused through winter, drain all water from the pool and CHU, disconnect the hoses, and store the equipment in a dry, heated indoor space.",
              ],
            ].map(([t, b]) => (
              <div key={t} className="grid md:grid-cols-[220px_1fr] gap-6 py-6">
                <H3>{t}</H3>
                <p className="text-obsidian/85 leading-relaxed max-w-2xl">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Controller */}
      <section id="controller" className="border-b border-obsidian/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28">
          <SectionLabel>User Interface & Calibration</SectionLabel>
          <H2>Controller Reference</H2>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <H3>Locking mechanics</H3>
              <ul className="mt-4 space-y-3 text-obsidian/85 leading-relaxed">
                <li>
                  <strong>Auto-lock:</strong> the controller locks after 60 seconds of touch
                  inactivity. A padlock icon appears on the display.
                </li>
                <li>
                  <strong>Unlock:</strong> tap any key to light the display, then press and hold
                  the power / unlock button for 5 seconds. Release when the confirmation beep
                  sounds and the padlock disappears.
                </li>
              </ul>
            </div>

            <div>
              <H3>Thermal mode selection</H3>
              <p className="mt-4 text-obsidian/85 leading-relaxed">
                With the system unlocked and powered on, press the mode button to cycle:
              </p>
              <pre className="mt-4 text-sm font-mono text-obsidian/85 whitespace-pre-wrap leading-relaxed border-l-2 border-deep-current pl-4">
{`Cooling  ✳  →  Heating  ✳  →  Automatic  ↻  →  Cooling …`}
              </pre>
              <p className="mt-4 text-obsidian/85 leading-relaxed">
                Automatic Mode applies a programmed temperature-differential delay so the system
                does not cycle rapidly between cooling and heating near setpoint — this protects
                the compressor from premature wear.
              </p>
            </div>

            <div>
              <H3>Ozonator calibration</H3>
              <ol className="mt-4 space-y-2 text-obsidian/85 leading-relaxed list-decimal list-inside">
                <li>Confirm the unit is powered on and the screen is locked.</li>
                <li>Press and hold the power button.</li>
                <li>
                  While holding power, press and hold the mode button until <code>L0</code> appears.
                </li>
                <li>Release both buttons.</li>
                <li>Use the down arrow to select the desired ozone output level.</li>
              </ol>
            </div>

            <div>
              <H3>Clock & operational timers</H3>
              <ol className="mt-4 space-y-2 text-obsidian/85 leading-relaxed list-decimal list-inside">
                <li>Hold the clock icon for 5 seconds — hour and minute digits will flash.</li>
                <li>Tap mode / time to select hour; adjust with up / down arrows.</li>
                <li>Tap mode / time again to select minute; adjust with arrows.</li>
                <li>
                  Press the timer button to enter timer settings and program up to two
                  non-overlapping active periods. The system only runs during these windows.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Errors */}
      <section id="errors" className="border-b border-obsidian/15 bg-obsidian text-stone-base">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28">
          <SectionLabel tone="stone">Fault & Protection Codes</SectionLabel>
          <h2 className="mt-8 font-display font-bold uppercase tracking-tight text-3xl md:text-5xl leading-[0.95]">
            Error Code Matrix
          </h2>
          <p className="mt-8 font-editorial italic text-xl md:text-2xl leading-snug max-w-3xl text-stone-base/85">
            Every E-code and P-code the controller can display, what protection it triggers, and
            where to look first.
          </p>

          <div className="mt-12 overflow-x-auto border border-stone-base/25">
            <table className="w-full min-w-[900px] text-sm">
              <thead>
                <tr className="bg-stone-base text-obsidian">
                  {["Code", "Description", "Safety action", "Common causes", "Recommended fix"].map(
                    (h) => (
                      <th
                        key={h}
                        className="text-left font-medium uppercase tracking-[0.16em] text-xs px-4 py-4"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {ERROR_ROWS.map((r, i) => (
                  <tr key={r.code} className={i % 2 ? "bg-stone-base/[0.04]" : "bg-transparent"}>
                    <td className="px-4 py-3 border-t border-stone-base/20 font-display font-bold tabular-nums">
                      {r.code}
                    </td>
                    <td className="px-4 py-3 border-t border-stone-base/20">{r.description}</td>
                    <td className="px-4 py-3 border-t border-stone-base/20 text-stone-base/80">
                      {r.action}
                    </td>
                    <td className="px-4 py-3 border-t border-stone-base/20 text-stone-base/80">
                      {r.causes}
                    </td>
                    <td className="px-4 py-3 border-t border-stone-base/20 text-stone-base/80">
                      {r.fix}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* P01 workflow */}
      <section id="p01" className="border-b border-obsidian/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28">
          <SectionLabel>Deep Dive</SectionLabel>
          <H2>P01 — Water Flow Fault</H2>
          <div className="mt-8 space-y-6">
            <Lede>
              Triggered when the flow paddle or pressure switch detects circulation below the safe
              threshold of ~10–12 litres / minute.
            </Lede>
            <Body>
              To prevent ice forming in the heat exchanger (cooling) or the heating element
              overheating (heating), the control board triggers an immediate safety shutdown of the
              thermal machinery.
            </Body>
          </div>

          <div className="mt-10">
            <H3>Five main causes</H3>
            <div className="mt-4 divide-y divide-obsidian/15 border-y border-obsidian/25">
              {[
                ["Air entrainment (air lock)", "Air pockets trapped inside the pump impeller chamber or heat exchanger stop the centrifugal pump from priming."],
                ["Clogged filter cartridge", "A heavily soiled or blocked cartridge restricts flow below the minimum safe threshold."],
                ["Closed isolation valves", "The water valves between the pool and the external CHU are partially or fully closed."],
                ["Low water level", "Water falls below the intake skimmer or suction port, so the system draws air and breaks the hydraulic prime."],
                ["Damaged O-rings or fittings", "Torn or misaligned O-rings in the quick-connect water fittings draw air into the suction lines."],
              ].map(([t, b]) => (
                <div key={t} className="grid md:grid-cols-[280px_1fr] gap-6 py-5">
                  <div className="font-display uppercase tracking-tight text-lg">{t}</div>
                  <p className="text-obsidian/85 leading-relaxed max-w-2xl">{b}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <H3>Step-by-step resolution workflow</H3>
            <ol className="mt-6 space-y-6 max-w-3xl">
              {[
                ["Verify water level", "Confirm the water sits at the recommended height. Kinos / Kinos Plus: above the minimum line on the skimmer cover. Hanki: just below the upper suction nozzle."],
                ["Inspect isolation valves", "Ensure every inline water valve between the pool and the external CHU is fully open."],
                ["Bleed air from the filter", "If your system has a cartridge filter housing, press and hold the air-bleed button on top of the dome until water sprays out, then tighten."],
                ["Purge air locks", "Power off and unplug the unit. Connect a garden hose directly to the pool's upper water nozzle. Seal around the hose with a wet cloth and open the tap on high. Pressurised water flushes trapped air pockets out through the lower nozzle."],
                ["Clean or replace the filter", "Power off, remove the cartridge, and restart the unit briefly without the filter. If P01 clears, the cartridge is clogged — clean thoroughly or replace. Do not run the pool without a filter for extended periods."],
                ["Perform a system reset", "Unplug the power cord from the wall outlet, wait 60 seconds for the control board capacitors to drain, then plug it back in."],
              ].map(([t, b], i) => (
                <li key={t} className="grid grid-cols-[56px_1fr] gap-4">
                  <span className="font-display font-bold text-4xl tabular-nums text-obsidian/35 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-display uppercase tracking-tight text-lg">{t}</div>
                    <p className="mt-2 text-obsidian/85 leading-relaxed">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section id="maintenance" className="border-b border-obsidian/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28">
          <SectionLabel>Technical Maintenance & Diagnostics</SectionLabel>
          <H2>Field Procedures</H2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="border border-obsidian/25 p-6 rounded-[2px]">
              <div className="font-display text-4xl font-bold tabular-nums text-obsidian/40">
                01
              </div>
              <H3>Manual counter-current pipe flushing</H3>
              <p className="mt-3 text-sm leading-relaxed text-obsidian/85">
                If flow stays low after cleaning the cartridge, fine debris (hair, sand, lint) may
                be trapped in the internal plumbing. Turn off main power and unplug. Remove the
                cartridge. Insert a garden hose into the pool's water inlet nozzle, seal around it
                with a cloth, and open the tap on high. Reverse flow flushes debris back through
                the system and into the empty filter housing, where it can be wiped away.
              </p>
            </div>

            <div className="border border-obsidian/25 p-6 rounded-[2px]">
              <div className="font-display text-4xl font-bold tabular-nums text-obsidian/40">
                02
              </div>
              <H3>Troubleshoot a blank display</H3>
              <ol className="mt-3 text-sm leading-relaxed text-obsidian/85 list-decimal list-inside space-y-2">
                <li>Test the wall outlet with another device to confirm power.</li>
                <li>
                  Check the Residual Current Device (RCD) on the power cord. If tripped, press the
                  red reset button.
                </li>
                <li>
                  Verify grounding (230 V / 50 Hz or 60 Hz). If the RCD trips again immediately,
                  unplug the unit and contact an electrician or service technician.
                </li>
              </ol>
            </div>

            <div className="border border-obsidian/25 p-6 rounded-[2px]">
              <div className="font-display text-4xl font-bold tabular-nums text-obsidian/40">
                03
              </div>
              <H3>Clean the condenser coils</H3>
              <p className="mt-3 text-sm leading-relaxed text-obsidian/85">
                If the compressor runs continuously but the system can&rsquo;t hold setpoint, dust
                on the condenser fins is likely insulating them. Turn off main power and unplug.
                Remove the side access panels from the cabinet (or external CHU). Vacuum the metal
                grates with a soft-brush attachment — even a thin layer of fine dust affects
                performance. Refit the panels with the vents directly in front of the machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Talk to us */}
      <section id="talk" className="border-b border-obsidian/15">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left column */}
          <div className="flex flex-col">
            <SectionLabel>Talk to us</SectionLabel>
            <h2 className="mt-8 font-display font-black uppercase tracking-tight leading-[0.9] text-4xl md:text-6xl">
              Human support,
              <br />
              on demand.
            </h2>
            <p className="mt-8 font-editorial italic text-xl md:text-2xl leading-snug max-w-md text-obsidian/80">
              Prefer to speak to someone? Our team is here weekdays across every channel — WhatsApp
              is the fastest.
            </p>
            <p className="mt-auto pt-10 text-xs uppercase tracking-[0.22em] text-obsidian/65 max-w-xs leading-relaxed">
              Mon–Fri · 9:00–17:30 GMT · Replies within 1 working day.
            </p>
          </div>

          {/* Right column — 2x2 contact tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-obsidian/25 rounded-[2px]">
            {/* WhatsApp */}
            <a
              href="https://wa.me/353851426203"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 md:p-8 min-h-[240px] border-b sm:border-r border-obsidian/25 hover:bg-obsidian/[0.04] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.22em] font-medium">WhatsApp</span>
                <span className="text-xs uppercase tracking-[0.22em] font-medium text-deep-current flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-deep-current" />
                  Live
                </span>
              </div>
              <H3>
                <span className="block mt-8">Chat now</span>
              </H3>
              <div className="mt-3 font-editorial italic text-lg text-obsidian/80">
                +353 85 142 6203
              </div>
              <div className="mt-auto pt-8 flex items-center justify-between text-xs uppercase tracking-[0.22em] font-medium border-b border-obsidian pb-2">
                <span>Open WhatsApp</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+353851426203"
              className="group flex flex-col p-6 md:p-8 min-h-[240px] border-b border-obsidian/25 hover:bg-obsidian/[0.04] transition-colors"
            >
              <span className="text-xs uppercase tracking-[0.22em] font-medium">Phone</span>
              <H3>
                <span className="block mt-8">Call the team</span>
              </H3>
              <div className="mt-3 font-editorial italic text-lg text-obsidian/80">
                +353 85 142 6203
              </div>
              <div className="mt-auto pt-8 flex items-center justify-between text-xs uppercase tracking-[0.22em] font-medium border-b border-obsidian pb-2">
                <span>Dial now</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:support@c11recovery.com"
              className="group flex flex-col p-6 md:p-8 min-h-[240px] sm:border-r border-obsidian/25 hover:bg-obsidian/[0.04] transition-colors"
            >
              <span className="text-xs uppercase tracking-[0.22em] font-medium">Email</span>
              <H3>
                <span className="block mt-8">Send a note</span>
              </H3>
              <div className="mt-3 font-editorial italic text-lg text-obsidian/80 break-all">
                support@c11recovery.com
              </div>
              <div className="mt-auto pt-8 flex items-center justify-between text-xs uppercase tracking-[0.22em] font-medium border-b border-obsidian pb-2">
                <span>Write to support</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>

            {/* Service request — dark tile */}
            <a
              href="mailto:support@c11recovery.com?subject=Service%20Request%20%E2%80%94%20Callback"
              className="group flex flex-col p-6 md:p-8 min-h-[240px] bg-obsidian text-stone-base hover:bg-obsidian/90 transition-colors"
            >
              <span className="text-xs uppercase tracking-[0.22em] font-medium text-stone-base/80">
                Service Request
              </span>
              <h3 className="mt-8 font-display font-bold uppercase tracking-tight text-xl md:text-2xl leading-tight">
                Book a callback
              </h3>
              <div className="mt-3 font-editorial italic text-lg text-stone-base/80">
                Warranty, install &amp; repairs
              </div>
              <div className="mt-auto pt-8 flex items-center justify-between text-xs uppercase tracking-[0.22em] font-medium border-b border-stone-base pb-2">
                <span>Raise a ticket</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>
          </div>
        </div>
      </section>


      {/* Footer strip */}
      <section className="bg-stone-base">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-obsidian/25">
          <div className="text-xs uppercase tracking-[0.22em] text-obsidian/70">
            ©2026 C11® · engineered to restore.
          </div>
          <Link
            to="/"
            className="text-xs uppercase tracking-[0.22em] font-medium hover:text-deep-current transition-colors"
          >
            ← Back to Aftercare
          </Link>
        </div>
      </section>
    </div>
  );
}
