import React from "react";
import { Button } from "@mui/material";
import "../Styles/Rent.css";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StraightenIcon from '@mui/icons-material/Straighten';
import { Link } from "react-router-dom";

export default function Rent2() {
  return (
    <div>
      <div className="Data shadow-2xl">
      <img src="https://i.ibb.co/k40kzdF/6026ad76-7db2-49c9-bda7-9bba449bca08.jpg" alt="6026ad76-7db2-49c9-bda7-9bba449bca08" border="0" />
        <div>
          <h1>4000 BDT </h1>
          <br />
          <span id="location">Cumilla, kandirpar</span> <br />
          <span id="tag">For rental purpose nice 650 sq ft flat</span>
          <br />
          <span id="bed"><BedIcon/> 2</span>
          <span id="wash"><BathtubIcon/> 2</span>
          <span id="size"><StraightenIcon/> 1039</span> <br />
          <span id="owner">Owner:Gold silver homes</span>
          <br />
          <Button variant="contained">
            {" "}
            <Link to="Rent2">View</Link>
          </Button>
          <Button variant="contained">
            <Link to="Sell">Email</Link>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
