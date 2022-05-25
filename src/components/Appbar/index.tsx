import { Box, SidenavIcon } from "./styles";
import { StyledLink } from "../shared/styles";
import { useInteractionsContext } from "../../contexts/interactions/InteractionsProvider";
import { SET_MODAL } from "../../constants/interactions.constants";
import { MaterialSymbolsMenuRounded } from "./icons";

export default function Appbar(): JSX.Element {
  const { interactionsDispatch } = useInteractionsContext();
  return (
    <Box>
      <SidenavIcon onClick={() => interactionsDispatch({ type: SET_MODAL })}>
        <MaterialSymbolsMenuRounded />
      </SidenavIcon>
      <StyledLink to="/">TennisTrivia</StyledLink>
    </Box>
  );
}
