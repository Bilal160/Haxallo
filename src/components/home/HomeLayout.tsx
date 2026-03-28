import { Outlet, NavLink } from "react-router-dom";
import { homeNavItems } from "../../data/homeNavData";

const HomeLayout = () => {
  return (
    <>
      <div className="bg-[#F2F2F2]">
        <style>{`.home-nav-scroll::-webkit-scrollbar { display: none; }`}</style>
        <div
          className="home-nav-scroll px-4 lg:px-16 flex items-center gap-3 h-full overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {homeNavItems.map(({ label, to, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `px-2 py-3 text-xs font-normal transition-colors text-text-primary flex items-center h-full whitespace-nowrap shrink-0 ${
                  isActive ? "font-semibold" : "hover:text-primary"
                }`
              }
              style={({ isActive }) => ({
                borderBottom: isActive ? "3px solid #AE6F28" : "none",
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default HomeLayout