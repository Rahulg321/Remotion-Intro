import { interpolateColors, useCurrentFrame } from "remotion";

const ColorTransitionTitle: React.FC<{ title: string }> = ({ title }) => {
  const frame = useCurrentFrame();
  const color = interpolateColors(frame, [0, 30], ["red", "blue"]);

  return (
    <div>
      <h1 style={{ color }}>{title}</h1>
    </div>
  );
};

export default ColorTransitionTitle;
