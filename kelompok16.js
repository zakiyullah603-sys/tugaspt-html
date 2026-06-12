
const menu = [
  {
    id:1,
    nama:"Espresso",
    harga:"Rp 18.000",
    gambar:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200"
  },

  {
    id:2,
    nama:"Cappuccino",
    harga:"Rp 25.000",
    gambar:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200"
  },

  {
    id:3,
    nama:"Latte",
    harga:"Rp 23.000",
    gambar:"https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1200"
  },

  {
    id:4,
    nama:"Americano",
    harga:"Rp 20.000",
    gambar:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200"
  }
]

module.exports = menu
const express = require('express')
const path = require('path')

const menu = require('./data')

const app = express()

app.use(express.static('public'))

app.get('/api/menu', (req,res)=>{
  res.json(menu)
})

const PORT = 3000

app.listen(PORT, ()=>{
  console.log(Server berjalan di http://localhost:${PORT})
})
{
  "name": "rasa-kopi",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  }
}