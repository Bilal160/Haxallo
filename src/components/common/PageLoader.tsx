import logoMini from "../../assets/common/logoMini.svg";

interface PageLoaderProps {
  inline?: boolean;
}

const PageLoader = ({ inline = false }: PageLoaderProps) => {
  return (
    <div
      className={
        inline
          ? "flex items-center justify-center w-full min-h-[50vh]"
          : "fixed inset-0 z-9999 flex items-center justify-center bg-white"
      }
    >
      <img
        src={logoMini}
        alt="Loading…"
        className="w-16 h-16 animate-spin"
        style={{ animationDuration: "1s" }}
      />
    </div>
  );
}

export default PageLoader
