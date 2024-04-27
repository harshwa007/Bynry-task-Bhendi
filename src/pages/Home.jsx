
import React from "react";
import Button from "../components/Button";
import Vector1 from "../assets/Vector/1.png";
import Vector2 from "../assets/Vector/2.png";
import Vector3 from "../assets/Vector/3.png";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section id="home">
      <img src={Vector1} alt="Vector1" className="Vector1" />
      <div className="container-fluid px-0">
        <div className="container">
          <div className="row mt-lg-4">
            <div className="col-lg-8 col-md-12">
              <h1 className="primary-text" style={{ marginTop: "3rem" }}>
              Where maps meet memories: A social site that brings people together.
              </h1>
              <h3
                className="para-1 d-flex justify-content-center align-items-center"
                style={{ marginTop: "1rem", lineHeight: "1.3rem" }}
              >
                Bhendi is a social networking site that harnesses the power of location-based services, utilizing Geolocation technology and Global Positioning System (GPS) to connect users and provide tailored experiences. By integrating maps and geolocation features, your platform enables users to identify their location, share it with others, and measure distances to nearby points of interest.
              </h3>
              <Link to="/Bhendi">
                <Button label="Start" c="main-btn" type="start" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center Graphics-1">
              <img
                src="https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
                
               alt="Graphical-1"
                height="480px"
                style={{borderRadius: '1rem'}}
              />
            </div>
          </div>

          <img src={Vector3} alt="Vector3" className="Vector3" />
          <img src={Vector2} alt="Vector2" className="Vector2" />

        </div>
      </div>
    </section>
  );
}
