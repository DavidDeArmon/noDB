const express = require('express'),
    bodyParser = require('body-parser'),
    sentenceController = require('./controller/sentenceController'),
    randomController = require('./controller/randomController'),
    app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname+'/../public/build'))

app.get('/api/sentence',sentenceController.readSentence)
app.post('/api/sentence',sentenceController.createWord)
app.put('/api/sentence/:id',sentenceController.updateWord)
app.delete('/api/sentence/:id',sentenceController.deleteWord)

//randomGif    
app.get('/api/random', randomController.readRandom)


const port = 3001;

app.listen(port,()=>(console.log(`server is running on port ${port}`)))