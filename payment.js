const payButton = document.getElementById('payButton')

payButton.addEventListener('click', async () => {

  const response = await fetch('/payment/qris', {

    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      total: 25000
    })

  })

  const data = await response.json()

  window.snap.pay(data.token)

})
