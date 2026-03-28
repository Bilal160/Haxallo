import EventCard from "./EventCard";
import linkArrowIcon from "../../assets/common/linkArrow.svg";
export interface EventCardData {
  id: number;
  image: string;
  category: string;
  title: string;
  date?: string;
  time: string;
  location: string;
  price: number;
  currency?: string;
  rating?: number;
  bgColor?: string;
  borderColor?: string;
}

interface CardSectionProps {
  title: string;
  cards: EventCardData[];
}

const CardSection = ({ title, cards }: CardSectionProps) => {
  return (
    <div className="space-y-6 font-secondary">
      <div className="flex items-center gap-1">
        <h2 className="text-lg font-bold text-card-title">{title}</h2>
        <img src={linkArrowIcon} alt="Link Arrow" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <EventCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default CardSection
