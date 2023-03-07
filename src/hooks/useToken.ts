import { useEffect, useState } from 'react'

const randomUUID = crypto.randomUUID()

const useToken = () => {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${import.meta.env.PUBLIC_SERVER_URL as string}/${randomUUID}`, {
      headers: {
        origin: import.meta.env.PUBLIC_ORIGIN
      }
    })
      .then(async res => await res.json())
      .then(data => {
        setToken(data.token)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return { token, randomUUID }
}

export { useToken }
