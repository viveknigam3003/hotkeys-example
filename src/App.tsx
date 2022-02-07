import React from "react";
import { getApplicationKeyMap, HotKeys } from "react-hotkeys";
import "./App.css";
import Counter from "./components/Counter";
import { keyMap } from "./keyMap";
import { HotKeyHandlers } from "./types";

function App() {
  /**
   * Prints complete key map details in console and also triggers an alert
   */
  const showHelp = () => {
    alert("Check Console for Help");
    console.log(getApplicationKeyMap());
  };

  // Registering hotkey handlers
  const hotkeys: HotKeyHandlers = {
    help: () => showHelp(),
  };

  return (
    <HotKeys keyMap={keyMap} handlers={hotkeys}>
      <div className="root">
        <header>
          <h1>Counter App </h1>
          <p>
            with Keyboard Controls using{" "}
            <a href="https://github.com/greena13/react-hotkeys" tabIndex={-1}>
              react-hotkeys
            </a>
          </p>
        </header>

        <div className="App">
          <Counter title="Left Counter" tabIndex={1} />
          <Counter title="Right Counter" tabIndex={2} />
        </div>

        <footer>
          <h2>Instructions</h2>
          <ul>
            <li>Click on a counter to bring it in focus</li>
            <li>You can use Tab ↹ key to move focus between counters</li>
            <li>Use the ⬆ and ⬇ arrow keys to update counter</li>
            <li>Use ⌘ + R or Ctrl + R to reset the counter</li>
            <li>Use ⌘ + / for Keymap Object (in the console)</li>
          </ul>
          <a tabIndex={-1} href="https://github.com/viveknigam3003/hotkeys-example">Source Code</a>
        </footer>
      </div>
    </HotKeys>
  );
}

export default App;
