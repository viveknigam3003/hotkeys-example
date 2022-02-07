import { KeySequence } from "react-hotkeys";
import { Actions } from "./keyMap";

// This type can be created with different kinds of actions ids lists.
// It allows for greater customization of hotkeys on module level.
// Here "Actions" is an array of hotkey action ids.
type HotKeyActionsIds = typeof Actions[number];

/** 
 * Custom Interface for HotKey for fixing Action IDs 
 * Uses a Generic Type for id
 * @example
 * const Actions = <const>['a', 'b', 'c']; //readonly array
 * type HotkeysWithActions = HotKey<typeof Actions[number]> // will generate an interface with values inside Actions array as the only allowed values for `id` 
 */
interface HotKey<T> {
  id: T;
  sequence: KeySequence;
}

/**
 * Type for a map of all valid Hotkey actions and their KeySequences.
 */
export type HotKeyMap = {
  [id in HotKeyActionsIds]: HotKey<HotKeyActionsIds>["sequence"];
};

/**
 * Type for a map of all valid Hotkey actions and their handler functions
 */
export type HotKeyHandlers = {
  [id in HotKeyActionsIds]?: (keyEvent?: KeyboardEvent | undefined) => void;
};
