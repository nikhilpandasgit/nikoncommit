// components/icons/XIcon.tsx
import React from "react";

type IconProps = {
  size?: number;
  className?: string;
};

const XIcon: React.FC<IconProps> = ({ size = 19, className = "" }) => (
  <svg
    viewBox="0 0 1200 1227"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M716.667 500.425L1150 0H1045L666.5 442.45L362.5 0H0L462.5 674.05L0 1227H105.5L510.5 745.25L837.5 1227H1200L716.667 500.425ZM560.5 683.85L520.5 626.35L150.5 98.5H300.5L603.5 534.85L643.5 592.35L1049.5 1128.5H899.5L560.5 683.85Z" />
  </svg>
);

export default XIcon;