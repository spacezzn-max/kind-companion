const flakes = [
  { left: 2, size: 6, dur: 12, delay: 0, drift: 40, op: 0.8 },
  { left: 8, size: 3, dur: 9, delay: 2, drift: -30, op: 0.6 },
  { left: 14, size: 5, dur: 14, delay: 4, drift: 60, op: 0.7 },
  { left: 20, size: 2, dur: 8, delay: 1, drift: -20, op: 0.5 },
  { left: 26, size: 7, dur: 16, delay: 3, drift: 30, op: 0.9 },
  { left: 32, size: 4, dur: 11, delay: 5, drift: -50, op: 0.6 },
  { left: 38, size: 3, dur: 10, delay: 0.5, drift: 25, op: 0.7 },
  { left: 44, size: 6, dur: 13, delay: 6, drift: -35, op: 0.8 },
  { left: 50, size: 2, dur: 9, delay: 2.5, drift: 45, op: 0.5 },
  { left: 56, size: 5, dur: 15, delay: 1.5, drift: -25, op: 0.75 },
  { left: 62, size: 4, dur: 12, delay: 7, drift: 55, op: 0.65 },
  { left: 68, size: 7, dur: 17, delay: 3.5, drift: -40, op: 0.85 },
  { left: 74, size: 3, dur: 10, delay: 4.5, drift: 20, op: 0.6 },
  { left: 80, size: 5, dur: 13, delay: 0.8, drift: -55, op: 0.7 },
  { left: 86, size: 2, dur: 8, delay: 5.5, drift: 35, op: 0.5 },
  { left: 92, size: 6, dur: 14, delay: 2.2, drift: -30, op: 0.8 },
  { left: 97, size: 4, dur: 11, delay: 6.5, drift: 50, op: 0.65 },
  { left: 5, size: 3, dur: 16, delay: 8, drift: -45, op: 0.55 },
  { left: 35, size: 6, dur: 18, delay: 9, drift: 30, op: 0.7 },
  { left: 65, size: 4, dur: 15, delay: 10, drift: -20, op: 0.6 },
];

export function Snowfall() {
  return (
    <div className="snow-layer" aria-hidden="true">
      {flakes.map((f, i) => (
        <span
          key={i}
          className="snow-flake"
          style={{
            left: `${f.left}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            opacity: f.op,
            animationDuration: `${f.dur}s`,
            animationDelay: `-${f.delay}s`,
            ["--snow-drift" as string]: `${f.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
