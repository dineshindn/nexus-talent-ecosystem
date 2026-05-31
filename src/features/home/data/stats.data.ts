export type StatItem = {
  target: number;
  suffix: string;
  label: string;
};

export const stats: StatItem[] = [
  { target: 8400,  suffix: "+",  label: "Companies" },
  { target: 200,   suffix: "K+", label: "Active Talent" },
  { target: 1200,  suffix: "+",  label: "Campuses" },
  { target: 20,    suffix: "+",  label: "Industries" },
];
