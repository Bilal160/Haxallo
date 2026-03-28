import heroImg1 from "../assets/home/herosec.jpg";

export interface HeroSlide {
  id: number;
  image: string;
}

export const heroSlides: HeroSlide[] = [
  { id: 1, image: heroImg1 },
  { id: 2, image: heroImg1 },
  { id: 3, image: heroImg1 },
  { id: 4, image: heroImg1 },
  { id: 5, image: heroImg1 },
  { id: 6, image: heroImg1 },
];

export const heroText = {
  mainText: "Discover, Book & Enjoy What’s Happening Around You",
  bottomText: "From local events to world-famous experiences — all in one place.",
};
