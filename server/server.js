require('dotenv').config()

const app = require("./config/custom-express")

const porta = process.env.PORT
app.listen(porta, ()=>{
    console.log(`ouvindo na porta ${porta}`)
})