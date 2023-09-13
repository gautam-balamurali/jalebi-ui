import "./Text.css";

export const Text = ({
  rows,
  cols,
  placeholder,
  variant,
  isDisabled,
  isRequired,
}) => {
  return (
    <div>
      <textarea
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        className={`textarea ${variant}-textarea`}
        disabled={isDisabled}
        required={isRequired}
      ></textarea>
    </div>
  );
};

Text.defaultProps = {
  rows: 4,
  cols: 50,
  placeholder: "Enter some text",
  variant: "basic",
  isDisabled: false,
  isRequired: false,
};
