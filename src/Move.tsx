import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const Move: React.FC<{ children: React.ReactNode; delay: number }> = ({
  children,
  delay,
}) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const down = spring({
    fps,
    frame: frame - delay,
    config: {
      damping: 200,
    },
    durationInFrames: 120,
  });

  //   maps the spring output from its original range [0, 1] to a new range [0, -400]
  const y = interpolate(down, [0, 1], [0, -400]);

  return (
    <AbsoluteFill
      style={{
        translate: `0 ${y}px`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

export default Move;
