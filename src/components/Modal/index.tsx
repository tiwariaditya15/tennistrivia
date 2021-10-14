import { SET_MODAL } from "../../constants/interactions.constants";
import { useInteractionsContext } from "../../contexts/interactions/InteractionsProvider";
import { Overlay, ModalBody } from "./styles";
type ModalProps = {
  children: JSX.Element;
};
export default function Modal({ children }: ModalProps): JSX.Element | null {
  const {
    interactionsDispatch,
    interactionsState: { modal },
  } = useInteractionsContext();
  if (!modal) return null;
  return (
    <Overlay onClick={() => interactionsDispatch({ type: SET_MODAL })}>
      <ModalBody onClick={(e) => e.stopPropagation()}>{children}</ModalBody>
    </Overlay>
  );
}
