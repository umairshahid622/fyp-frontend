"use client";

import Logo from "./logo";

function Footer() {
  const links: string[][] = [
    ["Web programming", "Mobile Programming", "Java Beginner", "PHP Beginner"],
    ["Adobe Illustrator", "Adobe Photoshop", "Design Logo"],
    ["Writing Course", "Photography", "Video Making"],
  ];

  const courseTopics: string[] = [];

  return (
    <div className="bg-maroon/20 py-5 px-4 md:px-8 lg:px-16  backdrop-blur-lg">
      <div className="grid grid-cols-2 items-start gap-5 lg:grid-cols-4 ">
        <Logo />
        {links.map((item, i) => {
          return (
            <div key={i} className="space-y-2  h-full">
              {item.map((link, j) => {
                return (
                  <a
                    className="block text-black cursor-pointer  dark:text-slate-300 dark:hover:text-white"
                    key={j}
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
