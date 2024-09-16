import "../App.css";
import Bill from "./Bill";
import Service from "./Service";
import TotalBill from "./TotalBill";
import Reset from "./Reset";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  const tip =
    ((valueNumber(service) + valueNumber(friendService)) / 2 / 100) * bill;

  function handleService(e) {
    const value = e.target.value;
    setService(value);
  }

  function handleFriendService(e) {
    const value = e.target.value;
    setFriendService(value);
  }

  function valueNumber(state) {
    if (!state) return 0;
    const regExp = /[0-9]/g;
    const stateNumber = Number(state.match(regExp).join(""));
    return stateNumber;
  }

  function handleReset() {
    setBill(0);
    setService(0);
    setFriendService(0);
  }

  return (
    <div style={{ margin: "0 1rem 0" }}>
      <Bill bill={bill} onBill={setBill} />
      <Service service={service} onService={handleService}>
        How did you like the service?
      </Service>
      <Service service={friendService} onService={handleFriendService}>
        How did your friend like the service?
      </Service>
      <TotalBill bill={bill} tip={tip} />
      <Reset onReset={handleReset} />
    </div>
  );
}
