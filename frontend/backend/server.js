const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", cors(), async(req, res) => {
    res.send("WORKING")
})

app.get('/api/recipes', cors(), async(req, res) => {
    const apiKey = '2f0beac2f4c1420c816e7632d8657317'
    const {query} = req.query
    console.log('Fetching...')
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&addRecipeInformation=true`
    try{
        const response = await axios.get(apiUrl)
        res.send(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).send('Error')
    }
})

app.listen(4000, () => {
    console.log(`listening at http://localhost:4000`)
})