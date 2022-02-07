import { KeyMap } from "./types";

export const keyMap: KeyMap = {
  counterUp: {
    sequence: "up",
    name: "Counter Increased",
    action: "keydown",
  },
  counterDown: "down",
  counterReset: ["command+r", "ctrl+r"],
};
