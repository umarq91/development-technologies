const express = require('express')
const app =express()
const prisma = require('./db.js')
const dotenv = require('dotenv')
const { getAllPosts } = require('./controllers/postController.js')
dotenv.config()


app.listen(3000,()=>{
    console.log('Listening on port 3000');
})

app.get('/posts',getAllPosts)