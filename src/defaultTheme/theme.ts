export type Theme = {
  light: {
    primary: string;
    secondary: string;
    background: string;
  };

  dark: {
    primary: string;
    secondary: string;
    background: string;
    backgroundDark: string;
    backgroundLight: string;
  };
};

export const theme: Theme = {
  light: {
    primary: "#2D3748",
    secondary: "#718096",
    background: "#F7FAFC",
  },
  dark: {
    primary: "#E2E8F0", //gray 200
    secondary: "#F7FAFC", //gray 50
    background: "#4A5568", // gray 600
    backgroundDark: "#1A202C", //gray 800
    backgroundLight: "#F7FAFC", //gray 50
  },
};
