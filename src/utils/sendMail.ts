/* eslint-disable @typescript-eslint/promise-function-async */
const sendMail = (e: Event, token: string) => {
  e.preventDefault()

  fetch(import.meta.env.PUBLIC_SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      origin: import.meta.env.PUBLIC_ORIGIN,
      'Api-Key': token
    },
    body: JSON.stringify({
      subject: (
        document.querySelector('input[name="name"]') as HTMLInputElement
      ).value,
      from: (document.querySelector('input[name="email"]') as HTMLInputElement)
        .value,
      text: (
        document.querySelector(
          'textarea[name="message"]'
        ) as HTMLTextAreaElement
      ).value
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      alert('Message sent successfully!')
      location.reload()
    })
    .catch(error => {
      console.log(error)
    })
}

export { sendMail }
