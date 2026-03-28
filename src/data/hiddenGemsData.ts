import gem1 from "../assets/home/hidenGems/card1.jpg";
import gem2 from "../assets/home/hidenGems/card2.jpg";
import gem3 from "../assets/home/hidenGems/card3.jpg";
import gem4 from "../assets/home/hidenGems/card4.jpg";

export interface HiddenGemData {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const hiddenGemsData: HiddenGemData[] = [
  {
    id: 1,
    image: gem1,
    title: "The Secret Garden Café",
    description: "Accra · Hidden courtyard serving organic brunch & live music evenings.",
  },
  {
    id: 2,
    image: gem2,
    title: "Rooftop Jazz Lounge",
    description: "Kumasi · Intimate rooftop bar with weekly jazz nights and skyline views.",
  },
  {
    id: 3,
    image: gem3,
    title: "Labadi Cove Beach",
    description: "Accra · A secluded beach stretch away from the crowds, perfect at sunset.",
  },
  {
    id: 4,
    image: gem4,
    title: "The Underground Gallery",
    description: "Takoradi · Local art, poetry slams, and pop-up exhibitions every weekend.",
  },
];
