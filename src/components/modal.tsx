import React, { useEffect, useState } from "react";

function Modal({ children }: { children?: React.ReactElement }) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    isOpen && (
      <div
        onClick={() => setIsOpen(false)}
        className="fixed z-50 w-full h-full top-0  bg-black bg-opacity-65 flex justify-center items-center py-8"
      >
        <div
          className="flex items-center justify-center max-w-[70vw] h-full max-h-[550px]"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
