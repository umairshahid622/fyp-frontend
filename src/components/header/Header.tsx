"use client";
import FlayoutLink from "./flayoutLink";
import FlayoutContent from "./flayoutContent";
import { SearchIcon } from "../svgIcons";
import ThemeToggler from "./themToggler";
import { AnimatePresence, motion } from "motion/react";
import MenuButton from "./menuButton";
import { useEffect, useState } from "react";
import Button from "../button";
import Logo from "../logo";

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
    <div className="fixed top-0 left-0 z-10 w-full bg-white dark:bg-[#808080]">
      <div className="relative  mx-auto flex items-center justify-between gap-[4vw] px-4 md:px-8 lg:px-16 py-1 text-black">
        <Logo header />
        <div className="hidden flex-1 items-center gap-6 lg:flex">
          <FlayoutLink
            name={"Browse"}
            FlayoutContent={<FlayoutContent content={broseMenu} />}
          />
          <form className="w-full">
            <div className="relative w-full min-w-24">
              <input
                type="text"
                id="search"
                className="block w-full rounded-lg border  p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-green-700 dark:bg-platinum"
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
          <Button className="me-2 rounded-lg border border-gray-700 bg-transparent px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700">
            Login
          </Button>
          <Button className="me-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-primary">
            Sign Up
          </Button>

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
