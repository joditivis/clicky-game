import React from "react";
import "./style.css";

const Card = props => (
    <div 
        className="allCards"
        key={props.id}
        onClick={() => props.handleClick(props.id, props.clicked)}
        >
            <img 
                alt={props.name} 
                src={props.image} 
                id={props.id} 
            />
    </div>
);

export default Card;