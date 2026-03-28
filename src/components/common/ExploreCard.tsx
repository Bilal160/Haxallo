interface ExploreCardProps {
  image: string;
  title: string;
  rating: number;
  darkBadge?: boolean;
}

const ExploreCard = ({
  image,
  title,
  rating,
  darkBadge = false,
}: ExploreCardProps) => {
  return (
    <div className="relative overflow-hidden cursor-pointer group rounded-[14px] h-55.5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

      <div
        className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
          darkBadge ? "bg-[#2D3134]/80 text-white" : "bg-white/90 text-[#2D3134]"
        }`}
      >
        {rating}
      </div>

      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="font-bold text-sm">{title}</h3>
        <p className="text-xs text-white/70">Explore</p>
      </div>
    </div>
  );
}

export default ExploreCard
