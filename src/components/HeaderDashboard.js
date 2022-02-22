import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTranslation } from "react-i18next";
import "../translations/i18n"

const HeaderDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const { t } = useTranslation();
  return (
    <div>
      <div className="navbar-custom">
        <nav className="navbar-custom navbar navbar-expand-sm navbar-light ">
    
          <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarsExample11">
              <ul className="navbar-nav">
                <li></li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">{t("home")}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{t("discover")}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{t("donate")}</a>
                </li>
              </ul>
            </div>
          </div>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}
          />
        </nav>
      </div>
    </div>
  )
}

export default HeaderDashboard