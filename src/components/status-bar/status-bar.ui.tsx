type StatusBarProps = {
  totalItem: number;
  doneItem: number;
};

function StatusBar({ totalItem, doneItem }: StatusBarProps) {
  const progress = doneItem / totalItem;
  return (
    <div className="relative">
      <div className="-mx-4">
        <div className="text-sm text-right leading-none text-gray-600 mr-1">
          <span>{progress * 100}%</span>
        </div>
        <div className="h-1 bg-slate-200">
          <div
            className="h-full bg-blue-600 origin-left transition-transform duration-300 transition-ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
