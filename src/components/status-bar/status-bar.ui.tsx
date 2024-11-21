type StatusBarProps = {
  totalItem: number;
  doneItem: number;
};

function StatusBar({ totalItem, doneItem }: StatusBarProps) {
  return (
    <div>
      <span>
        {doneItem} / {totalItem}, {(doneItem / totalItem) * 100}%
      </span>
    </div>
  );
}

export default StatusBar;
