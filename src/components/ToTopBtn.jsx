import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ToTopBtn = (props) => {
  const { handleToTop } = props;
  return (
    <>
      <div
        className="to-top-btn"
        onClick={handleToTop}
      >
        <FaArrowUp />
      </div>
    </>
  );
};

export default ToTopBtn;
