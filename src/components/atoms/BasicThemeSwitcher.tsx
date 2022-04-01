import React, { ChangeEvent } from "react";
import { useDarkTheme } from "../../assets/hooks/useDarkTheme";

type Props = {};

const BasicThemeSwitcher = (props: Props) => {
  const [mode, setTheme] = useDarkTheme();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? "dark" : "light");
  };

  return (
    <label>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={mode === "dark"}
      />
      Set to dark theme
    </label>
  );
};

export default BasicThemeSwitcher;
