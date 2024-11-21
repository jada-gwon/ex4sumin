type FilterProps = {
  active: boolean;
  onChange: (active: boolean) => void;
};

function Filter({ active, onChange }: FilterProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="flex items-center justify-end gap-1">
      <label htmlFor="filter-hide-done" className="text-sm">
        남은 일만 보기
      </label>
      <input
        type="checkbox"
        checked={active}
        onChange={handleChange}
        id="filter-hide-done"
      />
    </div>
  );
}

export default Filter;
