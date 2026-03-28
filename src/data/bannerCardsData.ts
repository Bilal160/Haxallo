import exclusiveImg1 from "../assets/home/exclusive/img1.jpg";
import exclusiveImg2 from "../assets/home/exclusive/img2.jpg";

export interface BannerCardData {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const exclusiveBanners: BannerCardData[] = [
  {
    id: 1,
    image: exclusiveImg1,
    title: "Private Tours",
    description:
      "Your guide to the most happening events this weekend — from concerts to pop-ups.",
  },
  {
    id: 2,
    image: exclusiveImg2,
    title: "VIP Experiences",
    description:
      "Exclusive access to the city's most sought-after venues and private events.",
  },
];
