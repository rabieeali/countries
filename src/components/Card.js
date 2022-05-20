import React from "react";

const Card = ({ name, img, capital,region,population }) => {
  return (
    <div className="col-md-3">
      <div className="card animation shadow cursor-pointer h-100">
        <img src={img} className="card-img-top flag" alt={name} />
        <div className="card-body">
          <h5 className="card-title text-start">{name}</h5>
          <ul className="list-unstyled">
            <li className="card-text fw-bold text-secondary">
              Capital <span className="fw-light text-dark">{capital}</span>
            </li>
            <li className="card-text fw-bold text-secondary">
              Population <span className="fw-light text-dark">{population}</span>
            </li>
            <li className="card-text fw-bold text-secondary">
              Region <span className="fw-light text-dark">{region}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
