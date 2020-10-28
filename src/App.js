import React from 'react';
import Questions from './Data/Apprentice_TandemFor400_Data'
import AllAskedQuestions from './Components/AllAskedQuestions'
import './App.css'

class App extends React.Component {
  state = {
    questions: [],
    num: 0,
    startingNum: 0,
    score: 0
  }

  newGame = () => this.setState({ score: 0, startingNum: parseInt(this.state.startingNum) + 10, num: 0 })


  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}
 
  componentDidMount(){
    const questions = this.shuffleArray(Questions)
    this.setState({questions: questions})
  }


  addToScore = () => this.setState({ score: parseInt(this.state.score) + 5 })

  newQuestion = () => this.setState({ num: this.state.num + 1 })


 render (){
  const arrayQ = this.state.questions.slice(this.state.startingNum, this.state.num)
  return (
    <div className='App'>
      <br></br>
      <h2>Currect Trivia Score: {this.state.score} </h2>
      {this.state.num == 10 ? <button onClick={this.newGame}>New Game</button> : <button onClick={this.newQuestion}>New Questions</button>}
      <br></br>
      {arrayQ.length === 0 ? null : <AllAskedQuestions addToScore={this.addToScore} arrayQ={arrayQ}/>}
      <br></br>
    </div>
    )
  }
}

export default App 