import "./styles.css";
import Button from "../component/Button";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Techtonica</h1>
      <h2>Check out our Buttons!</h2>
      <Button num="1" color={["blue", "orange"]} />
      <Button num="2" color={["aqua", "pink"]} />
      <Button num="3" color={["red", "yellow"]} />
      <Button num="4" color={["orange", "green"]} />
    </div>
  );
}
