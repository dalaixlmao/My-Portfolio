// CursorContext.js

import React, { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <CursorContext.Provider value={cursorPosition}>
      <div onMouseMove={handleMouseMove}>{children}</div>
    </CursorContext.Provider>
  );
};

export const useCursorPosition = () => {
  return useContext(CursorContext);
};
