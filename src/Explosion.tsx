import React from "react";
import { AbsoluteFill, Sequence } from "remotion";

const AMOUNT = 10;

const Explosion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AbsoluteFill>
      {new Array(AMOUNT).fill(true).map((_, i) => {
        return (
          <AbsoluteFill
            style={{
              rotate: (i / AMOUNT) * (2 * Math.PI) + "rad",
            }}
          >
            {children}
          </AbsoluteFill>
        );
      })}
    </AbsoluteFill>
  );
};

export default Explosion;
