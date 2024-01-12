import { Switch } from "antd";
import { useTheme } from "../../contexts/ThemeContext";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Switch
      checked={theme === "dark"}
      onChange={(checked) => {
        setTheme(checked ? "dark" : "light");
      }}
    >
      主题切换
    </Switch>
  );
};

export default Theme;
