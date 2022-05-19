require('dotenv').config();
const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/*', (req, res) => {
  const { url } = req;
  axios({
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${url}`,
    headers: { Authorization: process.env.API_TOKEN },
  })
    .then((data) => res.status(200).send(data.data))
    .catch((err) => res.status(404).send(err));
});

app.post('/*', (req, res) => {
  const reqdata = req.body;
  const { url } = req;
  axios({
    method: 'post',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${url}`,
    data: reqdata,
    headers: { Authorization: process.env.API_TOKEN },
  })
    .then(() => res.status(201).send())
    .catch((err) => res.status(404).send(err));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
