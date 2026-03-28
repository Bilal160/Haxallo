import arrowIcon from "../../assets/common/arrow.svg";

interface GlobalCardProps {
  image: string;
  location: string;
  title: string;
}

const GlobalCard = ({ image, location, title }: GlobalCardProps) => {
  return (
    <div className="relative overflow-hidden cursor-pointer group rounded-2xl h-96.75 shadow-card font-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 p-6 text-white space-y-1 bg-[#2D313480] w-full">
        <p className="text-xs text-white font-semibold">{location}</p>
        <h3 className="font-bold text-sm leading-snug">{title}</h3>
        <div className="flex items-center gap-2 pt-1 text-[9.54px] font-medium">
          <span>Explore Now</span>
          <img src={arrowIcon} alt="Arrow" className="brightness-0 invert w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default GlobalCard
