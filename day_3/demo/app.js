import express from 'express'
import nunjucks from 'nunjucks'
import session from 'express-session'

const app = express();

app.use(express.urlencoded({ extended:false }));
app.use(session({ 
    secret: 'sssshhhhh', 
    saveUninitialized: true,
    resave: false
}))

nunjucks.configure('views', {
    autoescape: true,
    express: app
})


app.listen(4000, () => console.log('Running on port 4000!'))