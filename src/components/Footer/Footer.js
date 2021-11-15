import {
  AddLocationAlt,
  Email,
  Facebook,
  GitHub,
  LinkedIn,
  PhoneAndroid,
  Twitter,
} from "@mui/icons-material";
import { Avatar, CardHeader, TextField, Typography } from "@mui/material";
import { deepOrange, grey } from "@mui/material/colors";
import React from "react";
import "./Footer.css";
import logo from "../../images/Logo/logo.png";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <img width={86} src={logo} alt="" />
        <Typography variant="h6" color="warning.light">
          Planet<span>ActionFigures</span>
        </Typography>
        <p className="footer-links">
          <a href="/" className="link-1">
            Home
          </a>

          <a href="/">Gallery</a>

          <a href="/">Explore</a>

          <a href="/">Reviews</a>

          <a href="/">Faq</a>
        </p>
        <TextField
          id="standard-basic"
          label="Subscribe"
          color="info"
          focused
          variant="standard"
        />
        <p className="footer-company-name">
          Newsletters, Personalized Offers, and More
        </p>
      </div>

      <div className="footer-center">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: deepOrange[500] }} aria-label="recipe">
              <AddLocationAlt color="warning" />
            </Avatar>
          }
          title={
            <p>
              <span>113 #Airport Street</span> Kawlar, Uttara, Dhaka
            </p>
          }
        />

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: deepOrange[500] }} aria-label="recipe">
              <PhoneAndroid color="warning" />
            </Avatar>
          }
          title={
            <p>
              <span>+8801234567</span>
            </p>
          }
        />

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: deepOrange[500] }} aria-label="recipe">
              <Email color="warning" />
            </Avatar>
          }
          title={
            <p>
              <a href="mailto:deep71.bd@company.com">deep71.bd@company.com</a>
            </p>
          }
        />
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Product specifications, prices, ship dates, and availability are
          subject to change without notice. Copyright 1996-2021 Planet Action ,
          Inc. All Rights Reserved.
        </p>

        <div className="footer-icons">
          <a href="/">
            <Avatar
              component="span"
              sx={{ bgcolor: grey[500] }}
              variant="rounded"
            >
              <Facebook />
            </Avatar>
          </a>
          <a href="/">
            <Avatar
              component="span"
              sx={{ bgcolor: grey[500] }}
              variant="rounded"
            >
              <Twitter />
            </Avatar>
          </a>
          <a href="/">
            <Avatar
              component="span"
              sx={{ bgcolor: grey[500] }}
              variant="rounded"
            >
              <LinkedIn />
            </Avatar>
          </a>
          <a href="/">
            <Avatar
              component="span"
              sx={{ bgcolor: grey[500] }}
              variant="rounded"
            >
              <GitHub />
            </Avatar>
          </a>
        </div>
      </div>
      <div className="footer-area-bottom">
        <Typography variant="caption">
          Product specifications, prices, ship dates, and availability are
          subject to change without notice. Copyright 1996-2021 Planet Action ,
          Inc. All Rights Reserved.
        </Typography>
        <Typography component="span">
          &copy; Copyright <strong>Khan Anupam Shafi</strong>. @2021
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
