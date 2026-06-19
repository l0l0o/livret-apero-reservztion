import { Slider as SliderPrimitive } from "@base-ui/react/slider";

import { cn } from "@/lib/utils";

type SliderProps = {
  /** Remplissage de la jauge, de 0 à 100. */
  value: number;
  className?: string;
};

function Slider({ value, className }: SliderProps) {
  return (
    <SliderPrimitive.Root
      className={cn("data-horizontal:w-full data-vertical:h-full", className)}
      data-slot="slider"
      value={value}
      min={0}
      max={100}
      thumbAlignment="edge"
    >
      <SliderPrimitive.Control className="pointer-events-none relative flex w-full touch-none items-center select-none data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col">
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden rounded-full bg-white/30 select-none data-horizontal:h-1.75 data-horizontal:w-full data-vertical:h-full data-vertical:w-1.75"
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
            className="relative z-10 bg-[linear-gradient(90deg,#4E3ABD_0%,#9E90FF_100%)] select-none data-horizontal:h-full data-vertical:w-full"
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          className="relative z-20 block size-8 shrink-0 overflow-hidden rounded-full border border-ring bg-[url(/image/NightFlouz.png)] bg-cover bg-center bg-no-repeat select-none"
        />
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider };
