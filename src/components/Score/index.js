import React from "react";
import "./style.css";

const Score = props => (
    <div className="totalScore">
        <div className="score">Score: {props.total} </div>
        <div className="highScore">Highest Score: {props.highScore} </div>
        <div className="message">{props.message} </div>
    </div>
);

export default Score;