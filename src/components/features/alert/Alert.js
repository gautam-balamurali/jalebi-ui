import "./Alert.css";
import { useState } from "react";
import { FcInfo } from "react-icons/fc";
import { MdError } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { MdWarning } from "react-icons/md";

export const Alert = ({ status, variant, title, text }) => {
  const [visible, setVisisble] = useState(true);
  return (
    <div
      style={{ display: visible ? "flex" : "none" }}
      className={`alert-box ${status}-alert-${variant}`}
    >
      {status === "success" && (
        <TiTick size={30} color={variant === "solid" ? "white" : "green"} />
      )}
      {status === "info" && (
        <FcInfo size={30} color={variant === "solid" ? "white" : "blue"} />
      )}
      {status === "warning" && (
        <MdWarning size={30} color={variant === "solid" ? "white" : "orange"} />
      )}
      {status === "error" && (
        <MdError size={30} color={variant === "solid" ? "white" : "red"} />
      )}
      <span className="alert-title">{title}</span>
      <p>{text}</p>
      <img
        style={{ color: "white" }}
        className="svg-icon-alert"
        onClick={() => setVisisble(false)}
        src={`https://img.icons8.com/metro/26/${
          variant === "solid" ? "ffffff" : "000000"
        }/multiply.png`}
        alt="icon"
      />
    </div>
  );
};
Alert.defaultProps = {
  status: "success",
  variant: "subtle",
  title: "Message Heading",
  text: "The task you performed has a notification!"
};
