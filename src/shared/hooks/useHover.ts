import { useState } from "react";

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  return {
    hoverProps: {
      onMouseEnter() {
        setIsHovered(true);
      },
      onMouseLeave() {
        setIsHovered(false);
      },
    },
    isHovered,
  };
};
