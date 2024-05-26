import React from "react";
import { ACTIONS } from "./constants";

function OperationButton({ dispatch, operation }): React.ReactElement {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
export default OperationButton;
