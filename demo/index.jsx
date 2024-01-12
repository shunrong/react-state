import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@elime/react-redux";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import App from "./src/App";
import store from "./src/store";

const node = document.getElementById("root");
const root = createRoot(node);

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
