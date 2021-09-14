import { Box } from "./styles";
import { StyledLink } from "../shared/styles";
export default function Appbar(): JSX.Element {
  return (
    <Box>
      <StyledLink to="/">TennisTrivia</StyledLink>
    </Box>
  );
}
