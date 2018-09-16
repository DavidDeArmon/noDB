import React, { Component } from 'react';
import './App.css';
import RandomGif from './components/Random'
import SentenceGif from './components/SentenceGif'
import WordInput from './components/wordInput'
import AddWord from './components/AddWord'

class App extends Component {
  constructor(){
    super()
    this.state={
      newWord:''
    }
    this.handleNewWord=this.handleNewWord.bind(this)
  }
  handleNewWord(input){
    this.setState({newWord: input});
    console.log(this.state.newWord)
    AddWord(input)
  }
 
  render() {
    return (
      <div className="App">
        {/* works! */}
        {/* <RandomGif/> */}
        <h1>GIF SENTENCE CREATOR</h1>
        {/* <RandomGif/> */}
        <WordInput newWord={this.handleNewWord}/>
        
        <SentenceGif key={this.state.wordId} />

      </div>
    );
  }
}

export default App;
