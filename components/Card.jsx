import React, { useState } from "react";
import "../styles/card.scss";
import Cardetails from "./Cardetails";

const Card = ({ catName }) => {
  
  return (
    <section className="card-section" onClick={openModal}>
      <div>
        <h1 className="card-heading">{catName}</h1>
        <p className="card-para">unlimited jokes on {catName}</p>
      </div>
      <div>
        {isModalOpen && (
          <Cardetails closeModal={openModal} category={catName} />
        )}
      </div>
    </section>
  );
};

export default Card;
