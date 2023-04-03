import { useState } from 'react'
import {
  ReCaptchaProvider,
  ReCaptchaV2,
  EReCaptchaV2Theme,
  EReCaptchaV2Size
} from 'react-recaptcha-x'

import Social from './Social'
import { useToken } from '../hooks'
import { useIsMobile } from '../hooks/useIsMobile'

import '../styles/recaptcha.css'

const Recaptcha = () => {
  const [captchaToken, setCaptchaToken] = useState<string>('')
  const { token, randomUUID } = useToken()
  const isMobile = useIsMobile()

  const onClick = () => {
    import('../utils/sendMail')
      .then(({ sendMail }) => {
        sendMail(token ?? '', randomUUID)
      })
      .catch(error => {
        console.log(error)
      })
  }

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
            <ReCaptchaProvider
              siteKeyV2='6LfRX4okAAAAAEqe4RU2B5rH5tOvazQGil-5sqlp'
              langCode='en'
            >
              <div
                style={{
                  marginBottom: '20px'
                }}
              >
                <ReCaptchaV2
                  callback={token => {
                    if (typeof token === 'string') setCaptchaToken(token)
                  }}
                  theme={EReCaptchaV2Theme.Light}
                  size={
                    isMobile
                      ? EReCaptchaV2Size.Compact
                      : EReCaptchaV2Size.Normal
                  }
                  style={{
                    display: 'grid',
                    placeContent: 'center'
                  }}
                  key={String(isMobile)}
                />
              </div>
            </ReCaptchaProvider>{' '}
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
                  onClick()
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
