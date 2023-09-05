import React from "react";
import Buttons from "../Button";

const Cards = ({pic,name,age,gender,onClick,contact,time,date,title}) => {
  return( 
  
    <div className="col-sm-6 col-md-6 col-lg-4">
      <div
        className="card bg-white p-3 mb-4 shadow"
        style={{ height: 200 }}
      >
        <div className="d-flex justify-content-between mb-4">
          <div className="user-info__img">
            <img src={pic} alt="User Img" />
          </div>
          <div className="user-info__basic me-auto">
            <h5 className="mb-0">{name}</h5>
            <p className="text-muted ">
              {age}, {gender}
            </p>
          </div>
          <div>
            {" "}
            <Buttons
              onClick={onClick}
              className="btn btn-sm btn-outline-danger"
              text="Delete"
            ></Buttons>
          </div>
        </div>

        <div className="d-flex">
          <h6 style={{ marginLeft: 10 }}>{contact}</h6>
        </div>
        <div className="d-flex">
          <a style={{ textDecoration: "none" }} href="#!">
            <h6 style={{ marginLeft: 10 }}>Contact</h6>
          </a>
        </div>

        <div className="d-flex justify-content-between mt-1">
          <div>
            <h5 style={{ marginLeft: 10 }}>
              {time}
              <small style={{ marginLeft: 10 }}>{date}</small>
            </h5>
          </div>
          <span className="text-success font-weight-bold">
            Consult
          </span>
        </div>
      </div>
    </div>
  
  )
};

export default Cards;
