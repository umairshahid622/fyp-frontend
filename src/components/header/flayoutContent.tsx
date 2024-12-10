import { motion } from "motion/react";
import { ChevronIcon } from "../svgIcons";

function FlayoutContent({ content }: { content: MenuItem[] }) {
  const arrow = {
    initial: { x: 0, scale: 1 },
    animate: { x: 4, scale: 1.1 },
  };

  return (
    <div className="w-80 pt-4">
      {content.map((menuItem, index) => {
        return (
          <motion.div
            key={index}
            initial="initial"
            animate="initial"
            whileHover="animate"
            className="flex w-full cursor-pointer items-center justify-between px-3 py-2 hover:bg-gray-300"
          >
            <div className="text-start">
              <h1>{menuItem.title}</h1>
              <h2 className="text-sm text-gray-600">{menuItem.subTitle}</h2>
            </div>
            <motion.div variants={arrow}>
              <ChevronIcon />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default FlayoutContent;
