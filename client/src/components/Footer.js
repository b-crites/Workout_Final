import React from "react";
import "./CSS/Footer.css";
import {FaGithub} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="centerDiv footer-dark footer-row">
      <div className="footer-column">
        <button className="icon-btn"
          onClick={() => {
            window.open("https://github.com/b-crites");
          }}
          type="button"
        ><i> <FaGithub /></i></button>
      </div>
      <div className="footer-column">
        <button className="icon-btn"
          onClick={() => {
            window.open("https://github.com/CollectSpiders");
          }}
          type="button"
        ><i> <FaGithub /></i></button>
      </div>
      <div className="footer-column">
        <button className="icon-btn"
          onClick={() => {
            window.open("https://github.com/KevinJessie");
          }}
          type="button"
        ><i> <FaGithub /></i></button>
      </div>
      
    </footer>
  );
}
