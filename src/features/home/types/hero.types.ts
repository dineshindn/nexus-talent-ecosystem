export type HeroSlideTag = "employers" | "talent" | "campus";

export type HeroSlideStat = {
  label: string;
  value: string;
};

export type HeroSlide = {
  eyebrow: string;
  title: [string, string];
  desc: string;
  cta1: string;
  cta2: string;
  tag: HeroSlideTag;
  image: string;
  stats: [HeroSlideStat, HeroSlideStat];
};
