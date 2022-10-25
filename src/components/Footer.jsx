import React from "react";

const Footer = () => {
  let date = new Date();
  let currentYear = date.getFullYear();

  return (
    <div>
      <footer>
        <p>Copyrights &copy; {currentYear}</p>
      </footer>
    </div>
  );
};

export default Footer;
