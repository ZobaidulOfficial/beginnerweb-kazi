const exports = require('express')
const app = express()

app.get('/js', (req, res, next) => {
    res.render()
})

app.get('hello i ma kazi')

app.listen(3000, (err)  =>{
console.log(err.message)
})