import "./Avatar.css";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

export const Avatar = ({ src, name, size, bgColor, fallBackColor }) => {
  if (size === "") size = "md";
  if (bgColor === "") bgColor = "lightgreen";
  const [imageOrName, setImageOrName] = useState("image");
  const handleBrokenImages = () => {
    if (name === "") setImageOrName("Avatar");
    else setImageOrName("Alphabet");
  };
  return (
    <>
      {imageOrName === "image" && (
        <img
          className={`image-avatar ${size}-avatar`}
          onError={handleBrokenImages}
          src={src}
          alt="avatar"
        />
      )}
      {imageOrName === "Alphabet" && (
        <p
          style={{ backgroundColor: [bgColor] }}
          className={`alphabet-avatar ${size}-alpha-avatar`}
        >
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </p>
      )}
      {imageOrName === "Avatar" && (
        <FaUserCircle
          className={`default-avatar ${size}-avatar`}
          style={{ color: [fallBackColor] }}
        />
      )}
    </>
  );
};

Avatar.defaultProps = {
  src: "",
  name: "",
  size: "md",
  bgColor: "lightgreen",
  fallBackColor: "black"
};
