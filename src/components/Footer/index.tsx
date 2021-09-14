import { AppName, Author } from "./styles";

export default function Footer(): JSX.Element {
  const withCode = "</>";
  return (
    <>
      <AppName>TennisTrivia © 2022</AppName>
      <Author>Made with {withCode} by Aditya Tiwari</Author>
    </>
  );
}
