import React, { Component } from 'react';
import './App.css';
import RandomGif from './components/Random'
import SentenceGif from './components/SentenceGif'
import WordInput from './components/wordInput'
import AddWord from './components/AddWord'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      newWord:'',
      wordId:0
    }
    this.handleNewWord=this.handleNewWord.bind(this)
    // this.SentenceGif=React.createRef()
  }
  handleNewWord(input){
    this.setState({newWord: input});
    // console.log(this.state.newWord)
    AddWord(input)
  }
  updateRender=()=>{
    console.log("updateRender is Called!")
    this.setState({wordId:this.state.wordId+1})
    // this.SentenceGif.updateRender()
  }
 
  render() {
    return (
      <div className="App">
      <header>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
      </header>
        {/* works! */}
        <div className="Header">
          <RandomGif/>
          <div className="headerContainer">
            <h1>GIF SENTENCE CREATOR</h1>
            <WordInput newWord={this.handleNewWord} updateRender={this.updateRender}/>
          </div>
          <RandomGif/>

        </div>
        <div className="inlineContainer">
        {/* <div className="GifContainer"> */}
        <SentenceGif key={this.state.wordId}  />
        {/* </div> */}
        </div>

      </div>
    );
  }
}

export default App;
