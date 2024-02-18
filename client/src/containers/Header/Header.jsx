import React from "react";
import "./Header.scss";
import SectionWrap from "../../wrappers/SectionWrap";
import jason from "../../assets/jason.png";
import jason2 from "../../assets/jason2.png";
import jason3 from "../../assets/jason3.png";
import farba from "../../assets/farba.png";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <div className="app__header-info">
        <div className="info-title">Henryk Ladrowski</div>
        <span>Spawacz / Metalurg</span>
        <div className="info-desc">
          Jestem doświadczonym spawaczem i metalurgiem z solidnymi
          umiejętnościami w obszarze obróbki metali. Posiadam bogate
          doświadczenie w interpretacji rysunków technicznych, przygotowywaniu
          materiałów oraz wykonywaniu spawania różnymi metodami.
        </div>
        <div className="info-cta">
          <button>Moje Projekty</button>
          <div className="info-contact">
            <div className="email">
              <FiMail />
              ladrowski@email.com
            </div>
            <div className="phone">
              <FiPhone />
              +48 321 654 987
            </div>
          </div>
        </div>
      </div>
      <div className="app__header-profile">
        <img src={jason} alt="" className="profile-photo" />
        <img src={farba} alt="" className="profile-background" />
      </div>
    </div>
  );
};

export default SectionWrap(Header, "home");
