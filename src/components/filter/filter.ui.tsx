type FilterProps = {
  active: boolean;
  onChange: (active: boolean) => void;
};

function Filter({ active, onChange }: FilterProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div>
      <label htmlFor="filter-hide-done">완료 된 일 숨기기</label>
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
