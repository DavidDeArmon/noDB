import React, { Component } from "react";
import axios from "axios";
import RandomGif from './RandomGif'

export default class WordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
  }

  handleChange = event => {
    this.setState({ userInput: event });
  };

  newWord = () => {
    let input = this.state.userInput;
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=OVnA5iZNWaLILdhqhKjbfrgq85kpgSQ5&q=${input}&limit=1&offset=0&rating=G&lang=en`
      )
      .then(response => {
          console.log(response);
        this.props.addWord({word:input,url:response.data.data[0].images.fixed_height.url});
        this.setState({ userInput: "" });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <input
          value={this.state.userInput}
          placeholder="enter word or phrase..."
          onChange={event => this.handleChange(event.target.value)}
        />
        <button onClick={this.newWord}>
          Add Word
        </button>
        <RandomGif addWord={this.props.addWord}/>
      </div>
    );
  }
}
