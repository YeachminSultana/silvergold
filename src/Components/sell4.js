import React from "react";
import { Button } from "@mui/material";
import "../Styles/Rent.css";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import StraightenIcon from "@mui/icons-material/Straighten";
import { Link } from "react-router-dom";

export default function Sell1() {
  return (
    <div>
      <div className="Data shadow-2xl">
        <img
          src="https://i.ibb.co/tMBKx2q/67bb5027-3f9b-44f9-bf54-bf51ad57b5df.jpg"
          alt="67bb5027-3f9b-44f9-bf54-bf51ad57b5df"
          border="0"/>
        <div>
          <h1>45000 BDT </h1>
          <br />
          <span id="location">Cumilla,kandirpar</span> <br />
          <span id="tag">For Sell 7830 sq ft flat</span>
          <br />
          <span id="bed">
            <BedIcon /> 2
          </span>
          <span id="wash">
            <BathtubIcon /> 4
          </span>
          <span id="size">
            <StraightenIcon /> 2339
          </span>{" "}
          <br />
          <span id="owner">Owner:Gold silver homes</span>
          <br />
          <Button variant="contained"><Link to="Sellv4">View</Link></Button>
          <Button variant="contained">
            <Link to="Sell">Email</Link>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
