import OverlayCard from "../common/OverlayCard";
import { hiddenGemsData } from "../../data/hiddenGemsData";
import linkArrowIcon from "../../assets/common/linkArrow.svg";

const HiddenGems = () => {
  return (
    <div className="space-y-6 font-secondary">
      <div className="flex items-center gap-1">
        <h2 className="text-lg font-bold text-card-title">Discover Hidden Gems</h2>
        <img src={linkArrowIcon} alt="Link Arrow" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {hiddenGemsData.map((gem) => (
          <OverlayCard
            key={gem.id}
            image={gem.image}
            title={gem.title}
            description={gem.description}
          />
        ))}
      </div>
    </div>
  );
}

export default HiddenGems
