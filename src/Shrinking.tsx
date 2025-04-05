import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const Shrinking: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        // this is a scale out effect, it scales the dot from 1 to 0 over 30 frames
        scale: String(
          interpolate(frame, [60, 90], [1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        ),
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

export default Shrinking;
