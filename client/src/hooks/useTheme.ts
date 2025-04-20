import { useTheme as useNextTheme } from "next-themes";

export const useTheme = () => {
  const { theme, setTheme, systemTheme } = useNextTheme();
  
  return {
    theme,
    setTheme,
    systemTheme,
    isDark: theme === "dark" || (theme === "system" && systemTheme === "dark"),
  };
};
