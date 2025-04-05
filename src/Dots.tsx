import React from "react";
import { Sequence } from "remotion";
import Explosion from "./Explosion";
import Shrinking from "./Shrinking";
import Trail from "./Trail";
import Dot from "./Dot";

export const Dots: React.FC = () => {
  return (
    <Explosion>
      <Trail amount={4}>
        <Shrinking>
          <Sequence from={5}>
            <Dot />
          </Sequence>
        </Shrinking>
      </Trail>
    </Explosion>
  );
};
