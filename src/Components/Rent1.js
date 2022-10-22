import React from "react";
import { Button } from "@mui/material";
import "../Styles/Rent.css";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import StraightenIcon from "@mui/icons-material/Straighten";
import { Link } from "react-router-dom";

export default function Rent1() {
  return (
    <div>
      <div className="Data shadow-2xl">
        <img
          src="https://i.ibb.co/zmfw98X/4eb2a571-af9f-4646-96c5-83923a60052f-3.jpg"
          alt="data"
        />
        <div>
          <h1>5000 BDT </h1>
          <br />
          <span id="location">Cumilla,Police line</span> <br />
          <span id="tag">For rental purpose nice 650 sq ft flat</span>
          <br />
          <span id="bed">
            <BedIcon /> 2
          </span>
          <span id="wash">
            <BathtubIcon /> 3
          </span>
          <span id="size">
            <StraightenIcon /> 1039
          </span>{" "}
          <br />
          <span id="owner">Owner:Gold silver homes</span>
          <br />
          <Button variant="contained">
            {" "}
            <Link to="Rent1">View</Link>
          </Button>
          <Button variant="contained">
            <Link to="Sell">Email</Link>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
