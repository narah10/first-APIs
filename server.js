const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');
 
app.get('/', lesson1Controller.jasonRoute
);

app.get('/Emma', lesson1Controller.emmaRoute);

const port = 3000
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});