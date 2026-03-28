import GlobalCard from "../common/GlobalCard";
import { globalHighlightsData } from "../../data/globalHighlightsData";
import linkArrowIcon from "../../assets/common/linkArrow.svg";

const GlobalHighlights = () => {
  return (
    <div className="space-y-6 font-secondary">
      <div className="flex items-center gap-1">
        <h2 className="text-lg font-bold text-card-title">Global Highlights</h2>
        <img src={linkArrowIcon} alt="Link Arrow" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {globalHighlightsData.map((item) => (
          <GlobalCard
            key={item.id}
            image={item.image}
            location={item.location}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default GlobalHighlights
