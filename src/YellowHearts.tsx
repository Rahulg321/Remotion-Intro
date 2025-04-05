import React from "react";
import Explosion from "./Explosion";
import Move from "./Move";
import Shrinking from "./Shrinking";
import { YellowHeart } from "./YellowHeart";
import { AbsoluteFill } from "remotion";

export const YellowHearts: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        rotate: "0.3rad",
      }}
    >
      <Explosion>
        <Move delay={20}>
          <AbsoluteFill
            style={{
              transform: `translateY(-50px)`,
            }}
          >
            <Shrinking>
              <YellowHeart />
            </Shrinking>
          </AbsoluteFill>
        </Move>
      </Explosion>
    </AbsoluteFill>
  );
};
