interface SimpleCardProps {
  image: string;
  title: string;
  checkIns?: string;
  description: string;
}

const SimpleCard = ({ image, title, checkIns, description }: SimpleCardProps) => {
  return (
    <div className="bg-white cursor-pointer group rounded-[14px] shadow-card-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="overflow-hidden rounded-t-[14px] h-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-bold text-sm text-[#2D3134]">{title}</h3>
        {checkIns && <p className="text-xs text-gray-400">{checkIns}</p>}
        <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default SimpleCard
