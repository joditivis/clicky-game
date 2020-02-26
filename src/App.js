import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import Card from "./components/Card";
import disneyCards from "./cards.json";

class App extends Component {

    state = {
        disneyCards,
        score: 0,
        highScore: 0,
        message: ""
    };

    handleClick = (id, clicked) => {
        const cardShuffle = this.state.disneyCards;
        
        if (clicked) {
            cardShuffle.forEach((image, i) => {
                cardShuffle[i].clicked = false;
            });
            return this.setState({
                image: cardShuffle.sort(() => Math.random() - 0.5),
                message: "Uh oh, you already clicked that movie!",
                score: 0
            })
        } else {
            cardShuffle.forEach((image, i) => {
                if (id === image.id) {
                    cardShuffle[i].clicked = true;
                }
            });

            const { topScore, score } = this.state;
            const newScore = score + 1;
            const newHighScore = newScore > topScore ? newScore : topScore;

            return this.setState({
                image: cardShuffle.sort(() => Math.random() - 0.5),
                score: newScore,
                topScore: newHighScore
            });
        };
    };

   render() {
       return (
           <Wrapper>
            <Score 
                score={this.state.score} 
                highestScore={this.state.highestScore}
                message={this.state.message}>
            </Score>

             {this.state.disneyCards.map(disney => (
                 <Card
                 handleClick={this.handleClick}
                 id={disney.id}
                 key={disney.id}
                 image={disney.image}
                 />
             ))}
             </Wrapper>
       );
   }
}

export default App;