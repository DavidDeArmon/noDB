const axios = require('axios');
randomGif = []


module.exports = {

//Random Gif
readRandom(req,res){
    console.log('readRandom')
    axios.get('https://api.giphy.com/v1/gifs/random?api_key=hnrUv0lPCNhXRbOLKbrVnoBi5zGa495G&tag=&rating=G&limit=1').then((response)=>{
        console.log(response)
        // randomGif = response
        res.status(200).json(response.data)
        
    }).catch(err=> console.log(err))
    
    
}









}