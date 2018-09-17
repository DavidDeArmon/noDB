import React,  { Component } from 'react'

export default class WordInput extends Component{
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
        this.props.updateRender()
        this.setState({userInput:''})

    }
    render(){
        return(
            <div>
                <input value = {this.state.userInput}placeholder="enter word or phrase..." onChange={event=>this.handleChange(event.target.value)}></input>
                <button onClick={()=>this.newWordChild(this.state.userInput)}>Add Word</button>
            </div>
        )   
    }
}

