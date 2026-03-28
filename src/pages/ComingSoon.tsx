import { useLocation } from "react-router-dom";
import miniLogo from "../assets/common/logoMini.svg";

const label = (path: string) =>
  path.slice(1).replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ||
  "This Page";

const ComingSoon = () => {
  const { pathname } = useLocation();
  const page = label(pathname);

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-6 font-primary">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        style={{ animation: "blob1 8s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        style={{ animation: "blob2 10s ease-in-out infinite" }}
      />

      <div className="relative mb-10 flex items-center justify-center">
        <div
          className="w-32 h-32 rounded-full border-4 border-dashed border-primary/30"
          style={{ animation: "spin 12s linear infinite" }}
        />
        <div
          className="absolute w-20 h-20 rounded-full border-4 border-dashed border-accent/40"
          style={{ animation: "spin 8s linear infinite reverse" }}
        />
        <div className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
          <img src={miniLogo} alt="Mini Logo" />
        </div>
      </div>

      <p
        className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3"
        style={{ animation: "fadeUp 0.6s ease both" }}
      >
        {page}
      </p>
      <h1
        className="text-3xl md:text-5xl font-bold text-center text-text-primary leading-tight mb-4"
        style={{ animation: "fadeUp 0.7s ease both" }}
      >
        Coming Soon
      </h1>
      <p
        className="text-sm md:text-base text-text-primary/60 text-center max-w-md leading-relaxed mb-10"
        style={{ animation: "fadeUp 0.8s ease both" }}
      >
        We're crafting something special for this section. Stay tuned — it'll be
        worth the wait.
      </p>

      <div
        className="flex gap-2"
        style={{ animation: "fadeUp 0.9s ease both" }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-primary"
            style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>

      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(40px, 30px) scale(1.1); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-30px, -40px) scale(1.15); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40%            { transform: scale(1);   opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default ComingSoon
