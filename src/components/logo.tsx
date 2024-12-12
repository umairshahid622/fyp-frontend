import whiteLogo from "@/assets/whiteLogo.png";
import blackLogo from "@/assets/blackLogo 2.png";
import { useTheme } from "next-themes";

function Logo({ header }: { header?: boolean }) {
  const isHeader: boolean = header !== undefined && header === true;
  const { theme } = useTheme();

  return (
    <div className="flex flex-wrap items-center gap-0 lg:gap-4">
      <img
        className="size-14 object-cover"
        src={
          isHeader
            ? blackLogo.src
            : theme === "dark"
              ? whiteLogo.src
              : blackLogo.src
        }
        alt=""
      />
      <div className="text-end leading-3">
        <h1 className="text-lg font-medium">Personal AI Educator</h1>
        <p>Learn Your Way</p>
      </div>
    </div>
  );
}

export default Logo;
