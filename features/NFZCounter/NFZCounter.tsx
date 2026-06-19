"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

type NFZCounterProps = {
  NFZvalue?: number;
  maxValue?: number;
};

const NFZCounter = ({ NFZvalue = 100, maxValue = 500 }: NFZCounterProps) => {
  const [nfzValue, setNfzValue] = useState<number>(NFZvalue);

  // Valeur dérivée : recalculée à chaque rendu, donc toujours à jour avec nfzValue.
  const percentageValue = Math.min(
    100,
    Math.max(0, (nfzValue / maxValue) * 100),
  );

  return (
    <div style={containerStyles}>
      <h3
        style={{
          color: textStyles.mainTextColor,
          fontWeight: textStyles.mainTextWeight,
        }}
      >
        {nfzValue}{" "}
        <span
          style={{
            color: textStyles.subTextColor,
            fontWeight: textStyles.subTextWeight,
            fontSize: textStyles.subTextSize,
          }}
        >
          NFZ
        </span>
      </h3>
      <div className="h-[40px] flex items-center justify-center">
        <Slider value={percentageValue} />
      </div>
      <div className="flex justify-between">
        <span style={textNumberStyles}>0</span>
        <span style={textNumberStyles}>500</span>
      </div>
    </div>
  );
};

const containerStyles = {
  padding: "16px",
  borderRadius: "8px",
  backgroundColor: "#1B1B1B",
  border: "2px solid #5B5B5B",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const textStyles = {
  mainTextColor: "#FFFFFF",
  mainTextWeight: "bold",
  mainTextSize: "20px",
  subTextColor: "#AAAAAA",
  subTextWeight: "normal",
  subTextSize: "14px",
};

const textNumberStyles = {
  color: "#878787",
  fontWeight: "600",
  fontSize: "14px",
};

export default NFZCounter;
