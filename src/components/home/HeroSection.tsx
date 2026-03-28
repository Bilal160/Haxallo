import { useState, useEffect, useRef } from "react";
import { heroSlides, heroText } from "../../data/heroData";
import searchIcon from "../../assets/common/search.svg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const dateInputRef = useRef<HTMLInputElement>(null);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className="relative w-full py-12 rounded-xl space-y-5 font-primary">
        <div className="relative overflow-hidden h-[60vh] md:h-screen rounded-xl">
          {heroSlides.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.image}
              alt="Hero Slide"
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-[#7F7A7A]/30 z-10"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-4 md:px-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 text-center max-w-2xl leading-relaxed">
              {heroText.mainText}
            </h1>
            <p className="text-xs md:text-sm font-semibold text-center mb-6 md:mb-8 text-gray-100">
              {heroText.bottomText}
            </p>

            <div className="flex md:hidden w-full max-w-sm bg-white rounded-xl items-center shadow-lg border border-[#E3E3E1] px-2">
              <input
                type="text"
                placeholder="Search any event"
                className="flex-1 px-3 py-2.5 text-black text-sm focus:outline-none"
              />
              <button className="px-2 py-1 bg-primary rounded-xl cursor-pointer transition-opacity hover:opacity-80">
                <img src={searchIcon} alt="Search" />
              </button>
            </div>

            <div className="hidden md:flex max-w-2xl w-full bg-white rounded-xl items-center shadow-lg border-[1.75px] border-[#E3E3E1] px-2 text-sm justify-between">
              <input
                type="text"
                placeholder="Search any event"
                className=" px-4 py-2 text-black focus:outline-none min-w-0"
              />

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 text-black focus:outline-none cursor-pointer bg-white appearance-none"
                style={{ backgroundImage: "none" }}
              >
                <option value="" disabled>Where</option>
                <option value="california">California</option>
                <option value="newyork">New York</option>
                <option value="texas">Texas</option>
                <option value="florida">Florida</option>
              </select>

              <div className="relative px-4 py-2 cursor-pointer" onClick={() => dateInputRef.current?.showPicker()}>
                <span className={`text-sm pointer-events-none  text-black`}>
                  {selectedDate ? new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "When"}
                </span>
                <input
                  ref={dateInputRef}
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
              </div>

              <button className="px-2 py-1 bg-primary rounded-xl cursor-pointer transition-opacity hover:opacity-80">
                <img src={searchIcon} alt="Search" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 py-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-primary"
                  : "bg-[#D9D9D9] hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
