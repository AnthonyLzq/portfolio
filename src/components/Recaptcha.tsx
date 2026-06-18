import { useEffect, useRef, useState } from 'react'

import Social from './Social'
import { useToken } from '../hooks'
import { useIsMobile } from '../hooks/useIsMobile'

import '../styles/recaptcha.css'

const RECAPTCHA_SCRIPT_ID = 'google-recaptcha'
const RECAPTCHA_SITE_KEY = '6LfRX4okAAAAAEqe4RU2B5rH5tOvazQGil-5sqlp'

type ReCaptchaSize = 'compact' | 'normal'

type ReCaptchaRenderParameters = {
  callback: (token: string) => void
  'error-callback': () => void
  'expired-callback': () => void
  sitekey: string
  size: ReCaptchaSize
  theme: 'light'
}

type ReCaptchaApi = {
  ready?: (callback: () => void) => void
  render?: (
    container: HTMLElement,
    parameters: ReCaptchaRenderParameters
  ) => number
}

declare global {
  interface Window {
    grecaptcha?: ReCaptchaApi
  }
}

let recaptchaScriptPromise: Promise<void> | null = null

const getLoadedRecaptcha = () => {
  const recaptcha = window.grecaptcha

  if (recaptcha?.render === undefined) {
    return null
  }

  return recaptcha as ReCaptchaApi & Required<Pick<ReCaptchaApi, 'render'>>
}

const waitForRecaptcha = () => {
  return new Promise<ReCaptchaApi & Required<Pick<ReCaptchaApi, 'render'>>>(
    (resolve, reject) => {
      const timeout = window.setTimeout(() => {
        reject(new Error('Google reCAPTCHA did not finish loading'))
      }, 5000)

      const resolveWhenReady = () => {
        const recaptcha = getLoadedRecaptcha()

        if (recaptcha !== null) {
          window.clearTimeout(timeout)
          resolve(recaptcha)
          return
        }

        window.setTimeout(resolveWhenReady, 50)
      }

      window.grecaptcha?.ready?.(resolveWhenReady)
      resolveWhenReady()
    }
  )
}

const loadRecaptchaScript = async () => {
  recaptchaScriptPromise ??= new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `#${RECAPTCHA_SCRIPT_ID}`
    )
    const script = existingScript ?? document.createElement('script')

    script.addEventListener('load', () => resolve(), { once: true })
    script.addEventListener(
      'error',
      () => {
        recaptchaScriptPromise = null
        reject(new Error('Failed to load Google reCAPTCHA'))
      },
      { once: true }
    )

    if (existingScript === null) {
      script.id = RECAPTCHA_SCRIPT_ID
      script.src =
        'https://www.google.com/recaptcha/api.js?render=explicit&hl=en'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  })

  await recaptchaScriptPromise

  return await waitForRecaptcha()
}

const Recaptcha = () => {
  const [captchaToken, setCaptchaToken] = useState<string>('')
  const recaptchaRef = useRef<HTMLDivElement>(null)
  const { token, randomUUID } = useToken()
  const isMobile = useIsMobile()

  const onClick = async () => {
    try {
      const { sendMail } = await import('../utils/sendMail')

      await sendMail(token ?? '', randomUUID)
    } catch (error) {
      console.error(error)
      alert('There was an error sending your message. Please try again.')
    }
  }

  useEffect(() => {
    let cancelled = false

    void (async () => {
      try {
        const recaptcha = await loadRecaptchaScript()

        if (
          cancelled ||
          recaptchaRef.current === null ||
          window.grecaptcha === undefined
        ) {
          return
        }

        recaptchaRef.current.replaceChildren()
        setCaptchaToken('')
        recaptcha.render(recaptchaRef.current, {
          callback: token => {
            setCaptchaToken(token)
          },
          'error-callback': () => {
            setCaptchaToken('')
          },
          'expired-callback': () => {
            setCaptchaToken('')
          },
          sitekey: RECAPTCHA_SITE_KEY,
          size: isMobile ? 'compact' : 'normal',
          theme: 'light'
        })
      } catch (error) {
        console.error(error)
      }
    })()

    return () => {
      cancelled = true
      recaptchaRef.current?.replaceChildren()
    }
  }, [isMobile])

  return (
    <>
      <h1>Contact me</h1>
      <div className='container'>
        <div className='body'>
          <section className='dots'>
            <div className='left-side'>
              <div className='first-dot'></div>
              <div className='second-dot'></div>
              <div className='third-dot'></div>
            </div>
            <div className='right-site'></div>
          </section>
          <section id='form'>
            <div className='form-name'>
              <label htmlFor='name' style={{ marginBottom: '5px' }}>
                Name:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                className='input-name'
              />
            </div>
            <div className='form-email'>
              <label htmlFor='email' style={{ marginBottom: '5px' }}>
                Email:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                className='input-email'
              />
            </div>
            <div className='form-message'>
              <label htmlFor='message' style={{ marginBottom: '5px' }}>
                Message:
              </label>
              <textarea
                id='message'
                name='message'
                required
                className='input-message'
              ></textarea>
            </div>
            <div
              ref={recaptchaRef}
              style={{
                display: 'grid',
                marginBottom: '20px',
                placeContent: 'center'
              }}
            />
            <div className='button-links-container'>
              <Social height='24px' />
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#34c749',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  void onClick()
                }}
                disabled={captchaToken === ''}
              >
                Send
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export { Recaptcha }
