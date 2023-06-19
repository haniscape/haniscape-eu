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
import faGhonaim from "./img/fa-ghonaim.jpeg";
import haGrob from "./img/ha-grob.jpeg";

function Home() {
  return (
    <div className="container">
      <div className="row mx-auto  p-1 mb-2 mt-5 ">
      <h2>Haniscape Solutions (Haniscape Import Export Est.)</h2>
      <h5>Egyptian Services provider with European quality, we provide solutions for the services industry with our robust quality solutions.</h5>
      </div>

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

      <div className="row mx-auto  pb-1 mb-2 mt-5">
        <h2 className="border-bottom">AUSGEWÄHLTE HANDWERKER</h2>
        <h3>FEATURED HANDYMEN</h3>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
          <div className="col">
            <div className="card h-100">
              <img src={faGhonaim} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Fa. Gonaim</h5>
                <p className="card-text">
                  Maler / Renovierung / Abbruch / Trockenbau
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={haGrob} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">H.A GROB</h5>
                <p className="card-text">Transport / Umzug / Kurier</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-auto  pb-1 mb-2 mt-5">
        <h2 className="border-bottom">KUNDENBERICHTE</h2>
        <h3>CLIENTS TESTIMONIALS</h3>





        <div id="carouselExampleIndicators" className="carousel slide py-5 bg-body-secondary">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <figure className="text-center">
          <blockquote className="blockquote">
            <p>Exzellenter und zuverlässiger Service; sehr professionell und pünktlich, wird Fa einstellen. Ghonaim bedient sicher wieder.</p>
          </blockquote>
          <figcaption className="blockquote-footer">
          Ein zufriedener Kunde im<cite title="Source Title"> Dienstleistungsportal haniscape.eu</cite>
          </figcaption>
        </figure>
    </div>
    <div className="carousel-item">
    <figure className="text-center">
          <blockquote className="blockquote">
            <p>Exzellenter und zuverlässiger Service; sehr professionell und pünktlich, wird Fa einstellen. Ghonaim bedient sicher wieder.</p>
          </blockquote>
          <figcaption className="blockquote-footer">
          Ein zufriedener Kunde im<cite title="Source Title"> Dienstleistungsportal haniscape.eu</cite>
          </figcaption>
        </figure>
    </div>
    <div className="carousel-item">
    <figure className="text-center">
          <blockquote className="blockquote">
            <p>Exzellenter und zuverlässiger Service; sehr professionell und pünktlich, wird Fa einstellen. Ghonaim bedient sicher wieder.</p>
          </blockquote>
          <figcaption className="blockquote-footer">
          Ein zufriedener Kunde im<cite title="Source Title"> Dienstleistungsportal haniscape.eu</cite>
          </figcaption>
        </figure>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



      </div>
    </div>
  );
}

export default Home;
