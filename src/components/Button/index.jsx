import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[12px]" };
const variants = {
  fill: {
    indigo_A200_99: "bg-indigo-A200_99 text-gray-50",
    gray_800: "bg-gray-800 text-gray-500",
    indigo_A200_66: "bg-indigo-A200_66 text-gray-50",
    gray_700: "bg-gray-700 text-white-A700",
  },
};
const sizes = { xs: "p-1.5", sm: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "indigo_A200_99",
    "gray_800",
    "indigo_A200_66",
    "gray_700",
  ]),
};

export { Button };
