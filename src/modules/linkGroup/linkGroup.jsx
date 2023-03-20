import React from "react";

const LinkGroup = () => {
  return (
    <div className="link">
      <div className="linkGroup">
        <ul>
          <li className="title">Dev</li>
          <li>
            <a href="https://www.codecademy.com/learn/learn-git">
              <span className="linkText">Git & Github</span>
            </a>
          </li>
          <li>
            <a href="https://www.codecademy.com/learn/java-for-programmers">
              <span className="linkText">Java</span>
            </a>
          </li>
          <li>
            <a href="https://missing.csail.mit.edu">
              <span className="linkText">Missing CS semester</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="linkGroup">
        <ul>
          <li className="title">Social</li>
          <li>
            <a href="https://web.whatsapp.com/">
              <span className="linkText">Whatsapp</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <span className="linkText">Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://stackmail.com/">
              <span className="linkText">Webmail</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="linkGroup">
        <ul>
          <li className="title">Estudios</li>
          <li>
            <a href="https://sga.unemi.edu.ec/loginsga?ret=/">
              <span className="linkText">SGA</span>
            </a>
          </li>
          <li>
            <a href="https://pregradovirtual.unemi.edu.ec/my/">
              <span className="linkText">Pregrado</span>
            </a>
          </li>
          <li>
            <a href="https://unemi.notion.site/unemi/DashboardGrupito-0f8df1f1e7524d5480557d1ffe1da4d7">
              <span className="linkText">Calendario</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="linkGroup">
        <ul>
          <li className="title">Luces</li>
          <li>
            <a onclick="turnRed()" href="#">
              <span className="linkText">Rojo</span>
            </a>
          </li>
          <li>
            <a onclick="turnPurple()" href="#">
              <span className="linkText">Morado</span>
            </a>
          </li>
          <li>
            <a onclick="turnWhite()" href="#">
              <span className="linkText">Blanca</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LinkGroup;
