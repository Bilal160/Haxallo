import design1 from "../assets/home/deals/design1.jpg";
import design2 from "../assets/home/deals/design2.jpg";

export interface DealData {
  id: number;
  image: string;
  title: string;
  title2?: string;
  subtitle: string;
  discount: string;
  unit: string;
  tag?: string;
}

export const blazingDealsData: DealData[] = [
  {
    id: 1,
    image: design1,
    title: "New User",
    title2: "Offers",
    subtitle: "UP TO",
    discount: "20%",
    unit: "OFF",
    tag: "New",
  },
  {
    id: 2,
    image: design2,
    title: "Black Friday",
    title2: "Offers",
    subtitle: "UP TO",
    discount: "20%",
    unit: "OFF",
    tag: "Limited",
  },
  {
    id: 3,
    image: design1,
    title: "Weekend Special",
    title2: "Offers",
    subtitle: "UP TO",
    discount: "30%",
    unit: "OFF",
    tag: "Hot",
  },
  {
    id: 4,
    image: design2,
    title: "Flash Sale",
    title2: "Offers",
    subtitle: "UP TO",
    discount: "25%",
    unit: "OFF",
    tag: "Flash",
  },
  {
    id: 5,
    image: design1,
    title: "Early Bird Deal",
    title2: "Offers",
    subtitle: "UP TO",
    discount: "15%",
    unit: "OFF",
    tag: "Early",
  },
  {
    id: 6,
    image: design2,
    title: "Member Exclusive",
    title2: "Offers",
    subtitle: "UP TO",
    discount: "35%",
    unit: "OFF",
    tag: "VIP",
  },
];

export const offerEndDate = new Date("2026-04-05T23:59:59");
