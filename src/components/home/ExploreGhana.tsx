import ExploreCard from "../common/ExploreCard";
import { exploreGhanaData } from "../../data/exploreGhanaData";
import linkArrowIcon from "../../assets/common/linkArrow.svg";

const ROW_FLEX = [
  [1, 1.5, 2],
  [1, 1],
  [1.2, 1, 2],
];

const ExploreGhana = () => {
  const rows = [
    exploreGhanaData.slice(0, 3),
    exploreGhanaData.slice(3, 5),
    exploreGhanaData.slice(5, 8),
  ];

  return (
    <div className="space-y-6 font-secondary">
      <div className="flex items-center gap-1">
        <h2 className="text-lg font-bold text-card-title">Explore Ghana</h2>
        <img src={linkArrowIcon} alt="Link Arrow" />
      </div>

      <div className="md:hidden grid grid-cols-2 gap-3">
        {exploreGhanaData.map((item) => (
          <ExploreCard
            key={item.id}
            image={item.image}
            title={item.title}
            rating={item.rating}
            darkBadge={item.darkBadge}
          />
        ))}
      </div>

      <div className="hidden md:block space-y-4">
        {rows.map((row, rowIdx) => (
          <div key={rowIdx} className="flex gap-4" style={{ height: "220px" }}>
            {row.map((item, colIdx) => (
              <div key={item.id} style={{ flex: ROW_FLEX[rowIdx][colIdx] }}>
                <ExploreCard
                  image={item.image}
                  title={item.title}
                  rating={item.rating}
                  darkBadge={item.darkBadge}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreGhana
