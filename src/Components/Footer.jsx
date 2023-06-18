import React from 'react';
import haniscapeLogoMono from "./img/haniscape-logo-mono.svg";
import { Twitter, Instagram, Facebook } from 'react-bootstrap-icons';

function Footer() {
  return (




<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 m-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-5 mb-md-0 text-decoration-none lh-1">
      <img src={haniscapeLogoMono} alt="Haniscape logo" height="26" />
      </a>
      <span className="mb-3 mb-md-0 text-muted">©2023 Haniscape Solutions.</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="/#"><Twitter width="26" height="26" /></a></li>
      <li className="ms-3"><a className="text-muted" href="/#"><Instagram width="26" height="26" /></a></li>
      <li className="ms-3"><a className="text-muted" href="/#"><Facebook width="26" height="26" /></a></li>
    
    </ul>
  </footer>







  );
}

export default Footer;
