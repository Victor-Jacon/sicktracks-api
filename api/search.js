// USUÁRIO BUSCANDO 8-B - Nesta etapa a gente cria a requisição conforme a documentação do deezer e testamos no insomnia.
module.exports = async (req,res) => {

  const axios = require('axios');

  const api = axios.create({
    baseURL: 'https://api.deezer.com',
  });

    try {
        // console.log(req.query)
        const search = req.query.q
        // console.log(search)
        const response = await api.get(`/search?q=${search}`)
        res.json({ error: false, data: response.data})
      } catch (err) {
        res.json({ error: true, message: err.message })
      }
}
