import "./Badge.css";

export const Badge = ({ text, variant, size, colorScheme }) => {
  return (
    <>
      <span className={`${colorScheme}-badge-${variant} badge ${size}-badge`}>
        {text.toUpperCase()}
      </span>
    </>
  );
};
Badge.defaultProps = {
  text: "default",
  colorScheme: "default",
  size: "sm",
  variant: "subtle"
};
