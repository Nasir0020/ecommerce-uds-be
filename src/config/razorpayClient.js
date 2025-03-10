const Razorpay = require('razorpay');

apiKey="rzp_test_9y3uLFvGdEy2BV"
apiSecret="fIv5KpQrlRaWByOJkZ5kvf5D"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;