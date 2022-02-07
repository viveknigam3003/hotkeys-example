import React, { useState } from "react";
import { HotKeys } from "react-hotkeys";
import { KeyHandlers } from "../types";

const OtherComponent = () => {
  const [counter, setCounter] = useState(0);

  // Hotkey mapping object for this component
  const hotkeys: KeyHandlers = {};

  /**
   * Function to update the counter
   * @param type Defines the action UP for increasing, DOWN for decreasing
   */
  const updateCounter = (e: KeyboardEvent | undefined, type: "UP" | "DOWN") => {
    e?.preventDefault();
    if (type === "UP") {
      setCounter((c) => c + 1);
    } else if (type === "DOWN") {
      setCounter((c) => c - 1);
    }
  };

  /**
   * Resets the counter and displays an alert.
   * @param e Keyboard Event from hotkeys
   */
  const counterReset = (e: KeyboardEvent | undefined) => {
    e?.preventDefault(); //To override Cmd + R (reloading of webpage)
    setCounter(0);
    alert("Counter Reset Success");
  };

  /*** SHORTCUT DECLARATIONS ***/
  hotkeys.counterUp = (e) => updateCounter(e, "UP");
  hotkeys.counterDown = (e) => updateCounter(e, "DOWN");
  hotkeys.counterReset = (e) => counterReset(e);

  return (
    <HotKeys handlers={hotkeys}>
      <header className="App-header">
        <h1>{counter}</h1>
        <p>Counter App</p>
        Use the arrow up (⬆️) and down (⬇️) keys to update counter
      </header>
    </HotKeys>
  );
};

export default OtherComponent;
