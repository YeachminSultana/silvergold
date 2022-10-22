import React from "react";
import { Button } from "@mui/material";
import "../Styles/Rent.css";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StraightenIcon from '@mui/icons-material/Straighten';
import { Link } from "react-router-dom";

export default function Rent1() {
  return (
    <div>
      <div className="Data shadow-2xl">
      <img src="https://i.ibb.co/NKjMhMN/3c9b201d-2030-47fc-815c-7b855d966a3d.jpg" alt="3c9b201d-2030-47fc-815c-7b855d966a3d" border="0"/>
        <div>
          <h1>11000 BDT </h1>
          <br />
          <span id="location">Cumilla,Thakur para bara mashjid</span> <br />
          <span id="tag">For rental purpose nice 780 sq ft flat</span>
          <br />
          <span id="bed"><BedIcon/> 3</span>
          <span id="wash"><BathtubIcon/> 4</span>
          <span id="size"><StraightenIcon/> 2389</span> <br />
          <span id="owner">Owner:Gold silver homes</span>
          <br />
          <Button variant="contained">
            {" "}
            <Link to="Rent3">View</Link>
          </Button>
          <Button variant="contained">
            <Link to="Sell">Email</Link>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
