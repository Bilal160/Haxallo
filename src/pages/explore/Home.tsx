import HeroSection from "../../components/home/HeroSection";
import CardSection from "../../components/common/CardSection";
import ExclusiveCards from "../../components/home/ExclusiveCards";
import {
  forYouData,
  hotThisWeek,
  tonightsSpotlight,
  unmissableData,
} from "../../data/eventCardsData1";
import BuzzingDestination from "../../components/home/BuzzingDestination";
import HiddenGems from "../../components/home/HiddenGems";
import ExploreGhanaSection from "../../components/home/ExploreGhanaSection";
import GlobalHighlights from "../../components/home/GlobalHighlights";
import BlazingDeals from "../../components/home/BlazingDeals";

const Home = () => {
  return (
    <div className="pb-20">
      <div className="px-4 md:px-8 lg:px-12 py-6 md:py-10 space-y-10">
        <HeroSection />
        <div className="space-y-16 lg:space-y-25">
          <CardSection title="Tonight's Spotlight" cards={tonightsSpotlight} />
          <CardSection title="Hot This Week" cards={hotThisWeek} />
          <CardSection title="Unmissable" cards={unmissableData} />
          <ExclusiveCards />
          <CardSection title="For You" cards={forYouData} />
          <BlazingDeals />
          <BuzzingDestination />
          <HiddenGems />
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-12 py-6 md:py-10 bg-[#FAF8ED]">
        <ExploreGhanaSection />
      </div>
      <div className="px-4 md:px-8 lg:px-12 py-6 md:py-10 space-y-10">
        <GlobalHighlights />
      </div>
    </div>
  );
};

export default Home;
