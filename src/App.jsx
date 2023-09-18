import { useEffect, useState } from "react";
import "./App.css";
import NavBarComponent from "../Components/NavBarComponent";
import LandingPageComponent from "../Components/LandingPageComponent";
import FooterComponent from "../Components/FooterComponent";
import SportsComponent from "../Components/SportsComponent";
import OldSportComponent from "../Components/OldSportComponents";
import MuscleCarComponents from "../Components/MuscleCarComponents";
import { Route, Routes } from "react-router-dom";

function App() {
  const [view, setView] = useState({});
  const [preView, setPreView] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [wishlistPreView, setWishlistPreView] = useState(false);

  const sportsArr = [
    {
      country: "../images/germany.png",
      brand: "BMW",
      model: "M5 CS",
      image: "../images/sports/bmw.png",
      engine: "4.4L",
      power: "627hp",
      torque: "750NM",
      weight: "1825kg",
      topSpeed: "333kph",
      acceleration: "3",
    },
    {
      country: "../images/germany.png",
      brand: "mercedes",
      model: "amg gt 63s",
      image: "../images/sports/mercedes.png",
      engine: "4.0L",
      power: "650hp",
      torque: "900NM",
      weight: "2120kg",
      topSpeed: "315kph",
      acceleration: "3.2",
    },
    {
      country: "../images/germany.png",
      brand: "audi",
      model: "rs7",
      image: "../images/sports/audi.png",
      engine: "4.0L",
      power: "550hp",
      torque: "6700NM",
      weight: "2040kg",
      topSpeed: "380kph",
      acceleration: "3.9",
    },
    {
      country: "../images/germany.png",
      brand: "porsche",
      model: "turbo s",
      image: "../images/sports/porsche.png",
      engine: "4.0L",
      power: "650hp",
      torque: "800NM",
      weight: "1733kg",
      topSpeed: "330kph",
      acceleration: "2.7",
    },
    {
      country: "../images/england.png",
      brand: "mclaren",
      model: "765Lt spider",
      image: "../images/sports/mclaren.png",
      engine: "4.0L",
      power: "755hp",
      torque: "800NM",
      weight: "1388kg",
      topSpeed: "330kph",
      acceleration: "2.4",
    },
  ];
  const oldSportArr = [
    {
      country: "../images/germany.png",
      brand: "alpina",
      model: "b8 4.6",
      image: "../images/vintage/alpina.png",
      engine: "4.8L",
      power: "337hp",
      torque: "469NM",
      weight: "1500kg",
      topSpeed: "280kph",
      acceleration: "5.5",
    },
    {
      country: "../images/germany.png",
      brand: "audi",
      model: "s8",
      image: "../images/vintage/audis8.png",
      engine: "4.2L",
      power: "330hp",
      torque: "410NM",
      weight: "1940kg",
      topSpeed: "249kph",
      acceleration: "5.8",
    },
    {
      country: "../images/germany.png",
      brand: "mercedes",
      model: "sl 60 amg",
      image: "../images/vintage/mercedes.png",
      engine: "6.0L",
      power: "369hp",
      torque: "349NM",
      weight: "1830kg",
      topSpeed: "369kph",
      acceleration: "5.4",
    },
    {
      country: "../images/germany.png",
      brand: "bmw",
      model: "m3 (e36)",
      image: "../images/vintage/bmwm3.png",
      engine: "3.2L",
      power: "311hp",
      torque: "349NM",
      weight: "1420kg",
      topSpeed: "369kph",
      acceleration: "5.5",
    },
    {
      country: "../images/us.png",
      brand: "ford",
      model: "escort rs cosworth",
      image: "../images/vintage/ford.png",
      engine: "2.0L",
      power: "220hp",
      torque: "303NM",
      weight: "1310kg",
      topSpeed: "231kph",
      acceleration: "5.7",
    },
  ];
  const muscleArr = [
    {
      country: "../images/us.png",
      brand: "dodge",
      model: "hellcat",
      image: "../images/muscle/dodgehellcat.png",
      engine: "6.2L",
      power: "797hp",
      torque: "958NM",
      weight: "2003kg",
      topSpeed: "327kph",
      acceleration: "7.1",
    },
    {
      country: "../images/us.png",
      brand: "chevrolet ",
      model: "camaro",
      image: "../images/muscle/camaro.png",
      engine: "6.2L",
      power: "335hp",
      torque: "616NM",
      weight: "1645kg",
      topSpeed: "313kph",
      acceleration: "4.6",
    },
    {
      country: "../images/us.png",
      brand: "dodge",
      model: "charger",
      image: "../images/muscle/dodgecharger.png",
      engine: "6.2L",
      power: "797hp",
      torque: "958NM",
      weight: "2003kg",
      topSpeed: "327kph",
      acceleration: "7.1",
    },
    {
      country: "../images/us.png",
      brand: "ford",
      model: "mustang gt",
      image: "../images/muscle/mustang.png",
      engine: "3.2L",
      power: "460hp",
      torque: "569NM",
      weight: "1743kg",
      topSpeed: "250kph",
      acceleration: "4.3",
    },
    {
      country: "../images/us.png",
      brand: "Equus ",
      model: "bass 770",
      image: "../images/muscle/equus.png",
      engine: "6.2L",
      power: "640hp",
      torque: "820NM",
      weight: "1651kg",
      topSpeed: "322kph",
      acceleration: "3.4",
    },
  ];

  function addWishlist(selected) {
    if (!wishlist.some((item) => item.view === view)) {
      setWishlist([
        ...wishlist,
        {
          view,
        },
      ]);
    } else {
      alert("The car you're trying to add in your wishlist is already in");
    }
  }

  function removeOnWishList(selected) {
    const newWishList = wishlist.filter((item) => item !== selected);
    setWishlist(newWishList);
  }

  function selects(selected) {
    setView({
      country: selected.country,
      brand: selected.brand,
      model: selected.model,
      image: selected.image,
      engine: selected.engine,
      power: selected.power,
      torque: selected.torque,
      weight: selected.weight,
      topSpeed: selected.topSpeed,
      acceleration: selected.acceleration,
    });
    setPreView(true);
  }

  function close() {
    setPreView(false);
  }

  return (
    <>
      <NavBarComponent
        setWishlistPreView={setWishlistPreView}
        wishlistPreView={wishlistPreView}
        wishlist={wishlist}
        removeOnWishList={removeOnWishList}
      />

      <Routes>
        <Route path="/" element={<LandingPageComponent />}></Route>
        <Route
          path="/SportsComponent"
          element={
            <SportsComponent
              sportsArr={sportsArr}
              selects={selects}
              preView={preView}
              view={view}
              close={close}
              addWishlist={addWishlist}
            />
          }
        ></Route>
        <Route
          path="/MuscleCarComponents"
          element={
            <MuscleCarComponents
              muscleArr={muscleArr}
              selects={selects}
              preView={preView}
              view={view}
              close={close}
              addWishlist={addWishlist}
            />
          }
        ></Route>
        <Route
          path="/OldSportComponent"
          OldSportComponent
          element={
            <OldSportComponent
              oldSportArr={oldSportArr}
              selects={selects}
              preView={preView}
              view={view}
              close={close}
              addWishlist={addWishlist}
            />
          }
        ></Route>
      </Routes>

      <FooterComponent />
    </>
  );
}

export default App;
