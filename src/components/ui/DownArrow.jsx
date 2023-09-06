import React from "react";

const DownArrow = ({ linkTarget }) => {
  return (
    <a href={linkTarget} class="down-arrow">
      <i class="fa-solid fa-chevron-down"></i>
    </a>
  );
};

export default DownArrow;
