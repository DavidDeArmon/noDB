import React, { Component } from 'react'
import axios from 'axios'
import '../App.css' ;

export default class SentenceGif extends Component {
    constructor(props){
        super(props)
        this.state= {
            sentence:[],
            wordId:0

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
    handleClickUpdate(word,id){
        axios.put(`/api/sentence/${id}`,{word:word,idx:id}).then((res)=>{
            console.log(res.data)

            this.setState({sentence:res.data})
            // this.setState({offset:this.state.offset+1})
            this.setState({wordId:this.state.wordId+1})
        })
        console.log("WordID:",this.state.wordId)
    }
   
 

    render(){
        const {sentence} = this.state
        // let sentenceReturn = this.sentenceRender
        let sentenceReturn = sentence.map(e=>{
       return <div key ={e.idx} className="Gif"><img alt='loading...'src={e.url}></img><h4>{e.word}</h4><button onClick={()=>this.handleClickDelete(e.idx)}>Delete</button><button onClick={()=>this.handleClickUpdate(e.word,e.idx)}>Update</button></div>
        })
      return(
          <div>
          {sentenceReturn}
          </div>
      )

    }
}