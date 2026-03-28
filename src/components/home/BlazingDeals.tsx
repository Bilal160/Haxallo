import { useState, useEffect, useRef } from "react";
import DealCard from "../common/DealCard";
import TimeBox from "../common/TimeBox";
import { useCountdown } from "../../hooks/useCountdown";
import { blazingDealsData, offerEndDate } from "../../data/blazingDealsData";
import arrowIcon from "../../assets/common/linkArrow.svg";

const GAP = 20;

const BlazingDeals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(340);
  const sliderRef = useRef<HTMLDivElement>(null);
  const timeLeft = useCountdown(offerEndDate);
  const maxIndex = blazingDealsData.length - 1;

  useEffect(() => {
    const update = () => {
      if (!sliderRef.current) return;
      const containerWidth = sliderRef.current.offsetWidth;
      const vw = window.innerWidth;
      if (vw < 640) setCardWidth(containerWidth - 48);
      else if (vw < 1024) setCardWidth(Math.floor((containerWidth - GAP) / 2));
      else setCardWidth(340);
    };
    update();
    const ro = new ResizeObserver(update);
    if (sliderRef.current) ro.observe(sliderRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [cardWidth, maxIndex]);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const translateX = currentIndex * (cardWidth + GAP);

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10 py-6 font-secondary lg:-mr-12">
      <div className="flex flex-col gap-5 w-full lg:min-w-70 lg:max-w-[320px]">
        <div className="space-y-2">
          <h2 className="font-bold text-card-title leading-tight text-lg">
            Blazing Deals
          </h2>
          <p className="text-xs text-text-primary leading-relaxed">
            Don't miss our most exciting limited-time offers and new-user
            specials.
          </p>
        </div>

        <button className="self-start px-5 py-2.5 bg-[#2D3134] text-white text-xs font-primary rounded-2xl cursor-pointer transition-opacity hover:opacity-80">
          Explore Offers Now
        </button>

        <div className="space-y-3">
          <p className="text-xs font-medium text-[#D00E28] font-secondary">
            Offer ends in...
          </p>
          <div className="flex gap-3">
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hr" />
            <TimeBox value={timeLeft.minutes} label="Mins" />
            <TimeBox value={timeLeft.seconds} label="Sec" />
          </div>
        </div>
      </div>

      <div ref={sliderRef} className="relative flex-1 w-full overflow-hidden">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-2xl disabled:opacity-30 hover:opacity-80 cursor-pointer transition-opacity"
          aria-label="Previous deal"
        >
          <img src={arrowIcon} alt="prev" className="h-5 rotate-180" />
        </button>

        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ gap: `${GAP}px`, transform: `translateX(-${translateX}px)` }}
        >
          {blazingDealsData.map((deal, i) => (
            <div key={deal.id} style={{ width: `${cardWidth}px`, flexShrink: 0 }}>
              <DealCard deal={deal} isActive={i === currentIndex} />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-2xl disabled:opacity-30 hover:opacity-80 cursor-pointer transition-opacity"
          aria-label="Next deal"
        >
          <img src={arrowIcon} alt="next" className="h-5" />
        </button>
      </div>
    </div>
  );
}

export default BlazingDeals
