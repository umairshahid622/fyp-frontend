"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "../svgIcons";
import Switch from "./swtich";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    const newTheme = checked ? "light" : "dark";
    setTheme(newTheme);
    setChecked(!checked);
  };

  return (
    <Switch
      active={checked}
      setActive={handleToggle}
      activeIcon={<MoonIcon />}
      inActiveIcon={<SunIcon />}
      activeBgColor="bg-[#352601]"
      inActiveBgColor="bg-sky-900"
    />
  );
}
