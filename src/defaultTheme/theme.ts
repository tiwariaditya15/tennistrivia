export type Theme = {
  light: {
    primary: string;
    secondary: string;
    background: string;
  };

  dark: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    background: string;
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
    background: "#E2E8F0", //gray 200 background: ;
    backgroundLight: "#F7FAFC", //gray 50 backgroundLight
    primary: "#4A5568", // gray 600 primary
    primaryDark: "#1A202C", //gray 800 primaryDark
    primaryLight: "#F7FAFC", //gray 50 primaryLight
  },
};
