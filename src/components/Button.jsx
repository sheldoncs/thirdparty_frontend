import React from "react";

const Button = ({
  colorStyle,
  label,
  disabled,
  clicked,
  width,
  height,
  margin,
}) => {
  return (
    <div>
      <button
        onClick={clicked}
        className={colorStyle}
        style={{
          border: "2px solid #fff",
          width: width + "px",
          height: height + "px",
          margin: margin + "px",
          borderRadius: "10px",
        }}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
