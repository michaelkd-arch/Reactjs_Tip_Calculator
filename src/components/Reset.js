export default function Reset({ onReset }) {
  return (
    <button
      onClick={onReset}
      style={{
        marginTop: "1rem",
        padding: "0.5em 1em",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Reset
    </button>
  );
}
