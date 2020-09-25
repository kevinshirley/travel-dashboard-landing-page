require('dotenv').config();
const { 
  SOFTELO_AWS_ACCESS_KEY_ID, 
  SOFTELO_AWS_SECRET_ACCESS_KEY,
  SOFTELO_AWS_REGION,
} = process.env;
const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const moment = require('moment');
const uuidv4 = require('../utils/uuidv4');
// const { uuid } = require('uuidv4');

const aws_creds = {
  table_name: 'users',
  remote_config: {
    accessKeyId: SOFTELO_AWS_ACCESS_KEY_ID,
    secretAccessKey: SOFTELO_AWS_SECRET_ACCESS_KEY,
    region: SOFTELO_AWS_REGION
  }
};

router.get('/users/free-trial', (req, res) => {
  console.log({ req, res });
  return res.send({
    success: true,
  });
});

router.post('/users/free-trial', (req, res) => {
  const data = req.body;
  const { email } = data;

  AWS.config.update(aws_creds.remote_config);
  const db = new AWS.DynamoDB.DocumentClient();
  const id = uuidv4();

  const params = {
    TableName: aws_creds.table_name,
    Item: {
      id,
      createdAt: moment().format(),
      email: email,
      status: 'free-trial',
    }
  };

  db.put(params, function(err, data) {
    if (err) {
      return res.send({
        success: false,
        message: err,
        params,
        data,
      });
    }

    return res.send({
      success: true,
      email: data.email,
      params,
      data,
    });
  });
});

module.exports = router;
