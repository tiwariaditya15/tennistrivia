import { SET_MODAL } from "../../../constants/interactions.constants";
import { InteractionsState } from "../interacstionsState.type";
import { InteractionsAction } from "./interactionsAction.type";

export default function interactionsReducer(
  state: InteractionsState,
  action: InteractionsAction
) {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return {
        ...state,
      };
  }
}
