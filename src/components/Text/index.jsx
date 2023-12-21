import React from "react";

const sizeClasses = {
  txtInterRegular20: "font-inter font-normal",
  txtInterBold28: "font-bold font-inter",
  txtInterMedium14IndigoA200: "font-inter font-medium",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold24: "font-bold font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
