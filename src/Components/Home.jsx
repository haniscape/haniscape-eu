import React from "react";
import painter from "./img/painter.jpeg";
import parket from "./img/parket.jpeg";
import paving from "./img/paving.jpeg";
import plastering from "./img/plastering.jpeg";
import readywalls from "./img/readywalls.jpeg";
import renovation from "./img/renovation.jpeg";
import tiles from "./img/tiles.jpeg";
import demolition from "./img/demolition.jpeg";

function Home() {
  return (
    <div className="container">
      <div className="row mx-auto  p-1 mb-2 mt-5 ">
      <h2 className="border-bottom p-1 ">CONSTRUCTION SERVICES</h2>
      <h4>BAUDIENSTLEISTUNGEN</h4>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
          <div className="col">
            <div className="card h-100">
              <img src={painter} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Painting & Wallpapering</h5>
                <p className="card-text">Malerarbeiten & Tapezier</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={readywalls} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Drywall</h5>
                <p className="card-text">Trockenbau</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={plastering} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plastering</h5>
                <p className="card-text">Putzarbeiten</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={paving} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Paving</h5>
                <p className="card-text">Pflasterarbeiten</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={demolition} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Demolition & Gutting</h5>
                <p className="card-text">Abriss & Entkernung</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={renovation} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Renovation & Refurbishment</h5>
                <p className="card-text">Renovierung & Sanierung</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={parket} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Parquet & floor layers</h5>
                <p className="card-text">Parkett & Bodenleger</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={tiles} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tiles</h5>
                <p className="card-text">Fliesen</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-auto  pb-1 mb-2 mt-5">
      <h2 className="border-bottom">BUILDING CLEANING</h2>
      <h3>GEBÄUDEREINIGUNG</h3>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
          <div className="col">
            <div className="card h-100">
              <img src={painter} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Houses cleaning</h5>
                <p className="card-text">Häuser reinigung</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={painter} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Offices cleaning</h5>
                <p className="card-text">Büroreinigung</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={painter} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Glass cleaning </h5>
                <p className="card-text">Glasreinigung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
