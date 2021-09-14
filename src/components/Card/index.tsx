import { CardContainer, CardContent, CardHeader } from "./styles";
type CardProps = {
  title: string;
  description: string;
  width?: string;
  mt?: string;
};

export default function Card({
  title,
  description,
  width,
  mt,
}: CardProps): JSX.Element {
  return (
    <CardContainer width={width} mt={mt}>
      <CardHeader>{title}</CardHeader>
      <CardContent>{description}</CardContent>
    </CardContainer>
  );
}
