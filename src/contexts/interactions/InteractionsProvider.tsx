import React, { createContext, useContext, useReducer } from "react";
import { InteractionsState } from "./interacstionsState.type";
import { InteractionsAction } from "./reducers/interactionsAction.type";
import interactionsReducer from "./reducers/interactionsReducer";

const initialValues: InteractionsState = {
  modal: false,
};

const InteractionsContext = createContext<{
  interactionsState: InteractionsState;
  interactionsDispatch: React.Dispatch<InteractionsAction>;
}>({
  interactionsState: initialValues,
  interactionsDispatch: () => undefined,
});

type InteractionsProviderProps = { children: JSX.Element };
export default function InteractionsProvider({
  children,
}: InteractionsProviderProps): JSX.Element {
  const [interactionsState, interactionsDispatch] = useReducer(
    interactionsReducer,
    initialValues
  );
  return (
    <InteractionsContext.Provider
      value={{ interactionsState, interactionsDispatch }}
    >
      {children}
    </InteractionsContext.Provider>
  );
}

export function useInteractionsContext() {
  return useContext(InteractionsContext);
}
