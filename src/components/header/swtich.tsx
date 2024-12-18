import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

function swtich({
  active,
  size,
  activeBgColor,
  inActiveBgColor,
  activeIcon,
  inActiveIcon,
  setActive,
}: {
  active: boolean;
  size?: number;
  activeIcon?: JSX.Element;
  inActiveIcon?: JSX.Element;
  activeBgColor: string;
  inActiveBgColor: string;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const outerBoxWidth = size ? size * 1.78571429 : 50;
  const outerBoxHeight = size ? size : 28;
  const innerCircleSize = size ? size * 0.71428571 : 20;
  return (
    <div>
      <div
        onClick={() => setActive((prev) => !prev)}
        style={{
          height: `${outerBoxHeight}px`,
          width: `${outerBoxWidth}px`,
        }}
        className={twMerge(
          "relative  flex cursor-pointer items-center rounded-full  px-1 shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] transition duration-200",
          active ? activeBgColor : inActiveBgColor
        )}
      >
        <motion.div
          initial={{
            x: active ? 0 : innerCircleSize,
          }}
          animate={{
            x: active ? innerCircleSize : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          key={String(active)}
          style={{
            width: `${innerCircleSize}px`,
            height: `${innerCircleSize}px`,
          }}
          className={twMerge(
            "z-10 flex items-center justify-center rounded-full bg-white text-center"
          )}
        >
          {active ? activeIcon : inActiveIcon}
        </motion.div>
      </div>
    </div>
  );
}

export default swtich;
