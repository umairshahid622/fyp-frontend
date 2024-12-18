import { motion } from "framer-motion";

function MenuButton({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const lineVariants = {
    openTop: {
      rotate: 45,
      backgroundColor: "#D9D9D9",
    },
    openMiddle: {
      opacity: 0,
      backgroundColor: "#D9D9D9",
      x: 20,
    },
    openBottom: {
      rotate: -45,
      backgroundColor: "#D9D9D9",
    },
    closedTop: {
      rotate: 0,
      y: 0,
      backgroundColor: "#352626",
    },
    closedMiddle: {
      opacity: 1,
      y: 0,
      backgroundColor: "#352626",
    },
    closedBottom: {
      rotate: 0,
      y: 0,
      backgroundColor: "#352626",
    },
  };

  const buttonVariants = {
    open: { borderColor: "#D9D9D9" },
    closed: { borderColor: "#352626" },
  };

  return (
    <motion.button
      onClick={() => setActive((prev) => !prev)}
      className={`relative z-20 h-9 w-9 rounded-full border-2 px-1.5`}
      animate={active ? "open" : "closed"}
      variants={buttonVariants}
      style={{
        borderStyle: "solid",
      }}
    >
      <div className=" h-full w-full relative ">
        <motion.span
          style={{
            left: "50%",
            top: active ? "50%" : "35%",
            x: "-50%",
            y: "-50%",
          }}
          animate={active ? "openTop" : "closedTop"}
          variants={lineVariants}
          className="absolute h-0.5 w-full"
        />
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          animate={active ? "openMiddle" : "closedMiddle"}
          variants={lineVariants}
          className="absolute h-0.5 w-full"
        />
        <motion.span
          style={{
            left: "50%",
            top: active ? "50%" : "65%",
            x: "-50%",
            y: "-50%",
          }}
          animate={active ? "openBottom" : "closedBottom"}
          variants={lineVariants}
          className="absolute h-0.5 w-full"
        />
      </div>
    </motion.button>
  );
}

export default MenuButton;
