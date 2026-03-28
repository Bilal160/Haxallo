import img1 from "../assets/home/exploreGhana/img1.png";
import img2 from "../assets/home/exploreGhana/img2.jpg";
import img3 from "../assets/home/exploreGhana/img3.png";
import img4 from "../assets/home/exploreGhana/img4.png";
import img5 from "../assets/home/exploreGhana/img5.png";
import img6 from "../assets/home/exploreGhana/img6.jpg";
import img7 from "../assets/home/exploreGhana/img7.jpg";
import img8 from "../assets/home/exploreGhana/img8.jpg";

export interface ExploreCardData {
  id: number;
  image: string;
  title: string;
  rating: number;
  darkBadge?: boolean;
  area: string;
}
export const exploreGhanaData: ExploreCardData[] = [
  { id: 1, image: img7, title: "Events",         rating: 3.5, area: "a" },
  { id: 2, image: img5, title: "Activities",     rating: 3.5, area: "b" },
  { id: 3, image: img6, title: "Restaurants",    rating: 3.5, darkBadge: true, area: "c" },
  { id: 4, image: img3, title: "Tours",          rating: 3.5, area: "d" },
  { id: 5, image: img4, title: "Services",       rating: 3.5, darkBadge: true, area: "e" },
  { id: 6, image: img1, title: "Destinations",   rating: 3.5, area: "f" },
  { id: 7, image: img2, title: "Places",         rating: 3.5, area: "g" },
  { id: 8, image: img8, title: "Accommodations", rating: 3.5, darkBadge: true, area: "h" },
];
