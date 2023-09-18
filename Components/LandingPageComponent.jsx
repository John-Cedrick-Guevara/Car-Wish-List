import React, { useState } from "react";
import { Link } from "react-router-dom";
import OldSportComponent from "./OldSportComponents";
import SportsComponent from "./SportsComponent";
import MuscleCarComponents from "./MuscleCarComponents";

const LandingPageComponent = () => {
  const bestsArr = [
    {
      name: "Mercedes Benz S Class",
      description:
        "There's no faulting the S-Class' engineering pedigree, and this translates into a hugely comfortable car to drive around town or on long trips. High-spec long-wheelbase models deliver plush driving comfort, with air-suspension cushioning the ride and soft seats with massage functions available in the back.",
      type: "Comfort Car",
      image: "../images/comfort-car.jpg",
      engine: "3.0L",
      power: "429Hp",
      torque: "700Nm",
      weight: "1980Kg",
      topSpeed: "402kph",
      acceleration: "5s",
    },
    {
      name: "Koenigsegg Jesko Absolut",
      description:
        "This, amazingly, isn't the final goal speed of the Koenigsegg Jesko Absolut. Christian reckons the car will do at least 330 and possibly up to 350 miles per hour, making it the fastest production car ever. We are talking about cruising speeds faster than some private luxury aircraft.",
      type: "Fastest Car",
      image: "../images/fastest-car.jpg",
      engine: "5.0L",
      power: "1262.49Hp",
      torque: "1000Nm",
      weight: "1390kg",
      topSpeed: "480kph",
      acceleration: "2.5s",
    },
    {
      name: "Lotus Evija",
      description:
        "The British car brand announced that the hypercar comes with four electric motors, which produce a combined output of 2,011 BHP and 1,703 Nm; making the Lotus Evija the most powerful production car in the world. This is higher than Lotus' originally promised figure of 1,973 BHP.",
      type: "Strongest Car ",
      image: "../images/strongest-car.jpg",
      engine: "1,500 kW",
      power: "1972hp",
      torque: "1,704Nm",
      weight: "1,680kg",
      topSpeed: "350kph",
      acceleration: "3s",
    },
  ];

  const [seeMore, setSeeMore] = useState(false);

  return (
    <main className="main-landing-page">
      <section className="main-page">
        <div className="banner-texts">
          <h3 className="banner-name">ONE OF THE RAREST CAR</h3>
          <h1 className="banner-model">Ferrari Testarossa Spider</h1>

          <p className="banner-description">
            One of the rarest car in the world, created in 1984, and turns to be
            the rarest car in the world with only one are officially made.
          </p>
        </div>

        <img className="banner-image" src="../images/banner.png" alt="asd" />
      </section>

      <section className="products">
        <div className="cathegories">
          <div className="sports">
            <img src="../images/porche-banner.png" alt="weqwe" />

            <h4>Sports</h4>

            <Link
              className="link"
              to="/SportsComponent"
              element={<SportsComponent />}
            >
              MORE
            </Link>
          </div>

          <div className="old-sport">
            <img src="../images/old-sport.png" alt="weqwe" />

            <h4>Old Sport</h4>

            <Link
              className="link"
              to="/OldSportComponent"
              element={<OldSportComponent />}
            >
              MORE
            </Link>
          </div>

          <div className="muscle">
            <img src="../images/muscle-car.png" alt="weqwe" />

            <h4>Muscle</h4>

            <Link
              className="link"
              to="/MuscleCarComponents"
              element={<MuscleCarComponents />}
            >
              MORE
            </Link>
          </div>
        </div>

        <div className="bests">
          {bestsArr.map((item, index) => (
            <div key={index} className={"best-container " + item.type}>
              <img src={item.image} alt="" />

              <div className="bests-text">
                <div className="basic-info">
                  <h1 className="best-type">{item.type}</h1>
                  <h1 className="best-name">{item.name}</h1>

                  <div className="infos">
                    <p className="best-description">
                      {item.description}{" "}
                      <span onClick={() => setSeeMore((prev) => !prev)}>
                        {seeMore ? "See More" : "See less"}
                      </span>
                    </p>

                    <div className="more-info">
                      <p>Engine: {item.engine} </p>
                      <p>Power: {item.power}</p>
                      <p>Torque: {item.torque}</p>
                      <p>Weight: {item.weight}</p>
                      <p>Top Speed: {item.topSpeed}</p>
                      <p>0-60: {item.acceleration}</p>
                    </div>
                  </div>
                </div>

                <div className="more-info"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LandingPageComponent;
