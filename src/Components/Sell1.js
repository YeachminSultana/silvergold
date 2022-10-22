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
      <img src="https://i.ibb.co/cLxMH9s/27afc4d3-3a14-483d-865d-d91878f66079.jpg" alt="27afc4d3-3a14-483d-865d-d91878f66079" border="0" />
        <div>
          <h1>15000 BDT </h1>
          <br />
          <span id="location">Cumilla,Thakur para bara mashjid</span> <br />
          <span id="tag">For Sell  780 sq ft flat</span>
          <br />
          <span id="bed"><BedIcon/> 3</span>
          <span id="wash"><BathtubIcon/> 4</span>
          <span id="size"><StraightenIcon/> 2389</span> <br />
          <span id="owner">Owner:Gold silver homes</span>
          <br />
          <Button variant="contained"><Link to="Sellv1">View</Link></Button>
          <Button variant="contained">
            <Link to="Sell">Email</Link>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
