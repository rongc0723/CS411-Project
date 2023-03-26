import React from 'react'
import algoliasearch from 'algoliasearch';

const fetch = require('node-fetch');

const API_KEY = '2f0beac2f4c1420c816e7632d8657317';
const API_ENDPOINT = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;

const ALGOLIA_APP_ID = 'SOPA4AOQCK';
const ALGOLIA_API_KEY = '50577af5b0f6336ae0a79fb2cc92d77b';
const ALGOLIA_INDEX_NAME = '411GP-Sfoodify';

fetch(API_ENDPOINT)
  .then((response) => response.json())
  .then(async (data) => {
    const records = data.results.map((result) => {
      return {
        objectID: result.id.toString(),
        name: result.title,
        imageUrl: result.image,
        ingredients: result.extendedIngredients.map((ingredient) => ingredient.originalString),
        instructions: result.instructions,
        cuisine: result.cuisines,
      };
    });

    const client = algoliasearch(ALGOLIA_APP_ID,ALGOLIA_API_KEY);
    const index = client.initIndex(ALGOLIA_INDEX_NAME);

    for (let i = 0; i < records.length; i += 100) {
      const batch = records.slice(i, i + 100);
      try {
        await index.saveObjects(batch, { autoGenerateObjectIDIfNotExist: true });
      } catch (error) {
        console.error(error);
      }
    }
  })
  .catch((error) => {
    console.error(error);
  });

export default function SearchBar() {
  return (
    <div>SearchBar</div>
  )
}
