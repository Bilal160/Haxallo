import global1 from "../assets/home/global/card1.jpg";
import global2 from "../assets/home/global/card2.jpg";
import global3 from "../assets/home/global/card3.jpg";
import global4 from "../assets/home/global/card4.jpg";

export interface GlobalCardData {
  id: number;
  image: string;
  location: string;
  title: string;
}

export const globalHighlightsData: GlobalCardData[] = [
  {
    id: 1,
    image: global1,
    location: "Paris",
    title: "Culinary nights & art walks",
  },
  {
    id: 2,
    image: global2,
    location: "Tokyo",
    title: "Street food trails & neon festivals",
  },
  {
    id: 3,
    image: global3,
    location: "New York",
    title: "Rooftop jazz & skyline tours",
  },
  {
    id: 4,
    image: global4,
    location: "Dubai",
    title: "Desert safaris & luxury dining",
  },
];
