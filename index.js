const express = require('express');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())

app.get('/', (req, res) => {
    res.send('I can code node now!!!!')
  })

const users = [
    {
      
        "img": "https://i.ibb.co/yg0h3j7/photographer-iamge1.jpg",
        "name": "photographer",
        "id": "01"
        
      },
      {
        
        "img": "https://i.ibb.co/JyTXKg9/photographer-iamge2.jpg",
        "name": "photographer",
        "id": "02"
        
      },
      {
        
        "img": "https://i.ibb.co/pRQyg70/photographer-iamge3.jpg",
        "name": "photographer",
        "id": "03"
        
      },
      {
        
        "img": "https://i.ibb.co/Pc9vwB9/photographer-iamge4.jpg",
        "name": "photographer",
        "id": "04"
        
      },
      {
        
        "img": "https://i.ibb.co/jWGk7BT/photographer-iamge5.jpg",
        "name": "photographer",
        "id": "05"
        
      },
      {
        
        "img": "https://i.ibb.co/LS83d3M/photographer-iamge6.jpg",
        "name": "photographer",
        "id": "06"
        
      }
]

app.get('/users', (req, res) => {
    res.send(users);
  })

  app.listen(port, () => {
    console.log('Listening to port', port);
  })