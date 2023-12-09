import React from "react";
import "../CSS/Card.css";
import profile from "../Img/profile.png";
import exclamation from "../Img/exclamation.png";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="upper">
          <p>CAM-11</p>
          <img src={profile} alt="Profile" width={"50px"} />
        </div>
        <div>
          <h5>Conduct Security Vulnerability Assessment</h5>
        </div>
        <div className="tag">
          <div className="exclamation">
            <img src={exclamation} alt="Exclamation" width={"20px"} />
          </div>
          <div className="feature">
            <p>Feature Request</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
    