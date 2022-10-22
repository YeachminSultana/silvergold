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
      <img src="https://i.ibb.co/C7D9Nqy/92216f5c-9c29-46ea-b632-3d1a2355ebcf.jpg" alt="92216f5c-9c29-46ea-b632-3d1a2355ebcf" border="0"/>
        <div>
          <h1>6000 BDT </h1>
          <br />
          <span id="location">Cumilla,Talpukurpar</span> <br />
          <span id="tag">For rental purpose nice 850 sq ft flat</span>
          <br />
          <span id="bed"><BedIcon/> 4</span>
          <span id="wash"><BathtubIcon/> 2</span>
          <span id="size"><StraightenIcon/> 850</span> <br />
          <span id="owner">Owner:Gold silver homes</span>
          <br />
          <Button variant="contained">
            {" "}
            <Link to="Rent4">View</Link>
          </Button>
          <Button variant="contained">
            <Link to="Sell">Email</Link>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
