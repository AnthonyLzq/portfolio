const getFormElement = <Element extends HTMLInputElement | HTMLTextAreaElement>(
  selector: string
) => {
  const element = document.querySelector<Element>(selector)

  if (element === null) {
    throw new Error(`Missing contact form element: ${selector}`)
  }

  return element
}

const sendMail = async (token: string, randomUUID: string) => {
  if (!token) {
    throw new Error('Cannot send contact form without an API token')
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
      subject: getFormElement<HTMLInputElement>('input[name="name"]').value,
      from: getFormElement<HTMLInputElement>('input[name="email"]').value,
      text: getFormElement<HTMLTextAreaElement>('textarea[name="message"]')
        .value
    })
  })

  if (!response.ok) {
    throw new Error(`Failed to send message: ${response.status}`)
  }

  const data: unknown = await response.json()

  console.log(data)
  alert('Message sent successfully!')
  location.reload()
}

export { sendMail }
