import buzzing1 from "../assets/home/buzzing/card1.jpg";
import buzzing2 from "../assets/home/buzzing/card2.jpg";
import buzzing3 from "../assets/home/buzzing/card3.jpg";
import buzzing4 from "../assets/home/buzzing/card4.jpg";

export interface BuzzingDestinationData {
  id: number;
  image: string;
  title: string;
  checkIns: string;
  description: string;
}

export const buzzingDestinationData: BuzzingDestinationData[] = [
  {
    id: 1,
    image: buzzing1,
    title: "Kina Mountain",
    checkIns: "1.2k check-ins this week",
    description: "Your guide to the most happening events this weekend — from concerts to pop-ups.",
  },
  {
    id: 2,
    image: buzzing2,
    title: "Harbor Night Market",
    checkIns: "3.4k check-ins this week",
    description: "Discover vibrant street food, live music, and local artisans at the waterfront.",
  },
  {
    id: 3,
    image: buzzing3,
    title: "Old Town Quarter",
    checkIns: "890 check-ins this week",
    description: "Step into history with guided tours, rooftop bars, and hidden courtyard cafes.",
  },
  {
    id: 4,
    image: buzzing4,
    title: "Skyline Terrace",
    checkIns: "2.1k check-ins this week",
    description: "Panoramic city views paired with the best sunset cocktail events in town.",
  },
];
