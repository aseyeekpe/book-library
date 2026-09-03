type YearSelectionProps = {
  selectedYear: string;
  onSelectYear: (year: string) => void;
};

function YearSelection({ selectedYear, onSelectYear }: YearSelectionProps) {
  const years = ["2026", "2025", "2024"];

  return (
    <>
      <h2>Reviewed Years</h2>
      <ul className="list-group">
        {years.map((item) => (
          <li key={item}>
            <button
              onClick={() => onSelectYear(item)}
              className={item === selectedYear ? "active-year" : ""}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default YearSelection;
