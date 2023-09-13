import "./Button.css";

export const Button = ({
  text,
  variant,
  size,
  colorScheme,
  isDisabled,
  leftIcon,
  rightIcon,
  borderRadius,
  onClickHandler,
  ...rest
}) => {
  return (
    <>
      <button
        onClick={onClickHandler}
        style={{ ...rest }}
        disabled={isDisabled}
        className={`button ${variant}-button${colorScheme} ${size}-button ${borderRadius}-button`}
      >
        <span className="icon-button">
          {leftIcon} {text !== "" && <span>{text}</span>}
          {rightIcon !== "" && <span>{rightIcon}</span>}
        </span>
      </button>
    </>
  );
};

Button.defaultProps = {
  text: "",
  variant: "primary",
  size: "md",
  colorScheme: "",
  isDisabled: false,
  borderRadius: "b1",
  leftIcon: "",
  rightIcon: "",
};
