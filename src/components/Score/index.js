import React from "react";
import "./style.css";

const Score = props => (
    <div className="totalScore">
        <div className="score">Score: {props.total} </div>
        <div className="highestScore">Highest Score: {props.highest} </div>
        <div className="lostMessage">{props.lostMessage} </div>
    </div>
);

export default Score;