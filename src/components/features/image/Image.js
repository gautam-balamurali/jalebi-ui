import "./Image.css";
import { useState } from "react";

export const Image = ({ src, alt, size, borderSize, fallBackSrc }) => {
  const [fallback, setFallback] = useState(false);
  const handleFallback = () => {
    setFallback(true);
  };
  return (
    <div>
      <img
        onError={handleFallback}
        src={fallback ? fallBackSrc : src}
        alt={alt}
        className={`${size}-image ${borderSize}-image`}
      />
    </div>
  );
};
Image.defaultProps = {
  src: "cd",
  alt: "image",
  size: "md",
  borderSize: "b1",
  fallBackSrc: ""
};
