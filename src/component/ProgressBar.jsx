import { useEffect, useState } from "react";
import { MIN, MAX } from "../constant";

export const ProgressBar = ({ value = "0", onComplete = () => {} }) => {
  const [percentageValue, setPercentageValue] = useState(value);

  useEffect(() => {
    setPercentageValue(Math.min(MAX, Math.max(MIN, value)));
    if (value >= MAX) {
      onComplete();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: `${percentageValue > 49 ? "white" : "black"}` }}>
        {percentageValue}%
      </span>
      <div
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percentageValue}
        style={{
          transform: `scaleX(${percentageValue / MAX})`,
          transformOrigin: "left",
        }}
      />
    </div>
  );
};
