"use client";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { setCount } from "@/lib/slice";
// import { RootState } from "@/lib/store";
import Landing from "@/components/Landing";
import { useState, useEffect } from "react";
import AboutPage from "@/components/AboutPage";
import Work from "@/components/Works";


const Page2: React.FC = () => (
  <div className="h-screen flex items-center justify-center bg-green-500">
    <h1 className="text-white text-5xl">Page 2</h1>
  </div>
);

export default function Home() {
  const [pageNo, setPageNo] = useState(0);
  function handleScroll(e:any) {
    setPageNo(pageNo + 1);
  }

  return (
    <div className="w-screen h-screen overflow-y-scroll bg-slate-900 overflow-hidden text-white" onScroll={handleScroll}>
<Landing />
      <AboutPage />
    </div>
  );
}
