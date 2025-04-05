import { spring, useCurrentFrame } from "remotion";

const SpringTitle: React.FC<{ title: string }> = ({ title }) => {
  const frame = useCurrentFrame();
  const springValue = spring({
    frame,
    fps: 30,
    from: 0,
    to: 1,
    config: {
      damping: 200,
    },
  });

  return (
    <div style={{ transform: `scale(${springValue})` }}>
      <h1>{title}</h1>
    </div>
  );
};

export default SpringTitle;
