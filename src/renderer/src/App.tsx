import { Button } from "@/components/ui/button";
import { DragWindow } from "./components/drag-window";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "./components/theme/mode-toggle";
import clsx from "clsx";

export function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col justify-center items-center  h-screen">
        <DragWindow />
        <h1 className="text-center  text-xl">
          Template electron with shadcnui
        </h1>
        <div className="flex  gap-2">
          <Button>Button</Button>
          <ModeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}
