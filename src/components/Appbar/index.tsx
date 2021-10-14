import { Box, SidenavIcon } from "./styles";
import { StyledLink } from "../shared/styles";
import SideNav from "../../assets/images/sideNav.svg";
import { useInteractionsContext } from "../../contexts/interactions/InteractionsProvider";
import { SET_MODAL } from "../../constants/interactions.constants";

export default function Appbar(): JSX.Element {
  const { interactionsDispatch } = useInteractionsContext();
  return (
    <Box>
      <SidenavIcon
        src={SideNav}
        alt="side-nav"
        onClick={() => interactionsDispatch({ type: SET_MODAL })}
      />
      <StyledLink to="/">TennisTrivia</StyledLink>
    </Box>
  );
}
