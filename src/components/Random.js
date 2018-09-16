import React, { Component } from 'react'
import axios from 'axios'

export default class RandomGif extends Component {
    constructor(){
        super()
        this.state= {
            gif:""
        }
    }
    componentDidMount(){
        axios.get('/api/random').then((res)=>{
        console.log('res', res.data.data)
        this.setState({gif:res.data.data})
    })
    }   
 

    render(){
        const {gif} = this.state
        return( <img alt = "loading" src ={gif.fixed_height_downsampled_url} height ="200" width={gif.fixed_height_downsampled_width} ></img>)

    }
}