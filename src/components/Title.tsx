import { interpolate, useCurrentFrame } from "remotion";

const Title: React.FC<{
  title: string;
}> = ({ title }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 20], [0.5, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ opacity, transform: `scale(${scale})` }}>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
