"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("set theme");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="flex min-w-screen min-h-screen text-white bg-white dark:bg-[#111111] overflow-hidden items-center justify-center bg-auto bg-no-repeat bg-center duration-300 transition-all">
      <div className="flex flex-col rounded-xl bg-white p-6 drop-shadow-2xl w-[1200px] dark:bg-[#141414]">
        <div className="flex items-center justify-center gap-x-20">
          {children}
          <div className="hidden lg:flex duration-300 w-2/5 h-[600px] bg-[url('/asset.png')] bg-no-repeat bg-center bg-contain">
            {/* <Image src={"/asset.png"} width={600} height={600} alt=""/> */}
          </div>
        </div>
      </div>
    </div>
  );
}
