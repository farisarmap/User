const express = require('express')
const app = express()
const PORT = 3000
const Controller = require('./controller/controller')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.get('/users', Controller.Users)
app.get('/users/create', Controller.userCreateGet)
app.post('/users/create', Controller.UsersCreatePost)
app.get('/users/delete/:id', Controller.UsersDelete)
app.get('/users/edit/:id', Controller.UserEditGet)
app.post('/users/edit/:id', Controller.UserEditPost)

app.listen(PORT, ()=>{
    console.log(`I LOVE U ${PORT}`)
})