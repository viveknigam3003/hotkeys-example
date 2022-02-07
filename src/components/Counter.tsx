import React, { useState } from "react";
import { HotKeys } from "react-hotkeys";
import { KeyHandlers } from "../types";
import "./Counter.css";

interface CounterProps {
  title?: string;
  tabIndex?: number;
}

const Counter: React.FC<CounterProps> = ({ title, tabIndex = -1 }) => {
  const [counter, setCounter] = useState(0);

  //To Register Keyboard Hotkey Handlers
  const hotkeys: KeyHandlers = {};

  /**
   * Function to update the counter
   * @param type Defines the action UP for increasing, DOWN for decreasing
   */
  const updateCounter = (
    type: "UP" | "DOWN",
    e?: KeyboardEvent | undefined
  ) => {
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
    alert(`${title} Reset Success`);
  };

  /*** SHORTCUT HANDLER DECLARATIONS ***/
  hotkeys.counterUp = (e) => updateCounter("UP", e);
  hotkeys.counterDown = (e) => updateCounter("DOWN", e);
  hotkeys.counterReset = (e) => counterReset(e);

  return (
    <HotKeys className="CounterWrapper" handlers={hotkeys} tabIndex={tabIndex}>
      <div className="Counter">
        <h1>{counter}</h1>
        <p>{title}</p>
        <div className="UpdateButtons">
          <button tabIndex={-1} onClick={() => updateCounter("UP")}>+</button>
          <button tabIndex={-1} onClick={() => updateCounter("DOWN")}>-</button>
        </div>
      </div>
    </HotKeys>
  );
};

export default Counter;
