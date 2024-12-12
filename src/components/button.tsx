import { motion } from "motion/react";
import React, { useRef } from "react";

function Button({
  className,
  children,
  handleClick,
}: {
  className?: string;
  children: any;
  handleClick?: () => void;
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className={`font-semibold ${className}`}
      
      onClick={handleClick}
    >
      {children}
    </motion.button>
  );
}

export default Button;
