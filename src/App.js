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

            const { highScore, score } = this.state;
            const newScore = score + 1;
            const newHighScore = newScore > highScore ? newScore : highScore;

            return this.setState({
                image: cardShuffle.sort(() => Math.random() - 0.5),
                message: "",
                score: newScore,
                highScore: newHighScore
            });
        };
    };

   render() {
       return (
           <div className="App">
            <div className="container app-container">
                <header className="jumbotron">
                    <h1 className="title">Disney Memory Game</h1>
                    <h5 className="sub-title">Try not to click the same movie twice!</h5>
                </header>

                <Wrapper>
                <div className="card">
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
                </div>
                </Wrapper>
                </div>
            </div>
       );
   }
}

export default App;