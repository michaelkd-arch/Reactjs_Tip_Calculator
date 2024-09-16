export default function Service({ children, service, onService }) {
  return (
    <div className="container">
      <span className="description">{children}</span>
      <select value={service} onChange={(e) => onService(e)} className="input">
        <option>Dissatisfied (0%)</option>
        <option>It was okey (5%)</option>
        <option>It was good (10%)</option>
        <option>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
