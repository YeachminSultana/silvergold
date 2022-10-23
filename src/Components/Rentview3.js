import React from "react";

import "../Styles/Contact.css";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import StraightenIcon from "@mui/icons-material/Straighten";
import "../Styles/RentView.css";
import Land from "./Land sell";
import BrightnessAutoIcon from "@mui/icons-material/BrightnessAuto";
import RoofingIcon from "@mui/icons-material/Roofing";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import SpaIcon from "@mui/icons-material/Spa";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SimpleImageSlider from "react-simple-image-slider";

export default function RentView1() {

  const images1 = [
    {
      url: "https://i.ibb.co/DG0GLCJ/2280671d-55a5-49d4-a407-8481cf8dd5bb.jpg",
    },
    {
      url: "https://i.ibb.co/8rYCnqt/45afb3bc-f262-4917-8059-eb14319a5cea.jpg",
    },
    {
      url: "https://i.ibb.co/cLxMH9s/27afc4d3-3a14-483d-865d-d91878f66079.jpg",
    },
  ];
  return (
    <div className="open">
      <div className="Info-open">
      <div className="Slide">
          <SimpleImageSlider
            width={1200}
            height={600}
            images={images1}
            showBullets={true}
            showNavs={true}
          />
        </div>
        <div className="Basic-info">
          <h1>11000 BDT </h1>
          <br />
          <h2>
            <LocationOnIcon /> Cumilla,Police line
          </h2>{" "}
          <br />
          <h5>For rental purpose nice 650 sq ft flat</h5>
          <br />
          <span id="bed">
            <BedIcon /> 3
          </span>
          <span id="wash">
            <BathtubIcon /> 4
          </span>
          <span id="size">
            <StraightenIcon /> 2389
          </span>{" "}
          <br />
          <h2>
            বারিধারা এলাকায় ১৫০০০ বর্গফুটের একটি সুন্দর কাঠামোর সম্পূর্ণ আবাসিক
            ভবন ভাড়া দেওয়া হবে
          </h2>
          <br />
          <p>
            বারিধারা এলাকায় বসবাস অনেকের কাছেই স্বপ্নের সামিল। আবাসিক এলাকা
            হিসেবে আলাদা জনপ্রিয়তা আছে বারিধারা এলাকার। শহরের কোলাহল থেকে
            খানিকটা মুক্ত, ছায়াঘেরা শান্ত পরিবেশে সুপরিল্পিতভাবে গড়ে উঠেছে
            চমৎকার এই এলাকাটি। আর একারণেই অনেকের কাছে বারিধারা এলাকায় একটি বাড়ি
            থাকা মানে ঢাকার মাটিতে যেন স্বর্গের সুখ খুঁজে পাওয়া। শিশুদের জন্য
            স্কুল যেমন রয়েছে, তেমনি এখানে রয়েছে নামকরা কয়েকটি বিশ্ববিদ্যালয়।
            শপিংমল ইত্যাদি। সুচিকিৎসার জন্য এই এলাকায় রয়েছে মানসম্পন্ন হাসপাতাল।
          </p>
          <h4> Property Floor Plan</h4>
          <img src="https://images-cdn.bproperty.com/thumbnails/1548440-240x180.webp" />
          <h6>বিশেষ সুবিধাদি</h6>
          <br />
          <span>
            Floor level <BrightnessAutoIcon />{" "}
          </span>
          <span>
            Nice View <SpaIcon />{" "}
          </span>
          <span>
            Rooftoop <RoofingIcon />{" "}
          </span>
          <span>
            24 hour Internet <NetworkCheckIcon />
          </span>
          <br />
          <h1 id="map">
            {" "}
            <LocationOnIcon />
            Location
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.973695524597!2d91.17324106429112!3d23.4614133056727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f287795961d%3A0x5269a27967f68627!2sTalpukur!5e0!3m2!1sen!2sbd!4v1666408917441!5m2!1sen!2sbd"
            width="1000"
            height="400"
          ></iframe>
        </div>
      </div>

      <div className="Info-email">
        <Land />
      </div>
    </div>
  );
}
