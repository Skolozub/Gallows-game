import React from "react";

const gallowsStrokeWidth = 3;
const strokeWidth = 2;
const stroke = "violet";

const lines = [
  [10, 190, 80, 190],
  [20, 190, 20, 10],
  [10, 10, 120, 10],
  [40, 10, 20, 30]
];

export const GallowsPanel = () => (
  <svg viewBox="0 0 200 200" width="100%" height="100%">
    {/* gallow */}
    {lines.map(([x1, y1, x2, y2]) => (
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={stroke}
        strokeWidth={gallowsStrokeWidth}
      />
    ))}
    <line x1="110" y1="10" x2="110" y2="30" stroke={stroke} strokeWidth="1" />

    {/* man */}
    <circle
      r="14"
      cx="110"
      cy="45"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <ellipse
      rx="18"
      ry="30"
      cx="110"
      cy="90"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <line
      x1="97"
      y1="70"
      x2="70"
      y2="90"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <line
      x1="123"
      y1="70"
      x2="150"
      y2="90"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <line
      x1="100"
      y1="115"
      x2="90"
      y2="150"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <line
      x1="120"
      y1="115"
      x2="130"
      y2="150"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </svg>
);
