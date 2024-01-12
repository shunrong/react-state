import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
