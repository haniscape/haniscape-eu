import React from "react";
import painter from "./img/painter.jpeg";
import parket from "./img/parket.jpeg";
import paving from "./img/paving.jpeg";
import plastering from "./img/plastering.jpeg";
import readywalls from "./img/readywalls.jpeg";
import renovation from "./img/renovation.jpeg";
import tiles from "./img/tiles.jpeg";
import demolition from "./img/demolition.jpeg";
import cleanglass from "./img/cleanglass.jpeg";
import cleanhouses from "./img/cleanhouses.jpeg";
import cleanoffice from "./img/cleanoffice.jpeg";

function Home() {
  return (
    <div className="container">
      <div className="row mx-auto  p-1 mb-2 mt-5 ">
      <h2 className="border-bottom p-1 ">BAUDIENSTLEISTUNGEN</h2>
      <h4>CONSTRUCTION SERVICES</h4>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
          <div className="col">
            <div className="card h-100">
              <img src={painter} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Malerarbeiten & Tapezier</h5>
                <p className="card-text">Painting & Wallpapering</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={readywalls} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Trockenbau</h5>
                <p className="card-text">Drywall</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={plastering} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Putzarbeiten</h5>
                <p className="card-text">Plastering</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={paving} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pflasterarbeiten</h5>
                <p className="card-text">Paving</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={demolition} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Abriss & Entkernung</h5>
                <p className="card-text">Demolition & Gutting</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={renovation} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Renovierung & Sanierung</h5>
                <p className="card-text">Renovation & Refurbishment</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={parket} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Parkett & Bodenleger</h5>
                <p className="card-text">Parquet & floor layers</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={tiles} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Fliesen</h5>
                <p className="card-text">Tiles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-auto  pb-1 mb-2 mt-5">
      <h2 className="border-bottom">GEBÄUDEREINIGUNG</h2>
      <h3>BUILDING CLEANING</h3>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
          <div className="col">
            <div className="card h-100">
              <img src={cleanhouses} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Häuser reinigung</h5>
                <p className="card-text">Houses cleaning</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={cleanoffice} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Büroreinigung</h5>
                <p className="card-text">Offices cleaning</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={cleanglass} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Glasreinigung</h5>
                <p className="card-text">Glass cleaning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
