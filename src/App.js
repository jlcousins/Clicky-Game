import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer'
import FriendCard from './components/FriendCard';
import friends from './friends.json';


function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
 return array;
};

class App extends Component {

  state = {
    friends,
    currentScore: 0,
    topScore: 0, 
    rightWrong: "Click an image to begin!",
    clicked: []
  };


  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id)})
    } else {
      this.handleReset();
    }
  }

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 10) {
      this.setState({ rightWrong: "You win!" })
    }
    this.handleShuffle();
  }

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends })
  }
 
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Try again!",
      clicked: []
    });
    this.handleShuffle();
  };

  render() {
    return (
      <div className="App">
      <Wrapper>
      <NavBar score={this.state.currentScore} topScore={this.state.topScore} rightWrong={this.state.rightWrong} />
      <Header />
      
          {this.state.friends.map(friend => (
            <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            />
          )
           )}  
      </Wrapper>
      <Footer  />
      </div>
    );
  }
}

export default App;
