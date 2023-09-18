import React from "react";
import { Link } from "react-router-dom";

const NavBarComponent = (props) => {
  return (
    <>
      <nav>
        <Link to="/" className="logo">
          carsight
        </Link>

        <ul className="nav-cathegories">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SportsComponent">Sport</Link>
          </li>
          <li>
            <Link to="/OldSportComponent">Old Sport</Link>
          </li>
          <li>
            <Link to="/MuscleCarComponents">Muscle</Link>
          </li>
        </ul>

        <div className="wishlist-container">
          <h1 className="wishlist-count">{props.wishlist.length}</h1>
          <img
            onClick={() => {
              props.setWishlistPreView((prev) => !prev);
            }}
            className="heart"
            src="../images/love.png"
            alt="asd"
          />
        </div>

      </nav>
      {props.wishlistPreView && (
        <div className="wishlist-list">
          {props.wishlist.length === 0 && <h1>Go add some car in your wish list</h1>}
          {props.wishlist.map((item) => (
            <div className="wish">
              <img className="wishlist-image" src={item.view.image} alt="" />

              <div>
                <h2 className="wishlist-brand">{item.view.brand}</h2>
                <h2 className="wishlist-model">{item.view.model}</h2>
              </div>

              <img
                onClick={() => {
                  props.removeOnWishList(item);
                }}
                className="remove"
                src="../images/close.png"
                alt=""
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NavBarComponent;
