import { useEffect, useState } from 'react'

const randomUUID = crypto.randomUUID()

const isTokenResponse = (data: unknown): data is { token: string } => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'token' in data &&
    typeof data.token === 'string'
  )
}

const useToken = () => {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const loadToken = async () => {
      const serverUrl = import.meta.env.PUBLIC_SERVER_URL

      if (typeof serverUrl !== 'string' || serverUrl.length === 0) {
        throw new Error('Missing PUBLIC_SERVER_URL for contact form')
      }

      const response = await fetch(`${serverUrl}/${randomUUID}`, {
        headers: {
          origin: import.meta.env.PUBLIC_ORIGIN
        }
      })

      if (!response.ok) {
        throw new Error(`Failed to request contact token: ${response.status}`)
      }

      const data: unknown = await response.json()

      if (isTokenResponse(data)) {
        setToken(data.token)
        return
      }

      throw new Error('Invalid contact token response')
    }

    loadToken().catch(error => {
      console.warn(error)
    })
  }, [])

  return { token, randomUUID }
}

export { useToken }
