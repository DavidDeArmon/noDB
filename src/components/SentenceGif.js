import React, { Component } from 'react'
import axios from 'axios'

export default class SentenceGif extends Component {
    constructor(props){
        super(props)
        this.state= {
            sentence:[]
        }
        this.handleClickDelete=this.handleClickDelete.bind(this)
        this.handleClickUpdate=this.handleClickUpdate.bind(this)
    }
    componentDidMount(){
        axios.get('/api/sentence').then((res)=>{
            console.log('get',res)
            this.setState({sentence:res.data})
        })
    }
    
    handleClickDelete(id){
        axios.delete(`/api/sentence/${id}`).then((res)=>{
            this.setState({sentence:res.data})
        })
    }
    handleClickUpdate(id,word){
        axios.put(`/api/sentence/${id}`,{url:word,idx:id}).then((res)=>{
            this.setState({sentence:res.data})
        })
    }
   
 

    render(){
        const {sentence} = this.state
        // let sentenceReturn = this.sentenceRender
        let sentenceReturn = sentence.map(e=>{
       return <div key ={e.idx}><div >{e.url}</div><button onClick={()=>this.handleClickDelete(e.idx)}>Delete</button><button onClick={()=>this.handleClickUpdate(e.idx,e.url)}>Update</button></div>
        })
      return(
          <div>
          {sentenceReturn}
          </div>
      )

    }
}