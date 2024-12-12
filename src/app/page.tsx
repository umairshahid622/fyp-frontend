"use client";

import codeImage from "@/assets/home/image.png";
import Authentication from "@/components/auth/auth";
import Button from "@/components/button";
import Modal from "@/components/modal";

export default function Home() {
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
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
        <div className=" space-y-4 flex flex-col  justify-center px-4 md:px-8 lg:px-16 min-h-[calc(100vh-3.8rem)]">
          <h1 className="text-5xl">Learn something new everyday.</h1>
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
            <Button className="bg-green-700 px-4 py-2 rounded-lg text-white hover:bg-primary border-none ">
              Start make your account
            </Button>
          </div>
        </div>
        <div className="flex items-end">
          <img
            src={codeImage.src}
            className="rounded-tl-lg min-h-[500px] w-full max-h-[550px] hidden lg:block"
            alt=""
          />
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16">
        <div className="flex justify-between flex-wrap py-8 gap-2">
          {courseLinks.map((item, index) => (
            <a
              key={index}
              className=" text-center  inline-block text-slate-600 grow items-stretch cursor-pointer border border-green-700 dark:border-transparent font-semibold bg-white text-gray-700 px-3 py-2 rounded-lg hover:text-green-700"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <Modal>
        <Authentication />
      </Modal>
    </>
  );
}
