interface OverlayCardProps {
  image: string;
  title: string;
  description: string;
}

const OverlayCard = ({ image, title, description }: OverlayCardProps) => {
  return (
    <div className="relative overflow-hidden cursor-pointer group rounded-[14px] h-90.25 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5 text-white space-y-1 w-full bg-[#2D313480]">
        <h3 className="font-bold text-sm">{title}</h3>
        <p className="text-xs text-white/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default OverlayCard
