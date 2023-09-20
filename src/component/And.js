import React from 'react';
import { Link } from 'react-router-dom'

const And = () => {
    return (
        <div className="overlay-container" style={{background: "#f55 url('./img/registration.jpg')" }}>
            <div className="overlay-text" style={{backgroundColor: "rgb(255, 255, 255, 0)" }}>
                <h3 className="overlay-title">Bạn muốn là chuyên gia An Ninh Mạng?</h3>
                <p className="overlay-content">
                Hãy đến với chúng tôi - Trường Cao đẳng An ninh mạng iSPACE!
                </p>
                <a className="overlay-title">
                  <a class="btn btn-outline-light btn-square mr-2" href="#"><i class="fab fa-twitter"></i></a>
                  <a class="btn btn-outline-light btn-square mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-outline-light btn-square mr-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                </a>
            </div>
        </div>
    );
  };
  export default And;