
import React from "react";
import "../styles/Header.css"

const Header = props => {


    return( 
        <div className="HeaderContainer">
            <h1 className="Title">Memory Card Game</h1>
            <h2 className="Score">Score: {props.score}</h2>
            <h3 className="HighScore">High Score: {props.HighScore}</h3>
        </div>
    )
}

export default Header;