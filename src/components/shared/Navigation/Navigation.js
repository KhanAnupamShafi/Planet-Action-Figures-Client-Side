import {
  AccountCircleTwoTone,
  CloseTwoTone,
  MenuTwoTone,
} from "@mui/icons-material";
import { Avatar, Chip, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/Logo/logo.png";
import MuiButton from "../../StyledComponent/MuiButton";
import "./Navigation.css";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { user, logOut } = useAuth();

  return (
    <>
      <nav id="back-to-top-anchor" className="navbar">
        <Link to="/" onClick={closeMobileMenu}>
          <img className="logo" src={logo} alt="" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <CloseTwoTone fontSize="large" />
          ) : (
            <MenuTwoTone fontSize="large" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/home"
              activeStyle={{
                color: "#81206d",
                backgroundColor: "#e4bfe7",
                borderRadius: "6px",
              }}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <Divider orientation="vertical" flexItem />
          <li className="nav-item">
            <NavLink
              to="/explore"
              activeStyle={{
                color: "#81206d",
                backgroundColor: "#e4bfe7",
                borderRadius: "6px",
              }}
              className="nav-links"
            >
              Explore All Products
            </NavLink>

            {/* {dropdown && <Dropdown />} */}
          </li>
          <Divider orientation="vertical" flexItem />

          {!user?.email ? (
            <li className="nav-item">
              <Link to="/login" onClick={closeMobileMenu}>
                <MuiButton
                  sx={{
                    backgroundImage: `linear-gradient(130deg, #846ff4,#a200a6 50%, #846ff4)`,
                  }}
                >
                  Sign In
                </MuiButton>
              </Link>
            </li>
          ) : (
            <React.Fragment>
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    color: "#81206d",
                    backgroundColor: "#e4bfe7",
                    borderRadius: "6px",
                  }}
                  to="/dashboard"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <Typography sx={{ color: "#1f5f5f" }}>Hello</Typography>
                <Chip
                  label={user?.displayName}
                  color="primary"
                  sx={{ mx: 2 }}
                  avatar={
                    <Avatar
                      sx={{
                        color: "error.dark",
                        bgcolor: "warning.dark",
                      }}
                    >
                      <AccountCircleTwoTone />
                    </Avatar>
                  }
                />

                <MuiButton
                  sx={{
                    backgroundImage: `linear-gradient(130deg, #846ff4,#4E004A 50%, #846ff4)`,
                    width: "150px",
                  }}
                  onClick={logOut}
                >
                  Log Out
                </MuiButton>
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
