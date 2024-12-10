"use client"

import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { ChevronIcon } from "../svgIcons";

function FlayoutLink({
  name,
  FlayoutContent,
}: {
  name: String;
  FlayoutContent?: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const flayoutLink: boolean = FlayoutContent !== undefined;

  return (
    <div
      onMouseEnter={() => setOpen(() => true)}
      onMouseLeave={() => setOpen(() => false)}
      className="relative"
    >
      <a className="relative flex items-center gap-3 text-gray-800 hover:cursor-pointer">
        {name}
        {flayoutLink && (
          <ChevronIcon
            className={`text-gray-800 transition-all ${open ? "rotate-90 text-primary" : "-rotate-90"}`}
          />
        )}
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "14.6%" }}
            className={`absolute top-[45px] rounded-sm bg-platinum`}
          >
            <div className="absolute left-5 top-0 h-5 w-5 -translate-y-1/2 rotate-45 bg-platinum"></div>
            <div className="absolute -left-6 -top-[1.26rem] h-6 w-full bg-transparent"></div>
            <div className="absolute -left-6 -top-0 h-full w-6 bg-transparent"></div>
            {FlayoutContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FlayoutLink;
