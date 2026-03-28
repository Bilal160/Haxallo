import { exploreGhanaCards } from "../../data/eventCardsData1";
import CardSection from "../common/CardSection";
import ExploreGhana from "./ExploreGhana";

const ExploreGhanaSection = () => {
  return (
    <div className="space-y-10">
      <ExploreGhana />
      <CardSection title="Ghana’s Top 10s" cards={exploreGhanaCards} />
    </div>
  );
};

export default ExploreGhanaSection;
