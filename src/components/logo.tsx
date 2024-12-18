import whiteLogo from "@/assets/whiteLogo.png";
import blackLogo from "@/assets/blackLogo 2.png";
import { useTheme } from "next-themes";
import second from '@/components/header/swtich'

function Logo({ black }: { black?: boolean }) {
  const isBlack: boolean = black !== undefined && black === true;
  const { theme } = useTheme();

  return (
    <div className="flex flex-wrap items-center">
      <img
        className="size-14 object-cover "
        src={
          isBlack
            ? blackLogo.src
            : theme === "dark"
              ? whiteLogo.src
              : blackLogo.src
        }
        alt=""
      />
      <div className="leading-3 ">
        <h1 className="text-lg font-medium">Personal AI Educator</h1>
        <p>Learn Your Way</p>
      </div>      
    </div>
  );
}

export default Logo;
