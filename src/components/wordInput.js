import React,  { Component } from 'react'

export default class wordInput extends Component{
    constructor(props){
        super(props)
        this.state={
            userInput: '',

        }

    }
    handleChange(event){
    this.setState({userInput:event})
    }
    newWordChild(input){
        this.props.newWord(input)
    }
    render(){
        return(
            <div>
                <input placeholder="enter word..." onChange={event=>this.handleChange(event.target.value)}></input>
                <button onClick={()=>this.newWordChild(this.state.userInput)}>Add Word</button>
            </div>
        )   
    }
}

