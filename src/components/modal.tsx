import React, { useEffect, useState } from "react";
import Button from "./button";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Modal({
  children,
  isOpen,
  setIsOpen,
}: {
  children?: React.ReactElement;
  isOpen: boolean;
  setIsOpen: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      isLoginPage: boolean;
    }>
  >;
}) {
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
        onClick={() => setIsOpen({ isOpen: false, isLoginPage: false })}
        className="fixed z-50 w-full h-full top-0  bg-black bg-opacity-65 flex left-0 justify-center items-center py-8"
      >
        <div
          className="relative flex items-center justify-center min-w-72 min-h-28 max-w-[80vw] max-h-[650px] bg-white rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            handleClick={() => setIsOpen({ isOpen: false, isLoginPage: false })}
            className="text-red-500 absolute right-0 top-0 hover:bg-slate-200 h-8 w-8 p-1 origin-top-right rounded-lg"
          >
            <XMarkIcon />
          </Button>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
