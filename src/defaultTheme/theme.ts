type Theme = {
  light: {
    primary: string;
    secondary: string;
    background: string;
  };

  dark: {
    primary: string;
    secondary: string;
    background: string;
  };
};

export const theme: Theme = {
  light: {
    primary: "#2D3748",
    secondary: "#718096",
    background: "#F7FAFC",
  },
  dark: {
    primary: "#E2E8F0",
    secondary: "#F7FAFC",
    background: "#2D3748",
  },
};
