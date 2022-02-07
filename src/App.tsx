import React from "react";
import { HotKeys } from "react-hotkeys";
import "./App.css";
import Counter from "./components/Counter";
import { keyMap } from "./keyMap";

function App() {
  return (
    <div className="root">
      <header>
        <h1>Counter App </h1>
        <p>with Keyboard Controls</p>
      </header>
      <HotKeys keyMap={keyMap}>
        <div className="App">
          <Counter title="Left Counter" tabIndex={1} />
          <Counter title="Right Counter" tabIndex={2} />
        </div>
      </HotKeys>
      <footer>
        <h2>Instructions</h2>
        <ul>
          <li>Click on a counter to bring it in focus</li>
          <li>Use the ⬆ and ⬇ arrow keys to update counter</li>
          <li>Use ⌘ + R or Ctrl + R to reset the counter</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
