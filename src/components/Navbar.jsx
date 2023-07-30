import React, { useEffect, useState } from "react";

const Navbar = () => {
  const handleDownloadCV = () => {
    window.location.href =
      "https://drive.google.com/file/d/1aaFr9wV49F6fmeTUTZpIV5PmiyFPHp0-/view?usp=drive_link";
  };

  return (
    <header>
      <div className="titulo-container">
        <div className="titulo">Gerard B.</div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="cv">
        <h3 onClick={handleDownloadCV}>Descargar CV</h3>
      </div>
    </header>
  );
};

export default Navbar;
