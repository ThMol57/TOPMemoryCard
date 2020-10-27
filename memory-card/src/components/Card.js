import React from "react";
import "../styles/Card.css"

const Card = props => {

    return (

        <div className="ImgContainer">    
            <button onClick={props.onClick} className="btn btn-primary">
            <img data-name={props.ImgName} className="Img" src={props.image} alt="Card"/>
            </button>
        </div>
    )
}

export default Card;