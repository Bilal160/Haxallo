import heroImg1 from "../assets/home/heroSec/img1.jpg";
import heroImg2 from "../assets/home/heroSec/img2.jpg";
import heroImg3 from "../assets/home/heroSec/img3.jpg";
import heroImg4 from "../assets/home/heroSec/img4.jpg";
import heroImg5 from "../assets/home/heroSec/img5.jpg";
import heroImg6 from "../assets/home/heroSec/img6.jpg";
import heroImg7 from "../assets/home/heroSec/img7.jpg";
import heroImg8 from "../assets/home/heroSec/img8.jpg";
import heroImg9 from "../assets/home/heroSec/img9.jpg";

export interface HeroSlide {
  id: number;
  image: string;
}

export const heroSlides: HeroSlide[] = [
  { id: 1, image: heroImg1 },
  { id: 2, image: heroImg2 },
  { id: 3, image: heroImg3 },
  { id: 4, image: heroImg4 },
  { id: 5, image: heroImg5 },
  { id: 6, image: heroImg6 },
  { id: 7, image: heroImg7 },
  { id: 8, image: heroImg8 },
  { id: 9, image: heroImg9 },
];

export const heroText = {
  mainText: "Discover, Book & Enjoy What’s Happening Around You",
  bottomText: "From local events to world-famous experiences — all in one place.",
};
