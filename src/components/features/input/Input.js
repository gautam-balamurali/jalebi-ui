import React from "react";
import "./Input.css";

export const Input = ({
  inputType,
  placeholder,
  variant,
  size,
  isDisabled,
  isRequired,
  onChange,
}) => {
  const handleInputChange = (event) => {
    // Call the provided onChange function with the new input value
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div>
      <input
        required={isRequired}
        disabled={isDisabled}
        className={`input ${variant}-input ${size}-input`}
        type={inputType}
        placeholder={placeholder}
        onChange={handleInputChange} // Attach the onChange event handler
      />
    </div>
  );
};

Input.defaultProps = {
  inputType: "text",
  placeholder: "Enter some text",
  variant: "basic",
  size: "sm",
  isDisabled: false,
  isRequired: false,
};
