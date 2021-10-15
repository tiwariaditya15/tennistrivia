import { LOGOUT } from "../../constants/auth.constants";
import { SET_MODAL } from "../../constants/interactions.constants";
import { useAuthContext } from "../../contexts/auth/AuthProvider";
import { useInteractionsContext } from "../../contexts/interactions/InteractionsProvider";
import { StyledLink, Flex } from "../shared/styles";
import { NavItems } from "./styles";

export default function Navigation(): JSX.Element {
  const { interactionsDispatch } = useInteractionsContext();
  const {
    authState: { logged },
    authDispatch,
  } = useAuthContext();
  return (
    <NavItems onClick={() => interactionsDispatch({ type: SET_MODAL })}>
      <Flex align="flex-start">
        <StyledLink to="/" p="1rem" ml="0.6rem">
          Home
        </StyledLink>
        <StyledLink to="/scores" p="1rem" ml="0.6rem">
          Score
        </StyledLink>
        {logged && (
          <StyledLink
            to="/"
            p="1rem"
            ml="0.6rem"
            onClick={() => {
              authDispatch({ type: LOGOUT });
              localStorage.removeItem("AUTH_TOKEN");
            }}
          >
            Logout
          </StyledLink>
        )}
        {!logged && (
          <StyledLink to="/login" p="1rem" ml="0.6rem">
            Login
          </StyledLink>
        )}
      </Flex>
    </NavItems>
  );
}
