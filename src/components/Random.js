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
        return( <img alt = "loading" src ={gif.fixed_width_downsampled_url} height ={gif.fixex_width_downsampled_height} width={gif.fixed_width_downsampled_width} ></img>)

    }
}