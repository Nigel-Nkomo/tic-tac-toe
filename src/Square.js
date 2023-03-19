import "./Square.css";

export default function Square({ value, handleClick, i }) {
  return (
    <>
      <button className="square" onClick={() => handleClick(i)}>
        {value}
      </button>
    </>
  );
}
