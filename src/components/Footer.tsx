"use client";

import Logo from "@/assets/Footer/whitebulb.svg";

function Footer() {
  const links: string[][] = [
    ["Web programming", "Mobile Programming", "Java Beginner", "PHP Beginner"],
    ["Adobe Illustrator", "Adobe Photoshop", "Design Logo"],
    ["Writing Course", "Photography", "Video Making"],
  ];

  return (
    <div className="bg-maroon/20 p-5 backdrop-blur-lg">
      <div className="grid grid-cols-2 items-start gap-5 lg:grid-cols-4">
        <div className="flex items-center gap-4">
          <img className="size-14 mix-blend-lighten" src={Logo.src} alt="" />
          <div className="text-end leading-5">
            <h1 className="text-lg font-medium">Personal AI Educator</h1>
            <h2>Learn Your Way</h2>
          </div>
        </div>
        {links.map((item, i) => {
          return (
            <div key={i} className="space-y-2">
              {item.map((link, j) => {
                return (
                  <a
                    className="block cursor-pointer text-slate-300 hover:text-white"
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
