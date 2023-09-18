import React from "react";

const FooterComponent = () => {
  return (
    <footer>
      <div className="footer-div">
        <h1 className="footer-logo">carsight</h1>

        <ul className="footer-cathegories">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sport</a>
          </li>
          <li>
            <a href="#">JDM</a>
          </li>
          <li>
            <a href="#">Vintage</a>
          </li>
        </ul>
      </div>

      <div className="footer-div">
        <p className="about">
          Carsight is an all in one stop to fullfil your visions and somehow
          feeling like adding a car on your lists. I am John Cedrick Guevara
          developer of this website and also a car guy but not that smart when
          it comes to cars.
          <br />
          <br />
          <br />
          Copyright 2021. All Rights Reserved
        </p>

        <div className="socials">
          <img src="../images/icon-facebook.svg" alt="" />
          <img src="../images/icon-instagram.svg" alt="" />
          <img src="../images/icon-twitter.svg" alt="" />
          <img src="../images/icon-pinterest.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
