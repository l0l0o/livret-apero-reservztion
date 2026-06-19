import { Slider as SliderPrimitive } from "@base-ui/react/slider";

import { cn } from "@/lib/utils";

type SliderProps = {
  /** Remplissage de la jauge, de 0 à 100. */
  value: number;
  /** Jauge pleine : anime le remplissage en gradient arc-en-ciel. */
  rainbow?: boolean;
  className?: string;
};

function Slider({ value, rainbow = false, className }: SliderProps) {
  return (
    <SliderPrimitive.Root
      className={cn(
        "data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full",
        className,
      )}
      data-slot="slider"
      value={value}
      min={0}
      max={100}
      thumbAlignment="edge"
    >
      <SliderPrimitive.Control className="pointer-events-none relative flex w-full touch-none items-center select-none data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden rounded-full bg-white/30 select-none data-[orientation=horizontal]:h-1.75 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.75"
        >
          <div className="absolute inset-0 z-0 flex items-center justify-between">
            <div className="h-full w-[2px] bg-none" />
            <div className="h-full w-[2px] bg-[#1B1B1B]" />
            <div className="h-full w-[2px] bg-[#1B1B1B]" />
            <div className="h-full w-[2px] bg-[#1B1B1B]" />
            <div className="h-full w-[2px] bg-[#1B1B1B]" />
            <div className="h-full w-[2px] bg-none" />
          </div>
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className={cn(
              // Transition sur width/height pour un remplissage fluide à chaque tick.
              "relative z-10 select-none transition-[width,height] duration-500 ease-out data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
              rainbow
                ? "gauge-rainbow"
                : "bg-[linear-gradient(90deg,#4E3ABD_0%,#9E90FF_100%)]",
            )}
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          className="relative z-20 block size-8 shrink-0 overflow-hidden rounded-full border border-ring bg-[url(/image/NightFlouz.png)] bg-cover bg-center bg-no-repeat transition-[inset-inline-start,bottom] duration-500 ease-out select-none"
        />
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider };
