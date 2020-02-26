import React from "react";
import "./style.css";

const Card = props => (
    <div 
        className="allCards col-sx-6 col-sm-6 col-md-4 col-lg-3"
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