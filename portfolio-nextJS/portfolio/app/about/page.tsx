"use client";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { setCount } from "@/lib/slice";
// import { RootState } from "@/lib/store";
import { useState, useEffect } from "react";
import Work from "@/components/Works";


export default function Home() {
  const [pageNo, setPageNo] = useState(0);
  function handleScroll(e:any) {
    setPageNo(pageNo + 1);
  }

  return (
    <div className="h-screen bg-slate-900 text-white" onScroll={handleScroll}>
      <Work />
    </div>
  );
}