const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", cors(), async(req, res) => {
    res.send("WORKING")
})

app.get('/api/recipes', cors(), async(req, res) => {
    const apiKey = process.env.MY_SPOONACULAR_API_KEY;
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

app.get('/api/spotify', cors(), async(req, res) => {
    const SPOTIFY_CLIENT_ID = process.env.MY_SPOTIFY_CLIENT_ID;
    const SPOTIFY_CLIENT_SECRET = process.env.MY_SPOTIFY_CLIENT_SECRET;
    const {query} = req.query
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
                grant_type: 'client_credentials',
            },
            headers: {
                'Authorization': `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        const access_token = response.data.access_token
        const params = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        }
        const searchResponse = await axios.get(`https://api.spotify.com/v1/search?query=${query}&type=playlist&limit=10` , params)
        res.json(searchResponse.data)
    } catch (error) {
        res.status(500).json({error: 'error'})
        
    }

})

app.listen(4000, () => {
    console.log(`listening at http://localhost:4000`)
})