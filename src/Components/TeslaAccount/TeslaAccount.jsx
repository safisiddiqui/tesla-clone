import React from "react";
import "../TeslaAccount/TeslaAccount.styles.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import Car from "../Car/Car";
import { auth } from "../../firebase/firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const TeslaAccount = ({ isMenuOpen, setIsMenuOpen }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="teslaAccount">
      <div className="teslaAccount__header">
        <div className="teslaAccount__logo">
          <Link to="/teslaaccount">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="teslaAccount__links">
          <Link to="/teslaaccount">Model S</Link>
          <Link to="/teslaaccount">Model 3</Link>
          <Link to="/teslaaccount">Model X</Link>
          <Link to="/teslaaccount">Model Y</Link>
          <Link to="/teslaaccount">Solar Roof</Link>
          <Link to="/teslaaccount">Solar Panels</Link>
          <Link to="/teslaaccount">Shop</Link>
          <Link to="/teslaaccount">Account</Link>
          <Link onClick={handleLogoutOfApp} to="/teslaaccount">
            Log out
          </Link>
          <div className="teslAccount__menu" onClick={handleMenu}>
            {isMenuOpen ? (
              <CloseIcon className="teslaAccount__closeMenu" />
            ) : (
              <MenuIcon />
            )}
          </div>
        </div>
      </div>
      <div className="teslaAccount__info">
        <div className="teslaAccount__person">
          <h4>{user?.displayName + "'s"} Tesla</h4>
        </div>

        <div className="teslaAccount__infoRight">
          <Link>Home</Link>
          <Link>Account</Link>
          <Link>History</Link>
          <Link onClick={handleLogoutOfApp}>Sign out</Link>
        </div>
      </div>
      <div className="teslaAccount__car">
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="model s"
          testDrive
        />
        <Car
          imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="model x"
        />
      </div>
    </div>
  );
};

export default TeslaAccount;
