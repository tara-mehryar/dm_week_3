import express from 'express';
import lodash from 'lodash';
import morgan from 'morgan';
import nunjucks from 'nunjucks';
import path from 'path';
import url from 'url';

// The project root directory
const rootDir = url.fileURLToPath(new URL('.', import.meta.url));
// Allows you to change the port number if needed
const port = '8000';

const app = express();

// Configure the Express app
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}...`);
});

const COMPLIMENTS = [
  'awesome',
  'terrific',
  'fantastic',
  'neato',
  'fantabulous',
  'wowza',
  'brilliant',
  'ducky',
  'coolio',
  'incredible',
  'wonderful',
  'smashing',
  'lovely',
];

app.get('/hello', (req, res) => {
  res.send('Hello!');
});

app.get('/', (req, res) => {
  res.render('home.html');
});

// Display a form.
app.get('/form', (req, res) => {
  res.render('form.html');
});

// Handle the form.
app.get('/welcome', (req, res) => {
  const person = req.query.person;
  res.send(`Welcome, ${person}!`);
});

// Display a POST form.
app.get('/number-form', (req, res) => {
  res.render('number-form.html');
});

// Handle the POST form.
app.post('/fav-number', (req, res) => {
  const favNumber = req.body.favNumber;
  console.log('Saving favorite number to the database...');

  res.send(`Your favorite number is ${favNumber}.`);
});

app.get('/users/:username', (req, res) => {
  res.send(`Info page for user ${req.params.username}`);
});

// NUNJUCKS ROUTES

app.get('/template-demo', (req, res) => {
  const date = new Date();
  const formattedDate = `${date.toDateString()} ${date.toLocaleTimeString()}`;
  res.render('template-demo.html.njk', {
    date: formattedDate,
  });
});

// Handle the form from /template-demo
app.get('/greet', (req, res) => {
  const person = req.query.person;
  const wantsCompliments = req.query.wantsCompliments;

  const randomCompliments = lodash.sampleSize(COMPLIMENTS, 3);

  res.render('greet.html.njk', {
    name: person,
    compliments: wantsCompliments ? randomCompliments : [],
  });
});

app.get('/inherit', (req, res) => {
  res.render('inherit.html.njk');
});
