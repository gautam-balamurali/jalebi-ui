/* eslint-disable */

import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FaBars } from "react-icons/fa";
export const Header = ({ showSidebar, setShowSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className="page-header">
      <div className="header">
        <div className="icon-name">
          <h1 className="jalebi-ui-heading">🎨Jalebi-UI🖌️</h1>
        </div>

        <div className="header-nav">
          <p onClick={() => navigate("/")}>Home</p>
          {/* <p onClick={() => navigate("/docs")}>Documentation</p> */}
          <a
            className="git-link"
            href="https://github.com/gautam-balamurali/jalebi-ui"
          >
            GitHub
          </a>
          <span
            onClick={() => setShowSidebar(!showSidebar)}
            className="open-sidebar-icon"
          >
            <FaBars />
          </span>
        </div>
      </div>
    </div>
  );
};
