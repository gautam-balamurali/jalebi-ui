/* eslint-disable */

import "./Home.css";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Button } from "../button/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-title">🎨Jalebi-UI🖌️</div>
      <p className="home-line">
        Make Custom <span className="home-react">React</span> Components{" "}
        <br />
        in seconds!
      </p>
      <div class="home-buttons">
        <span className="home-button-I">
          <Button
            rightIcon={<FiArrowRight />}
            onClickHandler={() => navigate("/docs")}
            text="Get Started"
            variant="secondary"
            color="#a52020"
            borderColor="#a52020"
          />
        </span>
        <a href="https://github.com/gautam-balamurali/jalebi-ui">
          <Button
            leftIcon={<FaGithub />}
            text="Github"
            variant="primary"
            background="white"
            color="#20a546"
            borderColor="#a52020"
          />
        </a>
      </div>
    </div>
  );
}
