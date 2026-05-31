import type { HeroSlideTag } from "@/features/home/types";

const TEAL = "#45BD7E";
const NAVY = "#36429F";

export function HeroSlideVisual({ tag }: { tag: HeroSlideTag }) {
  if (tag === "employers") {
    const bars = [38, 55, 44, 70, 58, 82, 72, 94, 87];
    const candidates = [
      { init: "KR", name: "Kiran Reddy",  role: "Senior Dev",      match: "96%" },
      { init: "PM", name: "Priya Menon",  role: "Data Scientist",  match: "93%" },
      { init: "AS", name: "Arjun Sharma", role: "Product Manager", match: "89%" },
    ];
    return (
      <div className="w-80 rounded-3xl overflow-hidden shadow-[0_32px_80px_-16px_rgba(54,66,159,0.35)] border border-white/80 bg-white">
        {/* header */}
        <div className="flex items-center justify-between px-5 py-3.5" style={{ background: `linear-gradient(135deg, ${NAVY}12, ${TEAL}10)` }}>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: TEAL }} />
              <span className="relative h-2 w-2 rounded-full" style={{ background: TEAL }} />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: NAVY }}>Hiring Dashboard</span>
          </div>
          <span className="text-[10px] font-medium text-gray-400">Updated now</span>
        </div>
        {/* main metric */}
        <div className="px-5 pt-4 pb-3">
          <div className="text-[11px] font-medium text-gray-400 mb-1">Candidates this week</div>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-extrabold" style={{ color: NAVY }}>+287</span>
            <span className="text-xs font-bold rounded-full px-2 py-0.5" style={{ background: `${TEAL}18`, color: TEAL }}>↑ 24% vs last week</span>
          </div>
          {/* bar chart */}
          <div className="flex gap-1 items-end mt-3" style={{ height: 48 }}>
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm transition-all duration-500"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(to top, ${TEAL}, ${NAVY}${Math.round(64 + (i / 8) * 100).toString(16)})`,
                  opacity: 0.75 + (i / bars.length) * 0.25,
                }}
              />
            ))}
          </div>
        </div>
        {/* 3-col stats */}
        <div className="grid grid-cols-3 divide-x" style={{ borderTop: "1px solid #f0f0f5", borderBottom: "1px solid #f0f0f5" }}>
          {[
            { v: "8 days", l: "Time-to-hire", c: TEAL },
            { v: "24",     l: "Open Roles",   c: NAVY },
            { v: "47",     l: "Placed",       c: TEAL },
          ].map(({ v, l, c }) => (
            <div key={l} className="py-3 text-center">
              <div className="text-base font-extrabold" style={{ color: c }}>{v}</div>
              <div className="text-[10px] text-gray-400 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
        {/* candidate list */}
        <div className="px-5 py-4 space-y-3">
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Top AI Matches</div>
          {candidates.map(({ init, name, role, match }) => (
            <div key={name} className="flex items-center gap-3">
              <div
                className="h-8 w-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${TEAL}, ${NAVY})` }}
              >
                {init}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold truncate" style={{ color: NAVY }}>{name}</div>
                <div className="text-[10px] text-gray-400 truncate">{role}</div>
              </div>
              <span
                className="text-[11px] font-bold rounded-full px-2 py-0.5 flex-shrink-0"
                style={{ background: `${TEAL}15`, color: TEAL }}
              >
                {match}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (tag === "talent") {
    const skills = ["React", "Node.js", "Python", "AWS", "Product", "Strategy"];
    const jobs = [
      { title: "Sr. Product Mgr", co: "Infosys",   sal: "₹28 LPA" },
      { title: "Lead Engineer",   co: "TCS",       sal: "₹32 LPA" },
      { title: "Data Scientist",  co: "Accenture", sal: "₹26 LPA" },
    ];
    return (
      <div className="w-80 rounded-3xl overflow-hidden shadow-[0_32px_80px_-16px_rgba(54,66,159,0.35)] border border-white/80 bg-white">
        {/* profile header */}
        <div className="px-5 py-5 flex items-center gap-4" style={{ background: `linear-gradient(135deg, ${NAVY}12, ${TEAL}10)` }}>
          <div
            className="h-14 w-14 rounded-2xl flex items-center justify-center text-white text-xl font-extrabold flex-shrink-0 shadow-lg"
            style={{ background: `linear-gradient(135deg, ${TEAL}, ${NAVY})` }}
          >
            AR
          </div>
          <div>
            <div className="font-bold text-sm" style={{ color: NAVY }}>Arjun Reddy</div>
            <div className="text-xs text-gray-400">Senior Product Manager</div>
            <div className="flex items-center gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-3 w-3" viewBox="0 0 12 12" fill={TEAL}>
                  <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.7 3 10.5l.6-3.4L1.2 4.5l3.3-.5z" />
                </svg>
              ))}
              <span className="text-[10px] font-semibold ml-1" style={{ color: TEAL }}>4.9</span>
            </div>
          </div>
        </div>
        {/* AI score */}
        <div className="px-5 pt-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-gray-500">AI Profile Score</span>
            <span className="text-sm font-extrabold" style={{ color: TEAL }}>94%</span>
          </div>
          <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: "94%", background: `linear-gradient(to right, ${TEAL}, ${NAVY})` }} />
          </div>
        </div>
        {/* skills */}
        <div className="px-5 pt-3 pb-3">
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Skills</div>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((s) => (
              <span
                key={s}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                style={{ background: `${NAVY}10`, color: NAVY, border: `1px solid ${NAVY}20` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div style={{ height: 1, background: "#f0f0f5" }} />
        {/* job matches */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">New Matches</div>
            <span className="text-xs font-extrabold rounded-full px-2 py-0.5" style={{ background: `${TEAL}18`, color: TEAL }}>+247 today</span>
          </div>
          <div className="space-y-2.5">
            {jobs.map(({ title, co, sal }) => (
              <div key={title} className="flex items-center justify-between rounded-xl px-3 py-2" style={{ background: "#f8f9ff" }}>
                <div>
                  <div className="text-xs font-semibold" style={{ color: NAVY }}>{title}</div>
                  <div className="text-[10px] text-gray-400">{co}</div>
                </div>
                <div className="text-xs font-bold" style={{ color: TEAL }}>{sal}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // campus
  const placement = 89;
  const batchStats = [
    { l: "Students",    v: "1,247" },
    { l: "Companies",   v: "152"   },
    { l: "Avg Package", v: "₹6.2L" },
    { l: "Days (avg)",  v: "38"    },
  ];
  const recruiters = ["Infosys", "TCS", "Wipro", "HCL", "Accenture"];
  return (
    <div className="w-80 rounded-3xl overflow-hidden shadow-[0_32px_80px_-16px_rgba(54,66,159,0.35)] border border-white/80 bg-white">
      {/* header */}
      <div className="px-5 py-3.5 flex items-center gap-3" style={{ background: `linear-gradient(135deg, ${NAVY}12, ${TEAL}10)` }}>
        <div
          className="h-8 w-8 rounded-xl flex items-center justify-center text-white text-xs font-extrabold"
          style={{ background: `linear-gradient(135deg, ${TEAL}, ${NAVY})` }}
        >
          IIT
        </div>
        <div>
          <div className="text-xs font-bold" style={{ color: NAVY }}>Campus Analytics 2025</div>
          <div className="text-[10px] text-gray-400">IIT Hyderabad · Batch 2025</div>
        </div>
      </div>
      {/* donut + big number */}
      <div className="px-5 pt-5 pb-3 flex items-center gap-5">
        <div className="relative h-20 w-20 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="h-20 w-20 -rotate-90">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f0f0f5" strokeWidth="3.2" />
            <circle
              cx="18" cy="18" r="15.9" fill="none" strokeWidth="3.2"
              stroke="url(#donut-grad)"
              strokeDasharray={`${placement} ${100 - placement}`}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="donut-grad" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={TEAL} />
                <stop offset="100%" stopColor={NAVY} />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-extrabold" style={{ color: NAVY }}>{placement}%</span>
            <span className="text-[9px] text-gray-400 leading-none">placed</span>
          </div>
        </div>
        <div>
          <div className="text-xs font-bold text-gray-500 mb-0.5">Placement Rate</div>
          <div className="text-3xl font-extrabold" style={{ color: NAVY }}>{placement}%</div>
          <span
            className="text-[11px] font-semibold rounded-full px-2 py-0.5 mt-1 inline-block"
            style={{ background: `${TEAL}18`, color: TEAL }}
          >
            ↑ 7% vs 2024
          </span>
        </div>
      </div>
      {/* 4-col stats */}
      <div className="grid grid-cols-2 gap-px" style={{ background: "#f0f0f5" }}>
        {batchStats.map(({ l, v }) => (
          <div key={l} className="bg-white py-3 px-4">
            <div className="text-sm font-extrabold" style={{ color: NAVY }}>{v}</div>
            <div className="text-[10px] text-gray-400 mt-0.5">{l}</div>
          </div>
        ))}
      </div>
      {/* batch progress */}
      <div className="px-5 py-4">
        <div className="flex justify-between text-[10px] mb-1.5">
          <span className="font-semibold text-gray-400">Current batch progress</span>
          <span className="font-bold" style={{ color: TEAL }}>73%</span>
        </div>
        <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: "73%", background: `linear-gradient(to right, ${TEAL}, ${NAVY})` }}
          />
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {recruiters.map((r) => (
            <span
              key={r}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${NAVY}08`, color: NAVY, border: `1px solid ${NAVY}18` }}
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
