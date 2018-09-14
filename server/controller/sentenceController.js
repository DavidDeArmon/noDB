sentence = [];
sentenceId = 0;
randomGif = []

module.exports = {
//sentence creator
readSentence(req,res){
    
    console.log('readRandom')
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=OVnA5iZNWaLILdhqhKjbfrgq85kpgSQ5&q=&limit=25&offset=0&rating=G&lang=en').then((response)=>{
        console.log(response)
        // randomGif = response
        res.status(200).json(response.data)
        
    }).catch(err=> console.log(err))   

},
createWord(req,res){},
updateWord(req,res){},
deleteWord(req,res){},










}