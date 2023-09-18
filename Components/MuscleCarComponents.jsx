import React from 'react'
import NavBarComponent from './NavBarComponent';
import FooterComponent from './FooterComponent';

const MuscleCarComponents = (props) => {
  return (
    <>
      <main className="muscle-page">
        {props.preView && (
          <div className="preview-container">
            <img
              onClick={props.close}
              className="close"
              src="../images/close.png"
              alt=""
            />

            <img className="preview-image" src={props.view.image} alt="" />

            <div className="preview-details">
              <h3 className="preview-brand">{props.view.brand}</h3>
              <h1 className="preview-model">{props.view.model}</h1>

              <div className="preview-car-details">
                <p>Engine: {props.view.engine} </p>
                <p>Power: {props.view.power}</p>
                <p>Torque: {props.view.torque}</p>
                <p>Weight: {props.view.weight}</p>
                <p>Top Speed: {props.view.topSpeed}</p>
                <p>0-60: {props.view.acceleration}</p>
              </div>

              <div className="flag-button">
                <button onClick={props.addWishlist} className="wl-button">
                  Add to wishlist
                </button>
                <img className="flag" src={props.view.country} alt="" />
              </div>
            </div>
          </div>
        )}

        <div className="cars-container">
          {props.muscleArr.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                props.selects(item);
              }}
              className="card"
            >
              <h3 className="brand">{item.brand}</h3>
              <h1 className="model">{item.model}</h1>

              <img src={item.image} alt="" />

              <div className="car-details">
                <p>Engine: {item.engine} </p>
                <p>Power: {item.power}</p>
                <p>Torque: {item.torque}</p>
                <p>Weight: {item.weight}</p>
                <p>Top Speed: {item.topSpeed}</p>
                <p>0-60: {item.acceleration}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default MuscleCarComponents
