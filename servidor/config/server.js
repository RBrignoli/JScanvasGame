const express = require('express')
const app = express()
const router_users = require('../rotas/rotas-users')
const router_auth = require('../rotas/rotas-auth')


app.use(express.json())

app.use('/v1', router_users)
app.use('/v1', router_auth)

app.listen(8000, ()=>{
    console.log('server online')
})