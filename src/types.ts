import { KeySequence } from "react-hotkeys";
import { Actions } from "./keyMap";
interface HotKey {
  id: typeof Actions[number];
  sequence: KeySequence;
}

type ShortcutAction = HotKey["id"];
export type KeyMap = { [x in ShortcutAction]: HotKey["sequence"] };
export type KeyHandlers = {
  [key in ShortcutAction]?: (keyEvent?: KeyboardEvent | undefined) => void;
};
