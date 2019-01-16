import React from 'react'

export default function SentenceGif(props) {
    let sentenceReturn = props.sentence.map((e, index)=>{
        return( 
            <div key = {index} className="Gif">
                <img alt='gif' src={e.url}/>
                <h4>{e.word}</h4>
                <div className="buttonContainer">
                    <button onClick={()=>props.handleDelete(index)}>Delete</button>
                    <button onClick={()=>props.handleUpdate(index, e.word)}>Update</button>
                </div>
            </div>
        )
    })
    return(
        <div className="GifContainer">
        {sentenceReturn}
        </div>
    )
}