import React, { useEffect, useState } from "react";
import MainLayout from "./layout/MainLayout";
import GhLogo from "./assets/icons/github.svg"
import LiLogo from "./assets/icons/linkedin.svg"
import Dribble from "./assets/icons/dribbble.svg"

function Home() {
  const [typedChars, setTypedChars] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      setTypedChars((prev) => prev + key); // Add the pressed key to typedChars
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (typedChars.endsWith("42")) {
      alert("DON'T PANIC!");
      setTypedChars(""); // Reset typedChars
    }
  }, [typedChars]);

  return (
    <MainLayout>
      <>
        <div className="hero">
          <h1>
            Hej. Jag är <br />
            Olof Maleki Nordin
          </h1>
          <p>Ännu en norrlänning som lär sig att programmera.</p>
          <div className="social-icons">
            <a href="https://github.com/OlofEnar">
              <img src={GhLogo} alt="Github" />
            </a>
            <a href="linkedin.com">
              <img src={LiLogo} alt="Linkedin" />
            </a>
            <a href="https://dribbble.com/OlofNordin">
              <img src={Dribble} alt="Dribbble" />
            </a>
          </div>
        </div>
      </>
    </MainLayout>
  );
}

export default Home;
