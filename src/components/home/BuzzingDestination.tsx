import SimpleCard from "../common/SimpleCard";
import { buzzingDestinationData } from "../../data/buzzingDestinationData";
import linkArrowIcon from "../../assets/common/linkArrow.svg";

const BuzzingDestination = () => {
  return (
    <div className="space-y-6 font-secondary">
      <div className="flex items-center gap-1">
        <h2 className="text-lg font-bold text-card-title">Buzzing Destinations</h2>
        <img src={linkArrowIcon} alt="Link Arrow" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {buzzingDestinationData.map((item) => (
          <SimpleCard
            key={item.id}
            image={item.image}
            title={item.title}
            checkIns={item.checkIns}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default BuzzingDestination
