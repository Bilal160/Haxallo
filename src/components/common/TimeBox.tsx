function pad(n: number) {
  return String(n).padStart(2, "0");
}

interface TimeBoxProps {
  value: number;
  label: string;
}

const TimeBox = ({ value, label }: TimeBoxProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center justify-center bg-white rounded-xl font-bold font-secondary w-18 h-16 text-2xl text-card-title shadow-timebox">
        {pad(value)}
      </div>
      <span className="text-xs text-card-title">{label}</span>
    </div>
  );
}

export default TimeBox
