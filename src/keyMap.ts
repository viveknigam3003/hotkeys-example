import { KeyMap } from "./types";

// To register a new action add the id for that action here.
export const Actions = <const>[
  "counterUp",
  "counterDown",
  "counterReset",
  "help",
];

export const keyMap: KeyMap = {
  counterUp: {
    sequence: "up",
    name: "Counter Increased",
    action: "keydown",
    group: "Counter",
  },
  counterDown: {
    name: "Counter Decrease",
    sequence: "down",
    action: "keydown",
    group: "Counter",
  },
  counterReset: ["command+r", "ctrl+r"],
  help: {
    action: "keydown",
    sequence: "",
    group: "Help",
    sequences: [
      { sequence: "command+/", action: "keypress" },
      { sequence: "ctrl+/", action: "keypress" },
    ],
  },
};
