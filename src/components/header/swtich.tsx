import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "../svgIcons";
export const Switch = ({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}) => {
  return (
    <form className="antialiased">
      <label
        htmlFor="checkbox"
        className={twMerge(
          "relative flex h-7 w-[50px] cursor-pointer items-center rounded-full border border-transparent px-1 shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] transition duration-200",
          !checked ? "bg-sky-700" : "bg-[#352601]",
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
            "z-10 flex h-[20px] items-center justify-center rounded-full bg-white text-center",
          )}
        >
          {!checked ? <SunIcon /> : <MoonIcon />}
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
