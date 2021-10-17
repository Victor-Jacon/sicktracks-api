
module.exports = async (req,res) => {

  const axios = require('axios');

  const api = axios.create({
    baseURL: 'https://api.deezer.com',
  });

    try {
        const response = await api.get(`/search?q=skillet`)
        res.json({ error: false, data: response.data})
      } catch (err) {
        res.json({ error: true, message: err.message })
      }
}


