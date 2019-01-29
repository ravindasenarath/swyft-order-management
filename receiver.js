'use strict';

exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  console.log('event: ',JSON.stringify(event));

  var body = event.Records[0].body;
  console.log("text: ",JSON.parse(body).text);

  try {

    var params = {
      stateMachineArn: process.env.TIMER_ARN,
      input: body
    };

    stepfunctions.INITIAL(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log('order process started')
        callback(null, response);
      }
    });
  } catch (error) {
    console.log(error);
    callback(error);
  }

  callback(null, response);
};
