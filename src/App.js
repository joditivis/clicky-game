import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import Card from "./components/Card";
import disneyCover from "./cards.json";

class App extends Component {

    state = {
        disneyCover,
        clickedDisneyIds: [],
        score: 0,
        highestScore: 0,
        lostMessage: ""
    };

   render() {
       return (
           <Wrapper>
             {this.state.disneyCover.map(disney => (
                 <Card
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