const axios = require ('axios')
// sentence = [{url:'test',idx:0},{url:'test2',idx:1},{url:'test3',idx:2},{url:'test4',idx:3}];
sentence = [];
sentenceId = 0;


module.exports = {
//sentence creator
readSentence(req,res){       
    return res.status(200).json(sentence)
},
createWord(req,res){
    const {word} = req.body;
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=OVnA5iZNWaLILdhqhKjbfrgq85kpgSQ5&q=${word}&limit=1&offset=0&rating=G&lang=en`).then((response)=>{
        console.log('createWord',response.data.data.images)       
        sentence.push({url:response.data.data.images,idx:sentenceId})
    }).catch(err=> console.log(err))  
    sentenceId++
    return res.status(200).json(sentence)
},
updateWord(req,res){
    const {url,offset,idx} = req.body;
    // axios.get(`https://api.giphy.com/v1/gifs/search?api_key=OVnA5iZNWaLILdhqhKjbfrgq85kpgSQ5&q=${word}&limit=1&offset=${offset}&rating=G&lang=en`).then((response)=>{
    //     console.log(response)       
    //     sentence.splice(idx,1,response)
    // }).catch(err=> console.log(err))  
    let index = sentence.findIndex(word=>word.idx ==idx)
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