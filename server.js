const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// app.get('/api/hello', (req, res) => {
//     res.send({massage : 'hello express1'});
// });
app.get('/api/customers', (req, res) => {
   res.send([
    {
        'id':1, 
        'image':'http://placeimg.com/64/64/any',
        'name': 'jamie', 
        'birthday':'930221', 
        'gender':'female',
        'job':'student'
      },
      {
      'id':2, 
        'image':'http://placeimg.com/64/64/any',
        'name': 'rara', 
        'birthday':'990221', 
        'gender':'female',
        'job':'student'
      },
      {
        'id':3, 
        'image':'http://placeimg.com/64/64/any',
        'name': 'roy', 
        'birthday':'950221', 
        'gender':'male',
        'job':'student'
      }
   ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));