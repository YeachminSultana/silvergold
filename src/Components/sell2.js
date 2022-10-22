import React from "react";
import { Button } from "@mui/material";
import "../Styles/Rent.css";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StraightenIcon from '@mui/icons-material/Straighten';
import { Link } from "react-router-dom";

export default function Sell1() {
  return (
    <div>
      <div className="Data shadow-2xl">
      <img src="https://i.ibb.co/M96h8PD/b91c2b7e-b3de-49cd-a4de-028c23e8d5e6.jpg" alt="b91c2b7e-b3de-49cd-a4de-028c23e8d5e6" border="0"/>
        <div>
          <h1>90,000 BDT </h1>
          <br />
          <span id="location">Cumilla,Ranir bazar</span> <br />
          <span id="tag">For Sell  7830 sq ft flat</span>
          <br />
          <span id="bed"><BedIcon/> 2</span>
          <span id="wash"><BathtubIcon/> 3</span>
          <span id="size"><StraightenIcon/> 2339</span> <br />
          <span id="owner">Owner:Gold silver homes</span>
          <br />
          <Button variant="contained"><Link to="Sellv2">View</Link></Button>
          <Button variant="contained">
            <Link to="Sell">Email</Link>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
