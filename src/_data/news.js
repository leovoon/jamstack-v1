const axios = require('axios');
require('dotenv').config()



const getNews = async function () {
    try {
        const response = await axios.get(`
        https://newsapi.org/v2/top-headlines?country=my&q=covid&apiKey=${process.env.NEWS_API_KEY}`);

        return response.data
    } catch (error) {
        console.error(error);
    }
}

const updateNews = () => {
    document.location.reload();
    getNews();

}

export default updateNews 
