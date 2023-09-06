import React from "react";

const UpArrow = ({ linkTarget }) => {
  return (
    <a href={linkTarget} class="up-arrow">
      <i class="fa-solid fa-chevron-up"></i>
    </a>
  );
};

export default UpArrow;
