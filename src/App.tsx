import React from "react";
import { HotKeys } from "react-hotkeys";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import OtherComponent from "./components/OtherComponent";
import { keyMap } from "./keyMap";

function App() {
  return (
    <HotKeys keyMap={keyMap}>
      <div className="App">
        <FirstComponent />
        <OtherComponent />
      </div>
    </HotKeys>
  );
}

export default App;
