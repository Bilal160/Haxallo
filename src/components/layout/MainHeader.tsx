import { mainHeaderMenuItems } from "../../data/mainHeader";
import dropdownIcon from "../../assets/common/dropdown.svg";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({
    4: "EN (US)",
    5: "United States",
    6: "California",
  });
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSelectOption = (itemId: number, option: string) => {
    setSelectedOptions((prev) => ({ ...prev, [itemId]: option }));
    setOpenDropdown(null);
  };

  const toggleDropdown = (itemId: number) => {
    setOpenDropdown(openDropdown === itemId ? null : itemId);
  };

  return (
    <div>
      <header
        ref={headerRef}
        className="text-text-primary py-3 px-4 lg:px-16 hidden lg:flex items-center justify-end text-xs font-primary"
      >
        <nav className="flex items-center flex-wrap gap-x-6 gap-y-1 justify-end">
          {mainHeaderMenuItems.map((item) => {
            if (item.type === "link") {
              let linkStyles = "hover:text-gray-300";
              if (item.label === "Sign In | Up") {
                linkStyles = "hover:opacity-80";
              } else if (item.label === "Business") {
                linkStyles = "text-[#AE6F28] text-[13px] font-medium hover:opacity-80";
              } else if (item.label === "Create Event") {
                linkStyles = "text-black text-[13px] font-bold hover:opacity-80";
              }
              return (
                <Link
                  key={item.id}
                  to={item.to ?? "/"}
                  style={item.label === "Sign In | Up" ? { color: "#3C3C3C" } : {}}
                  className={linkStyles}
                >
                  {item.label}
                </Link>
              );
            }

            if (item.type === "dropdown") {
              const isOpen = openDropdown === item.id;
              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="hover:text-gray-300 flex items-center gap-1"
                  >
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.label}
                        className={item.label === "EN (US)" ? "w-5 h-5" : "h-4"}
                      />
                    )}
                    <span>{selectedOptions[item.id] || item.label}</span>
                    <img src={dropdownIcon} alt="" className="h-5" />
                  </button>
                  {isOpen && (
                    <div className="absolute z-60 bg-primary text-white rounded mt-2 w-48 shadow-lg">
                      {item.options?.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(item.id, option)}
                          className="w-full text-left block px-4 py-2 hover:bg-primary/25 first:rounded-t last:rounded-b"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
          })}
        </nav>
      </header>
    </div>
  );
};

export default MainHeader;
