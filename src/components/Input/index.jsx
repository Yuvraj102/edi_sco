import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    gray_500_33: "bg-gray-500_33 text-gray-50",
    gray_800: "bg-gray-800 text-gray-50",
    indigo_A200: "bg-indigo-A200 text-white-A700",
    blue_gray_900_33: "bg-blue_gray-900_33",
  },
};
const shapes = { square: "rounded-none", round: "rounded-[12px]" };
const sizes = {
  xs: "p-[9px]",
  sm: "pb-2 pt-3 px-2",
  md: "pb-[15px] pt-3.5 px-3.5",
  lg: "pb-3.5 pl-3 pr-3.5 pt-[17px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      size = "md",
      variant = "fill",
      color = "blue_gray_900_33",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "gray_500_33",
    "gray_800",
    "indigo_A200",
    "blue_gray_900_33",
  ]),
};

export { Input };
