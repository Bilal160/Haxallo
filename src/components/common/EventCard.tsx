import starIcon from "../../assets/common/star.svg";

interface EventCardProps {
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

const EventCard = ({
  image,
  category,
  title,
  date,
  time,
  location,
  price,
  currency = "USD",
  rating,
  bgColor = "#FAF8ED",
  borderColor = "#ffffff",
}: EventCardProps) => {
  return (
    <div
      className="group border-2 pt-2 px-2 pb-2.75 w-full rounded-[14px] shadow-card transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 hover:shadow-card-hover"
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
    >
      <div className="overflow-hidden h-55.5 rounded-[14px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="pt-3 space-y-2 text-[#2D3134] text-xs">
        <span className="inline-block bg-[#F7E4B6] text-black px-2.25 py-1.25 rounded-lg">
          {category}
        </span>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          {rating && (
            <div className="flex items-center gap-1 pr-2">
              <img src={starIcon} alt="Rating" className="w-3 h-3" />
              <span className="font-semibold">{rating}</span>
            </div>
          )}
        </div>
        {date && <p>{date}</p>}
        <p>{time}</p>
        <p>{location}</p>
        <p>
          From{" "}
          <span className="font-bold">
            {currency} {price}
          </span>
        </p>
      </div>
    </div>
  );
}

export default EventCard
