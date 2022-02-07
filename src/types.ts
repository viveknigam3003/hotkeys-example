import { KeySequence } from "react-hotkeys";

// To register a new action add the id for that action here.
const Actions = <const>["counterUp", "counterDown", "counterReset"];

interface HotKey {
  id: typeof Actions[number];
  sequence: KeySequence;
}

type ShortcutAction = HotKey["id"];
export type KeyMap = { [x in ShortcutAction]: HotKey["sequence"] };
export type KeyHandlers = {
  [key in ShortcutAction]?: (keyEvent?: KeyboardEvent | undefined) => void;
};
