const express = require('express')
const router = express.Router();

const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.deezer.com',
});

router.get('/home', async (req,res) => {
  try {
    const response = await api.get(`/search?q=skillet`)
    res.json({ error: false, data: response.data})
  } catch (err) {
    res.json({ error: true, message: err.message })
  }
})

// USUÁRIO BUSCANDO 8-B - Nesta etapa a gente cria a requisição conforme a documentação do deezer e testamos no insomnia.
router.get('/search/:search', async (req,res) => {
  try {
    const search = req.params.search;

    const response = await api.get(`/search?q=${search}`)
    res.json({ error: false, data: response.data})
  } catch (err) {
    res.json({ error: true, message: err.message })
  }
})

module.exports = router;