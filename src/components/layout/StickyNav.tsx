import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/common/logo.svg";
import { stickyNavItems } from "../../data/stickyNavData";
import { mainHeaderMenuItems } from "../../data/mainHeader";

const StickyNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const utilityLinks = mainHeaderMenuItems.filter((i) => i.type === "link");

  return (
    <>
      <nav className="sticky top-0 z-50 bg-secondary">
        <div className="flex items-center justify-between px-4 lg:px-16 py-3 lg:py-0 h-full">
          <img src={logo} alt="Logo" className="h-7 lg:h-auto" />

          <div className="hidden lg:flex gap-1 relative h-full flex-1 justify-end overflow-x-auto scrollbar-none">
            {stickyNavItems.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  `py-3 px-2 text-xs font-primary font-normal transition-colors text-white flex items-center h-full border-b-4 whitespace-nowrap ${
                    isActive
                      ? "font-semibold border-accent"
                      : "border-transparent hover:text-primary"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white p-2 cursor-pointer"
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M3 6h16M3 11h16M3 16h16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-60 bg-black/50 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-72 z-70 bg-secondary flex flex-col lg:hidden transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0 sticky top-0 z-10 bg-secondary">
          <img src={logo} alt="Logo" className="h-7" />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white p-1 cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="p-4 space-y-1 flex-1 overflow-y-auto">
          <p className="text-white/40 text-xs font-primary uppercase tracking-widest px-4 pb-2">
            Navigate
          </p>
          {stickyNavItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2.5 px-4 text-sm rounded-lg transition-colors font-primary ${
                  isActive
                    ? "bg-white/10 text-accent font-semibold"
                    : "text-white hover:bg-white/5"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="border-t border-white/10 p-4 space-y-1 shrink-0">
          <p className="text-white/40 text-xs font-primary uppercase tracking-widest px-4 pb-2">
            Account
          </p>
          {utilityLinks.map((item) => (
            <Link
              key={item.id}
              to={item.to ?? "/"}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 px-4 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors font-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default StickyNav
