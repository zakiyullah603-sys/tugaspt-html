const express = require('express')
const router = express.Router()

const midtransClient = require('midtrans-client')

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY
})

router.post('/qris', async (req, res) => {

  try {

    const parameter = {
      transaction_details: {
        order_id: 'ORDER-' + Date.now(),
        gross_amount: req.body.total
      },

      credit_card: {
        secure: true
      },

      enabled_payments: ['qris']
    }

    const transaction = await snap.createTransaction(parameter)

    res.json({
      token: transaction.token,
      redirect_url: transaction.redirect_url
    })

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

})

module.exports = router
