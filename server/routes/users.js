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
const sendGrid = require('../utils/send-grid');

const aws_creds = {
  table_name: 'users',
  remote_config: {
    accessKeyId: SOFTELO_AWS_ACCESS_KEY_ID,
    secretAccessKey: SOFTELO_AWS_SECRET_ACCESS_KEY,
    region: SOFTELO_AWS_REGION
  }
};

const selectLanguage = referrer => {
  if (referrer.indexOf('/fr') > 0) return 'FR';
  if (referrer.indexOf('/en') > 0) return 'EN';
  return null;
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
  const id = uuidv4();
  const userAgent = req.headers['user-agent'];
  const language = selectLanguage(req.headers['referer']);

  AWS.config.update(aws_creds.remote_config);
  const db = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: aws_creds.table_name,
    Item: {
      id,
      createdAt: moment().format(),
      email,
      status: 'free-trial',
      userAgent,
      language,
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

    sendGrid({
      to: email,
      from: {
        email: 'info@tripimagine.com',
        name: 'Trip Imagine'
      },
      subject: 'Your free trial link is on the way',
      text: 'Click on the link to start building',
      html: '<body style="margin:0; padding:0; background-color:#f9f9f9; font-family: arial;"><center><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="padding-top:20px; padding-bottom:20px;"><tr><td align="center" valign="top"><img src="http://media.tripimagine.com/img/trip-imagine-logo-only.png" alt="Trip Imagine" /></td></tr></table><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f9f9f9" style="padding-top:15px; padding-bottom:15px;"><tr><td align="center" valign="top"></td></tr></table><table width="90%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="padding-top:10px; padding-bottom:5px; padding-left:15px; padding-right:15px;"><tr style="padding-top:10px; padding-bottom:10px;"><td align="center" valign="top"><h3 style="padding-top:10px; padding-bottom:10px;">Time to Build Amazing Trip Itineraries!</h3></td></tr><tr style="padding-top:10px; padding-bottom:10px;"><td align="center" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f9f9f9" style="padding-top:15px; padding-bottom:15px;"><tr><td align="center" valign="top"><img src="http://media.tripimagine.com/img/travel-dashboard-example.gif" alt="Trip Imagine" width="100%" /></td></tr></table></td></tr><tr><td align="left" valign="top"><p style="padding-top:30px; padding-bottom:35px;">Hi,<br/><br/> Your <em style="color:#3F3F3F;">free trial </em>link is on the way.<br/><br/> We are now preparing the first release of the <em style="color:#3F3F3F;">Trip Imagine</em> travel dashboard software.<br/><br/> Sit tight! As soon as the first release is ready, we will share with you via email a link to login and start using this travel dashboard software to start building high end itineraries and manage your travel needs with all our custom tools designed to scale your company at it\'s pick performance.<br/><br/> Regards</p></td></tr><tr style="padding-top:10px; padding-bottom:10px;"><td align="center" valign="top"><table width="80%" border="0" cellpadding="0" cellspacing="0"><tr><td align="center" valign="top"><hr/></td></tr></table></td></tr></table><table width="90%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="padding-top:20px; padding-bottom:20px;"><tr><td align="center" valign="top"><p>--</p><p>For more information<br/><a href="mailto:info@tripimagine.com">info@tripimagine.com</a></p></td></tr><tr><td align="center" valign="top"><br/><p>The Trip Imagine Team<br/><a href="http://bit.ly/travel-dashboard">http://bit.ly/travel-dashboard</a></p></td></tr><tr><td align="center" valign="top"><br/><small>© Trip Imagine by Softelo, All Rights Reserved.</small></td></tr></table><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f9f9f9" style="padding-top:15px; padding-bottom:15px;"><tr><td align="center" valign="top"></td></tr></table></center></body>'
    });

    return res.send({
      success: true,
      email: data.email,
      params,
      data,
    });
  });
});

module.exports = router;
