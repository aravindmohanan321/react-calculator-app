import React from "react";
import { ACTIONS } from "./constants";

function DigitButton({ dispatch, digit }): React.ReactElement {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
export default DigitButton;
