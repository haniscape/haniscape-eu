import React from "react";
import webApp from "./img/webapp.jpeg";
import mobileApp from "./img/mobileapp.jpeg";


function Home() {
  return (
    <div className="container">
      <div className="row mx-auto  p-1 mb-2 mt-5 ">
      <h2>Haniscape Solutions</h2>
      <h5>Web and Mobile Apps Development </h5>
      </div>

      <div className="row mx-auto  p-1 mb-2 mt-5 ">
        <h2 className="border-bottom p-1 ">BAUDIENSTLEISTUNGEN</h2>
        <h4>CONSTRUCTION SERVICES</h4>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
          <div className="col">
            <div className="card h-100">
              <img src={webApp} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Web Application</h5>
                <p className="card-text">Using latest React and Next technologies</p>
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
        </div>
      </div>


</div>



  );
}

export default Home;
