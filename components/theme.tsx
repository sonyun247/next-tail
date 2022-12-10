"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function Theme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  function toggleDark() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      onClick={toggleDark}
      className="fixed bottom-3 right-5 rounded-full hover:bg-blue-600 hover:dark:bg-fuchsia-600 z-50 p-2 dark:bg-fuchsia-500 dark:text-white bg-blue-500 text-white"
    >
      {theme === "light" ? "DARK" : "LIGHT"}
    </button>
  );
}

export default Theme;
