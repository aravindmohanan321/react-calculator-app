import { ACTIONS } from "./constants";

interface AddDigitAction {
  type: typeof ACTIONS.ADD_DIGIT;
  payload: { digit: string };
}

interface ChooseOperationAction {
  type: typeof ACTIONS.CHOOSE_OPERATION;
  payload: { operation: string };
}

interface ClearAction {
  type: typeof ACTIONS.CLEAR;
}

interface DeleteDigitAction {
  type: typeof ACTIONS.DELETE_DIGIT;
}

interface EvaluateAction {
  type: typeof ACTIONS.EVALUATE;
}

export type ActionTypes =
  | AddDigitAction
  | ChooseOperationAction
  | ClearAction
  | DeleteDigitAction
  | EvaluateAction;
