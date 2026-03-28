import BannerCard from "../common/BannerCard";
import { exclusiveBanners } from "../../data/bannerCardsData";
import linkArrowIcon from "../../assets/common/linkArrow.svg";
const ExclusiveCards = () => {
  return (
    <div className="space-y-6 font-secondary">
      <div className="flex items-center gap-1">
        <h2 className="text-lg font-bold text-card-title">Exclusive</h2>
        <img src={linkArrowIcon} alt="Link Arrow" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exclusiveBanners.map((banner) => (
          <BannerCard
            key={banner.id}
            image={banner.image}
            title={banner.title}
            description={banner.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ExclusiveCards;
