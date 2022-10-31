/*const Gateway = require('micromq/gateway');

const app = new Gateway({

  microservices: ['users'],

  rabbit: {
    url: 'amqp://localhost:5672',
  },
});

app.get(['/get', '/status'], async (req, res) => {

  await res.delegate('users');
});

app.listen(process.env.PORT);*/
//node gateway.js
const express = require('express'),//http://localhost:5000/api/user/get
app = express(),
request = require('request')

const port = 3000

app.get('/getUsers', (req, res) => {
  request(
    'http://localhost:5000/api/user/get',
    (err, response, body) => {
      if (err) return res.status(500).send({ message: err })

      return res.send(body)
    }
  )
})
app.get('/getLessons', (req, res) => {
  request(
    'http://localhost:27017/api/lesson/get',
    (err, response, body) => {
      if (err) return res.status(500).send({ message: err })

      return res.send(body)
    }
  )
})

const start = async () => {
  try {
      await app.listen(port, () => console.log(`Server started on port = ${port}`))
  } catch (e){
      console.log(e)
  }
}

start()