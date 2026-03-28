import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import StickyNav from "./StickyNav";
import Footer from "./Footer";
import PageLoader from "../common/PageLoader";
import { usePageLoaded } from "../../hooks/usePageLoaded";

const RootLayout = () => {
  const { isLoaded, isFirstLoad } = usePageLoaded();

  return (
    <div className="min-h-screen flex flex-col">
      {!isLoaded && isFirstLoad && <PageLoader />}
      <MainHeader />
      <StickyNav />
      <main className="flex-1">
        {!isLoaded && !isFirstLoad ? <PageLoader inline /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout