import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import StickyNav from "./StickyNav";
import Footer from "./Footer";
import PageLoader from "../common/PageLoader";
import { usePageLoaded } from "../../hooks/usePageLoaded";

const RootLayout = () => {
  const isLoaded = usePageLoaded();

  return (
    <div className="min-h-screen flex flex-col">
      {!isLoaded && <PageLoader />}
      <MainHeader />
      <StickyNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout