"use client";

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
      <a className="relative flex items-center gap-3  hover:cursor-pointer font-medium">
        {name}

        {flayoutLink && (
          <ChevronIcon
            className={` font-semibold transition-all ${open ? "rotate-90 text-primary" : "-rotate-90"}`}
          />
        )}
        {/* <AnimatePresence>
          {open && (
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              className="absolute origin-left rounded-full -bottom-1 bg-primary w-full h-0.5"
            ></motion.span>
          )}
        </AnimatePresence> */}
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "10.5%" }}
            className={`absolute top-[46px] rounded-lg bg-platinum`}
          >
            <div className="absolute -z-10 left-7 top-0 h-5 w-5 -translate-y-1/2 rotate-45 bg-platinum"></div>
            <div className="absolute -left-10 -top-[1.35rem] h-6 w-full bg-transparent"></div>
            <div className="absolute -left-10 -top-0 h-full w-10 bg-transparent"></div>
            {FlayoutContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FlayoutLink;
