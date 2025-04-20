import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={`rounded-full bg-gray-200 dark:bg-gray-700 ${className}`}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 dark:hidden text-yellow-500" />
      <Moon className="h-5 w-5 hidden dark:block text-blue-400" />
    </Button>
  );
};

export default ThemeToggle;
