const fetch = require('node-fetch');
require('dotenv').config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};


exports.handler = async (event,) => {
  try {
    //put supersweet endpoint here
    const response = await fetch(`https://api.petfinder.com/v2/animals?type=${event.queryStringParameters.type}`, {
      headers: {
        Authorization: `Bearer ${event.queryStringParameters.token}`,
      }
    });
    console.log(event.queryStringParameters.token);
    const data = await response.json();
    const json = JSON.stringify(data);
    
    return { 
      statusCode: 200, 
      headers,
      body: json
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
