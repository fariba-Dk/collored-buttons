import { useState } from "react";

export default function Button(props) {
  const [isClicked, setIsClicked] = useState(false);
  // Notice the line above:
  // - has both a state and a setState variable, in this canse  isChecked and setIsChecked
  // - uses the useState hook we imported from react on line 1
  // - has a default of false, as in isChecked = false

  const background = isClicked ? props.color[0] : props.color[1];
  // Here, background simply looks at the current state to determine the background color. this variable is used in the div style for backgroundColor.

  return (
    <div
      style={{
        backgroundColor: background,
        textAlign: "center",
        height: "20vh"
      }}
    >
      <button>
        {props.num}
        <input
          onChange={() => setIsClicked(!isClicked)}
          aria-checked={isClicked}
          type="checkbox"
          value={isClicked ? "on" : "off"}
        />
      </button>
    </div>
  );
}
// all html inputs have onChange to tell if there has been an interaction.  onChange above is where we set the state, in this case setIsChecked. setIsChecked, just like it sounds, updates the  isChecked variable. To toggle isChecked, we just set the state to what it is not: !isChecked.
