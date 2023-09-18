import React from "react";

const Wrapper = ({ children, style }) => {
  return (
    <div className={`max-w-lg md:max-w-4xl xl:max-w-7xl mx-auto ${style}`}>
      {children}
    </div>
  );
};

export default Wrapper;
