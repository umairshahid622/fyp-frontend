"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "./swtich";
import { MoonIcon, SunIcon } from "../svgIcons";

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(true);
  const { systemTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      setChecked(savedTheme === "dark");
    } else if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      setChecked(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [checked, mounted]);

  if (!mounted) return <>...</>;

  return (
    <Switch
      checkedIcon={<MoonIcon />}
      unCheckedIcon={<SunIcon />}
      checkedBgColor="bg-[#352601]"
      unCheckedBgColor="bg-sky-700"
      checked={checked}
      setChecked={setChecked}
    />
  );
}
