import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { useCurrentFrame } from "remotion";

import Background from "./Background";
import Dot from "./Dot";
import Shrinking from "./Shrinking";
import Move from "./Move";
import Trail from "./Trail";
import Explosion from "./Explosion";
import { Dots } from "./Dots";
import { RedHearts } from "./RedHearts";
import { YellowHearts } from "./YellowHearts";
import { Stars } from "./Stars";
import { Slowed } from "./SlowedTrail";
export const MyComposition = () => {
  const frame = useCurrentFrame();

  const { fps, durationInFrames, width, height } = useVideoConfig();

  return (
    <AbsoluteFill>
      <Background />
      <Slowed>
        <Dots />
        <RedHearts />
        <YellowHearts />
        <Stars />
      </Slowed>
    </AbsoluteFill>
  );
};
