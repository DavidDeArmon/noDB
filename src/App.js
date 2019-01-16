import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SentenceGif from "./components/SentenceGif";
import WordInput from "./components/WordInput";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sentence: [],
      offset: 1
    };
  }
  handleNewWord = newWord => {
    this.setState({ sentence: [...this.state.sentence, newWord] });
  };
  handleDelete = index => {
    let newSentence = this.state.sentence;
    newSentence.splice(index, 1);
    this.setState({ sentence: newSentence });
  };
  handleUpdate = (index, word) => {
    let newURL;
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=OVnA5iZNWaLILdhqhKjbfrgq85kpgSQ5&q=${word}&limit=1&offset=${
          this.state.offset
        }&rating=G&lang=en`
      )
      .then(response => {
        newURL = response.data.data[0].images.fixed_height_downsampled.url;
        let newSentence = this.state.sentence;
        newSentence.splice(index, 1, { word: word, url: newURL });
        this.setState({ sentence: newSentence, offset: this.state.offset + 1 });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <div className="headerContainer">
            <h1>GIF SENTENCE CREATOR</h1>
            <WordInput addWord={this.handleNewWord} />
          </div>
        </div>
        <div className="inlineContainer">
          <SentenceGif
            sentence={this.state.sentence}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;
