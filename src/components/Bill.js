export default function Bill({ bill, onBill }) {
  return (
    <div className="container">
      <span className="bill__description">How much was the bill?</span>
      <input
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
        className="input"
        type="text"
      ></input>
    </div>
  );
}
