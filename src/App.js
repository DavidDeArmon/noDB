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
      newWord:'',
    }
    this.handleNewWord=this.handleNewWord.bind(this)
  }
  handleNewWord(input){
    this.setState({newWord: input});
    // console.log(this.state.newWord)
    AddWord(input)
  }
 
 
  render() {
    return (
      <div className="App">
      <header>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      </header>
        {/* works! */}
        {/* <RandomGif/> */}
        <div className="Header">
          <h1>GIF SENTENCE CREATOR</h1>
          {/* <RandomGif/> */}
          <WordInput newWord={this.handleNewWord}/>
        </div>
        <div className="GifContainer">
        <SentenceGif key={this.state.wordId} updateRender={this.incrementID} wordId={this.state.wordId}/>
        </div>

      </div>
    );
  }
}

export default App;
