import { Maximize, Minus, X } from "lucide-react";

export function DragWindow() {
  function handle(action: string) {
    window.api.fetch(action);
  }

  return (
    <div className="h-10 flex  justify-end region-drag min-w-full absolute inset-0">
      <div
        onClick={() => handle("minimize")}
        className="w-10 h-10 flex justify-center items-center hover:bg-gray-400/20 region-no-drag"
      >
        <Minus className="text-primary w-4" />
      </div>
      <div
        onClick={() => handle("maximize")}
        className="w-10 h-10 flex justify-center items-center  hover:bg-gray-400/20 region-no-drag"
      >
        <Maximize className="text-primary w-4" />
      </div>
      <div
        onClick={() => handle("close")}
        className="w-10 h-10 flex justify-center items-center text-primary hover:text-white   hover:bg-rose-600 region-no-drag"
      >
        <X className=" w-4" />
      </div>
    </div>
  );
}
