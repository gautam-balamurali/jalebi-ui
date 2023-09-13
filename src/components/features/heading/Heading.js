import "./Heading.css";

export const Heading = ({ level, text, variant }) => {
  const Tag = `h${level}`;

  return <Tag className={`heading ${variant}-heading`}>{text}</Tag>;
};

Heading.defaultProps = {
  level: 1, // Default to <h1> if level is not specified
  text: "Heading Text",
  variant: "default",
};
