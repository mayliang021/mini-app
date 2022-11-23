import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Calculator from "./components/Calculator";
import TicTacToe from "./components/TicTacToe";
import Homepage from "./components/Homepage";


const App = () => {
 

  return (
    <BrowserRouter>
      <div className="container">
        <div className="navbar">
          <h1>my mini app</h1>
          <div className="nav-subtitle-list">
            <Link class="nav-subtitle" to="/">Home</Link>
            <Link class="nav-subtitle" to="/calculator">Calculator</Link>
            <Link class="nav-subtitle" to="/tictactoe">Tic Tac Toe</Link>
          </div> 
        </div>
      </div>
      <Routes>
        <Route path="/" element = {<Homepage/>} />
        <Route path="/calculator" element={<Calculator/>} />
        <Route path="/tictactoe" element={<TicTacToe/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
