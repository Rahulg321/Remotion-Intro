import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import Move from "./Move";

const Trail: React.FC<{
  children: React.ReactNode;
  amount: number;
  extraOffset: number;
}> = ({ children, amount, extraOffset }) => {
  return (
    <AbsoluteFill>
      {new Array(amount).fill(true).map((_, i) => (
        // controls the delay between each dot, here 3 frames
        <Sequence from={i * 3}>
          <AbsoluteFill
            style={{
              translate: `0 ${-extraOffset}px`,
            }}
          >
            <Move delay={0}>
              <AbsoluteFill
                style={{
                  scale: String(1 - i / amount),
                }}
              >
                {children}
              </AbsoluteFill>
            </Move>
          </AbsoluteFill>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

export default Trail;
