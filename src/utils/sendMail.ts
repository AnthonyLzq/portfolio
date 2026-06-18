type SendMailInput = {
  captchaToken: string
  from: string
  randomUUID: string
  subject: string
  text: string
  token: string
}

const sendMail = async (input: SendMailInput) => {
  const { captchaToken, from, randomUUID, subject, text, token } = input

  if (!token) {
    throw new Error('Cannot send contact form without an API token')
  }

  if (!captchaToken) {
    throw new Error('Cannot send contact form without a reCAPTCHA token')
  }

  const serverUrl = import.meta.env.PUBLIC_SERVER_URL

  if (typeof serverUrl !== 'string' || serverUrl.length === 0) {
    throw new Error('Missing PUBLIC_SERVER_URL for contact form')
  }

  const response = await fetch(`${serverUrl}/${randomUUID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      origin: import.meta.env.PUBLIC_ORIGIN,
      'Api-Key': token
    },
    body: JSON.stringify({
      captchaToken,
      from,
      subject,
      text
    })
  })

  if (!response.ok) {
    throw new Error(`Failed to send message: ${response.status}`)
  }

  return (await response.json()) as unknown
}

export { sendMail }
