import arrowIcon from "../../assets/common/arrow.svg";

interface BannerCardProps {
  image: string;
  title: string;
  description: string;
}

const BannerCard = ({ image, title, description }: BannerCardProps) => {
  return (
    <div
      className="relative w-full overflow-hidden cursor-pointer group font-secondary rounded-[14px] h-79 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#F0F0F0]/0 via-[#5B5F62]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white space-y-2 bg-[#2D313480] w-full">
        <h3 className="text-[16px] font-bold">{title}</h3>
        <p className="text-xs text-white/80 font-medium">{description}</p>
        <div className="flex items-center gap-1 font-semibold text-sm pt-1">
          <span>Explore Now</span>
          <img src={arrowIcon} alt="Arrow" className="brightness-0 invert" />
        </div>
      </div>
    </div>
  );
}

export default BannerCard
