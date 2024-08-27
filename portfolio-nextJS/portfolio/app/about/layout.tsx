"use client";

import NavButton from "@/components/NavButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-screen h-screen bg-slate-900 flex flex-col justify-center items-center overflow-y-auto">
      <div className="flex flex-row w-3/5 h-full">
        <div className="w-1/2 h-full mt-12 fixed">
          <NavButton text="About" />
          <NavButton text="Experience" />
          <NavButton text="Projects" />
        </div>
        <div className="w-1/2 h-full text-transparent"></div>
        <div className="w-1/2 bg-green-500 h-full mt-12 z-10">{children}</div>
      </div>
    </div>
  );
}
