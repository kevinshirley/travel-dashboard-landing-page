require('dotenv').config();
const {
  AWS_ACCESS_KEY_ID, 
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
} = process.env;
const AWS = require('aws-sdk');
const moment = require('moment');
const uuidv4 = require('../../../server/utils/uuidv4');

export default (req, res) => {

  const aws_creds = {
    table_name: 'users',
    remote_config: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: AWS_REGION
    }
  };

  if (req.method === 'GET') {
    return res.send({
      path: '/api/users/free-trial',
      success: true,
    });
  }

  if (req.method === 'POST') {
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

    const dbRes = db.put(params, function(err, data) {
      if (err) {
        console.log('aws error', err);
        return err;
      }

      console.log('aws success', data);

      return params.Item;
    });

    return res.send({
      success: true,
      email: data.email,
      aws: dbRes,
    });
  }
};
