import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { useCurrentFrame } from "remotion";
import Title from "./components/Title";
import SpringTitle from "./components/SpringTitle";
import ColorTransitionTitle from "./components/ColorTransitionTitle";
import Background from "./Background";

export const MyComposition = () => {
  const frame = useCurrentFrame();

  const { fps, durationInFrames, width, height } = useVideoConfig();

  return (
    <AbsoluteFill>
      <Background />
    </AbsoluteFill>
  );
};
