import type { CSSProperties, FC } from 'react'
import {
  EReCaptchaV2Size,
  EReCaptchaV2Theme,
  ReCaptchaProvider,
  ReCaptchaV2
} from 'react-recaptcha-x'

type RecaptchaProps = {
  isMobile: boolean
  style: CSSProperties
  v2Callback: (token: string | false | Error) => void
}

const Recaptcha: FC<RecaptchaProps> = props => {
  const { isMobile, v2Callback, style } = props

  return (
    <ReCaptchaProvider
      siteKeyV2='6LfRX4okAAAAAEqe4RU2B5rH5tOvazQGil-5sqlp'
      langCode='en'
    >
      <div style={style}>
        <ReCaptchaV2
          callback={v2Callback}
          theme={EReCaptchaV2Theme.Light}
          size={isMobile ? EReCaptchaV2Size.Compact : EReCaptchaV2Size.Normal}
          style={{
            display: 'grid',
            placeContent: 'center'
          }}
          key={String(isMobile)}
        />
      </div>
    </ReCaptchaProvider>
  )
}

export { Recaptcha }
