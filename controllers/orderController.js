import Razorpay from 'razorpay';
import shortid from 'shortid';
import crypto from 'crypto';

const razorpay = new Razorpay({
    key_id: 'rzp_test_cljMP0gGJUkwTV',
    key_secret: 'xkraXQ5rC8Rn5lx4MeW9mlhE',
  });
  
  
const placeOrder=async (req,res)=>{
  
    
  const payment_capture = 1;
  const {amount} = req.body;
  const currency = 'INR';

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}


const orderVerify= (req, res) => {
    const { orderCreationId, razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;
  
    const shasum = crypto.createHmac('sha256', 'YOUR_RAZORPAY_KEY_SECRET');
    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
    const digest = shasum.digest('hex');
  
    if (digest === razorpaySignature) {
      res.json({ status: 'success' });
    } else {
      res.json({ status: 'failure' });
    }
  }
export {placeOrder,orderVerify}