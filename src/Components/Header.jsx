import React from 'react';
import haniscapeLogoDark from "./img/haniscape-logo-dark.svg";

function Header() {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="/#">
            <img src={haniscapeLogoDark} alt="Haniscape logo" height="32" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Handymen
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Header;
