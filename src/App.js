import React, { Component } from 'react';
import './App.css';
import RandomGif from './Random'
import SentenceGif from './SentenceGif'

class App extends Component {
  constructor(){
    super()
    this.state={
      data:[],
    }
  }
 
  render() {
    return (
      <div className="App">
        {/* works! */}
        {/* <RandomGif/> */}
        <RandomGif/>
        <h1>GIF SENTENCE CREATOR</h1>
        {/* <SentenceGif/> */}

      </div>
    );
  }
}

export default App;
