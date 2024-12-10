"use client";

import Logo from "@/assets/Header/bulb.svg";
import FlayoutLink from "./flayoutLink";
import FlayoutContent from "./flayoutContent";
import { SearchIcon } from "../svgIcons";
import ThemeToggler from "./themToggler";
import { AnimatePresence, motion } from "motion/react";
import MenuButton from "./menuButton";
import { useEffect, useState } from "react";

function Header() {
  const [active, setActive] = useState(false);
  const broseMenu: MenuItem[] = [
    {
      title: "Design",
      subTitle: "All About Design Course",
    },
    {
      title: "Programming",
      subTitle: "Website & Mobile Programming",
    },
    {
      title: "Buisiness & Marketting",
      subTitle: "All About Buisiness & Marketting",
    },
    {
      title: "Photo & Video",
      subTitle: "All About Photo & Video Capturing",
    },
    {
      title: "Writing",
      subTitle: "All About Content Writing",
    },
  ];

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  return (
    <div>
      <div className="relative flex items-center justify-between gap-[4vw] bg-white bg-opacity-40 px-4 py-1 text-black">
        <div className="flex items-center gap-4">
          <img className="size-14 mix-blend-multiply" src={Logo.src} alt="" />
          <div className="hidden text-end leading-3 sm:block">
            <h1 className="text-lg font-medium">Personal AI Educator</h1>
            <h2>Learn Your Way</h2>
          </div>
        </div>
        <div className="hidden flex-1 items-center gap-10 lg:flex">
          <FlayoutLink
            name={"Browse"}
            FlayoutContent={<FlayoutContent content={broseMenu} />}
          />
          <form className="w-full">
            <div className="relative w-full min-w-24">
              <input
                type="text"
                id="search"
                className="block w-full rounded-lg border border-primary p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary dark:bg-platinum"
                placeholder="Search..."
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 h-full -translate-y-1/2 rounded-lg px-3"
              >
                <SearchIcon />
              </button>
            </div>
          </form>
        </div>
        <div className="hidden items-center gap-1 lg:flex">
          <motion.button
            type="button"
            whileTap={{ scale: 0.8 }}
            className="me-2 rounded-lg border border-gray-700 bg-transparent px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-700"
          >
            Login
          </motion.button>
          <motion.button
            type="button"
            whileTap={{ scale: 0.8 }}
            className="me-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Sign Up
          </motion.button>
          <ThemeToggler />
        </div>
        <MenuButton active={active} setActive={setActive} />
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }} // Add smooth transition
            className="fixed top-0 z-10 h-full max-h-[100vh] w-full bg-gradientDark"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
