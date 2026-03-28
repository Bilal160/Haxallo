import type { DealData } from "../../data/blazingDealsData";

interface DealCardProps {
  deal: DealData;
  isActive?: boolean;
}

const DealCard = ({ deal, isActive = false }: DealCardProps) => {
  return (
    <div
      className={`relative w-full h-96 rounded-xl overflow-hidden cursor-pointer group transition-shadow duration-300 font-primary ${
        isActive
          ? "border-accent border-[5px] shadow-deal-active"
          : "border-[#DDDDDD] border shadow-deal"
      }`}
    >
      <img
        src={deal.image}
        alt={deal.title}
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/5" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-card-title">
        <h3 className="font-black text-2xl leading-tight mb-3">
          {deal.title}
        </h3>

        <h4 className="font-semibold text-2xl leading-tight mb-3">
          {deal.title2}
        </h4>

        <p className="font-bold text-[15px] tracking-[0.18em] mb-1">
          {deal.subtitle}
        </p>
        <div className="flex items-baseline gap-2 mt-4">
          <span className="font-bold text-2xl leading-none">
            {deal.discount}
          </span>
          <span className="font-semibold text-[15px] tracking-wider">
            {deal.unit}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DealCard
