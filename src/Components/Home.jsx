import React from "react";
import handyman from "./img/handyman.jpeg";

function Home() {
  return (
    <div className="container">
      <h2 className="border-bottom pb-1 mb-2 mt-5 ">CONSTRUCTION SERVICES</h2>
      <h2>BAUDIENSTLEISTUNGEN</h2>
      <div className="row mx-auto">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={handyman} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Painting & Wallpapering</h5>
                <p className="card-text">Malerarbeiten & Tapezier</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={handyman} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Drywall</h5>
                <p className="card-text">Trockenbau</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={handyman} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Plastering</h5>
                <p className="card-text">Putzarbeiten</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={handyman} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Paving</h5>
                <p className="card-text">Pflasterarbeiten</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={handyman} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Demolition & Gutting</h5>
                <p className="card-text">Abriss & Entkernung</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={handyman} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Renovation & Refurbishment</h5>
                <p className="card-text">Renovierung & Sanierung</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={handyman} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Parquet & floor layers</h5>
                <p className="card-text">Parkett & Bodenleger</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={handyman} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tiles</h5>
                <p className="card-text">Fliesen</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="border-bottom pb-1 mb-2 mt-5 ">BUILDING CLEANING</h2>
      <h3>GEBÄUDEREINIGUNG</h3>
      <div className="row mx-auto">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={handyman} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Houses cleaning</h5>
                <p className="card-text">Häuser reinigung</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={handyman} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Offices cleaning</h5>
                <p className="card-text">Büroreinigung</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={handyman} className="card-img-top" alt="..." />
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
