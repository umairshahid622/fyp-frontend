"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "./swtich";

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(true);
  const { systemTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(`${systemTheme}`);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [checked, mounted]);

  if (!mounted) return <>...</>;

  return <Switch checked={checked} setChecked={setChecked} />;
}
