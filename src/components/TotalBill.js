export default function TotalBill({ bill, tip }) {
  return (
    <h1>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h1>
  );
}
