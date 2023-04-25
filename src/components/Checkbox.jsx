const Checkbox = ({ category, state, check }) => {
  return (
    <div className="category-checkbox">
      <label htmlFor={category}>{category}</label>
      <input
        type="checkbox"
        name={category}
        id={category}
        checked={check}
        onChange={() => {
          state(!check);
        }}
      />
    </div>
  );
};

export default Checkbox;
