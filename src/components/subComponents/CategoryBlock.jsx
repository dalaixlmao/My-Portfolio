import React from "react";
import "./CategoryBlock.css";
function CategoryBlock({ component }) {
  return (
    <div className="categoryBlock">
      <div className="componentBox">
        <div className="component">{component}</div>
      </div>
    </div>
  );
}

export default CategoryBlock;
