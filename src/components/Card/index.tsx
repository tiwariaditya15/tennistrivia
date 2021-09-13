import { CardContainer, CardContent, CardHeader } from "./styles";
type CardProps = {
  title: string;
  description: string;
  width?: string;
};

export default function Card({
  title,
  description,
  width,
}: CardProps): JSX.Element {
  return (
    <CardContainer width={width}>
      <CardHeader>{title}</CardHeader>
      <CardContent>{description}</CardContent>
    </CardContainer>
  );
}
