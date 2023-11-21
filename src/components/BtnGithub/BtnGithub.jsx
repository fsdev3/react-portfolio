import React from "react";
import githubIcon from "./../../img/icons/gitHub-black.svg";
import "./BtnGithub.css";

const BtnGithub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={githubIcon} alt="Go to my Github" />
      GitHub repo
    </a>
  );
};

export default BtnGithub;
