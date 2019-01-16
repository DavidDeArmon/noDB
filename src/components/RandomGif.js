import React, { Component } from "react";
import axios from "axios";

export default class RandomGif extends Component {
  randomGif = () => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/random?api_key=hnrUv0lPCNhXRbOLKbrVnoBi5zGa495G&tag=&rating=G&limit=1"
      )
      .then(response => {
        this.props.addWord({url:response.data.data.image_url});
      })
      .catch(err => console.log(err));
  };
  render(){
    return(
      <button onClick={this.randomGif}>Random Gif</button>
    )
  }
}
