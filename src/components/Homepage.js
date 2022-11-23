import React from "react";
import { useNavigate } from "react-router-dom";
import calculatorImg from "./calculator.png"
import ttt from "./ttt.png"

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div>
        <div className="homepage-imgs">
            <img 
              className="homepage-img" 
              src={calculatorImg} 
              alt="" 
              onClick={() => navigate("/calculator")}
            />
            <img 
              className="homepage-img" 
              src={ttt} 
              alt="" 
              onClick={() => navigate("/tictactoe")}
            />
        </div>
    </div>
  
  );
};

export default Homepage;
