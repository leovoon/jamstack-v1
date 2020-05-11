const axios = require('axios');
require('dotenv').config()



modules.export = 
    if (sessionStorage.getItem("is_reloaded"))
  async function () {
    try {
        const response = await axios.get(`
        https://newsapi.org/v2/top-headlines?country=my&q=covid&apiKey=${process.env.NEWS_API_KEY}`);
        sessionStorage.setItem("is_reloaded", true);
        return response.data
    } catch (error) {
        console.error(error);
    }
}



