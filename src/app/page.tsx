"use client";
import { useEffect, useState } from "react";

import codeImage from "@/assets/home/Screen Shot (1).png";
import whiteCodeImage from "@/assets/home/image.png";
import Button from "@/components/button";
import { useTheme } from "next-themes";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const courseLinks = [
    "All Recommendation",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "UI Design",
    "Web Programming",
    "Mobile Programming",
    "Backend Development",
    "Vue JS",
  ];

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 pt-10 h-full">
        <div className="space-y-4 flex flex-col justify-center px-4 md:px-8 lg:px-16 ">
          <h1 className="text-6xl lg:text-7xl">Learn something new every day.</h1>
          <p className="text-xl">
            Become professionals and ready to join the world.
          </p>
          <div className="flex flex-wrap gap-5">
            <Button
              handleClick={() => console.log("Browse Course")}
              className="bg-white px-4 py-2 text-green-700 hover:text-primary rounded-lg dark:border-none border border-gray-700"
            >
              Browse Course
            </Button>
            <Button className="bg-green-700 px-4 py-2 rounded-lg text-white hover:bg-primary border-none">
              Start make your account
            </Button>
          </div>
        </div>
        <div className="flex items-end">
          <img
            src={theme === "dark" ? codeImage.src : whiteCodeImage.src}
            className="rounded-l-lg  w-full h-[550px] hidden lg:block object-cover"
            alt=""
          />
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16">
        <div className="flex justify-between flex-wrap py-8 gap-2">
          {courseLinks.map((item, index) => (
            <a
              key={index}
              className="text-center inline-block text-slate-600 grow items-stretch cursor-pointer border border-green-700 dark:border-transparent font-semibold bg-white text-gray-700 px-3 py-2 rounded-lg hover:text-green-700"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
