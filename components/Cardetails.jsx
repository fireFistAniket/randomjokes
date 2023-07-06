import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/carddetaiks.scss";
import Loader from "./Loader";
const Cardetails = ({ closeModal }) => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const category = useSelector((state) => state.categrory.value);
  const fetchJoke = async () => {
    setIsLoading(true);
    const res = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    const catName = await res.json();
    setJoke(catName);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <div className="carddetails-div">
        <div className="closeBtn" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="500"
            height="500"
            viewBox="0,0,256,256"
            style={{ fill: "#000000" }}
          >
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(5.12,5.12)">
                <path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path>
              </g>
            </g>
          </svg>
        </div>
        <h1 className="modalHeading">{category}</h1>
        {!isLoading && joke ? (
          <div>
            <p className="modalPara">"{joke.value}"</p>
            <button
              onClick={() => {
                fetchJoke();
              }}
              type="button"
              className="nextBtn"
            >
              Next joke
            </button>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Cardetails;
