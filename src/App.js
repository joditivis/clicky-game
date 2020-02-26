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
           <div className="App">
            <div className="container app-container">
                <header className="header">
                    <h1 className="title">Disney Memory Game</h1>
                </header>
            </div>

                <Wrapper>
                    <Score
                        score={this.state.score} 
                        highScore={this.state.highScore}
                        message={this.state.message}>
                    </Score>

                <div className="row cards-row">
                    {this.state.disneyCards.map(disney => (
                        <Card
                        id={disney.id}
                        key={disney.id}
                        image={disney.image}
                        clicked={disney.clicked}
                        handleClick={this.handleClick}
                        />
                    ))}
                </div>
                </Wrapper>
            </div>
       );
   }
}

export default App;