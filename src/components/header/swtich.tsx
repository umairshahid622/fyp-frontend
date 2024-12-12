import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
export const Switch = ({
  checked,
  checkedIcon,
  checkedBgColor,
  unCheckedBgColor,
  unCheckedIcon,
  setChecked,
}: {
  checked: boolean;
  checkedIcon?: JSX.Element;
  unCheckedIcon?: JSX.Element;
  checkedBgColor?: string;
  unCheckedBgColor?: string;
  setChecked: (checked: boolean) => void;
}) => {
  return (
    <form className="antialiased">
      <label
        htmlFor="checkbox"
        className={twMerge(
          "relative flex h-7 w-[50px] cursor-pointer items-center rounded-full border border-transparent px-1 shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] transition duration-200",
          !checked ? checkedBgColor : unCheckedBgColor
        )}
      >
        <motion.div
          initial={{
            width: "20px",
            x: checked ? 0 : 20,
          }}
          animate={{
            height: "20px",
            width: "20px",
            x: checked ? 20 : 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          key={String(checked)}
          className={twMerge(
            "z-10 flex h-[20px] items-center justify-center rounded-full bg-white text-center"
          )}
        >
          {checked ? checkedIcon : unCheckedIcon}
        </motion.div>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="hidden"
          id="checkbox"
        />
      </label>
    </form>
  );
};
