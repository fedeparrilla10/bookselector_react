const Checkbox = ({ category, state, check }) => {
  return (
    <>
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
    </>
  );
};

export default Checkbox;
