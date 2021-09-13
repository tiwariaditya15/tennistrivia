import Card from "../components/Card";
import { Meta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../defaultTheme/theme";

export default {
  title: "Card",
  Component: Card,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme["dark"]}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

export const BasicCard = () => (
  <Card title="Forehand Quiz" description="Solidy you forehand knowledge" />
);
