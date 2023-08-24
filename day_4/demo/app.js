import express from 'express'
import viteExpress from 'vite-express'
import bodyParser from 'body-parser'

const app = express();
const port = 8000;
viteExpress.config({printViteDevServerHost: true})

app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile('index.html',{ root: '.'})
})



viteExpress.listen(app, port, () => {
    console.log(`Server running on localhost ${port}`)
})