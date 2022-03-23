import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      Copyright &copy; 2020 - {new Date().getFullYear()} | All Rights Reserved
      By Confession Inc.
    </div>
  );
};

export default Footer;
