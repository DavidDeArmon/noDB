const axios = require ('axios')
// sentence = [{url:'test',idx:0},{url:'test2',idx:1},{url:'test3',idx:2},{url:'test4',idx:3}];
var sentence = [];
var sentenceId = 0;


module.exports = {
//sentence creator
readSentence(req,res){       
    return res.status(200).json(sentence)
},
createWord(req,res){
    const {word} = req.body;
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=OVnA5iZNWaLILdhqhKjbfrgq85kpgSQ5&q=${word}&limit=1&offset=0&rating=G&lang=en`).then((response)=>{
        sentence.push({idx:sentenceId,word:word,url:response.data.data[0].images.fixed_height_downsampled.url,offset:0})
    }).catch(err=> console.log(err))  
    sentenceId++
    console.log(sentence)
    return res.status(200).json(sentence)
},
updateWord(req,res){
    const {word,idx} = req.body;
    let index = sentence.findIndex(word=>word.idx ==idx)
    let offset = sentence[index].offset+=1;
    console.log("index:",index)
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=OVnA5iZNWaLILdhqhKjbfrgq85kpgSQ5&q=${sentence[index].word}&limit=1&offset=${offset}&rating=G&lang=en`).then((response)=>{
        // console.log('updateWord',response.data.data[0].images.fixed_height_downsampled)       
        sentence.splice(index,1,{idx:idx,word:word,url:response.data.data[0].images.fixed_height_downsampled.url,offset:offset})
    }).catch(err=> console.log(err))    
    // sentence[index].url= url + "test";
    return res.status(200).json(sentence)
},
deleteWord(req,res){
    const{id}=req.params;
    let index = sentence.findIndex(word=>word.idx ==id)
    sentence.splice(index,1)
    return res.status(200).json(sentence) 
},










}