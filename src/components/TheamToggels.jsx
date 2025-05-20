import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/util";
function TheamToggels() {
  const [islightMode, setlightMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });
  useEffect(() => {
    if (islightMode) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light"); 
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [islightMode]);
  return (
    <button
      className={cn("p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
      onClick={() => {
        setlightMode((prevMode) => !prevMode);
      }}
    >
      {islightMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button> 
  );
}

export default TheamToggels;
