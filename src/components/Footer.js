import React from "react";
import "../css/footer.css";
import GhLogo from "../assets/icons/github.svg"
import LiLogo from "../assets/icons/linkedin.svg"
import Dribble from "../assets/icons/dribbble.svg"

function Footer() {
  return (
    <>
      <footer>
        <div className="social-icons">
          <a href="https://github.com/OlofEnar">
            <img src={GhLogo} />
          </a>
          <a href="linkedin.com">
            <img src={LiLogo} />
          </a>
          <a href="https://dribbble.com/OlofNordin">
            <img src={Dribble} />
          </a>
        </div>
        <p>© Olof Maleki Nordin</p>
      </footer>
    </>
  );
}

export default Footer;
