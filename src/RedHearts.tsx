import React from "react";
import Explosion from "./Explosion";
import { AbsoluteFill } from "remotion";
import Move from "./Move";
import Shrinking from "./Shrinking";
import { RedHeart } from "./RedHeart";

export const RedHearts: React.FC = () => {
  return (
    <Explosion>
      <Move delay={5}>
        <AbsoluteFill style={{ transform: `translateY(-100px)` }}>
          <Shrinking>
            <RedHeart />
          </Shrinking>
        </AbsoluteFill>
      </Move>
    </Explosion>
  );
};
