import type { FC } from 'react'
import Icon from './Icon'

type Props = {
  height?: string
}

const Social: FC<Props> = props => {
  const { height = '50px' } = props

  return (
    <div>
      <Icon
        href='https://www.linkedin.com/in/anthony-luzquinos/'
        image='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg'
        name='linkedin'
        height={height}
      />
      <Icon
        href='https://github.com/AnthonyLzq'
        image='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg'
        name='github'
        height={height}
      />
      <Icon
        href='https://twitter.com/Anthony_Lzq'
        image='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg'
        name='twitter'
        height={height}
      />
      <Icon
        href='https://www.npmjs.com/~anthonylzq'
        image='https://static.npmjs.com/f1786e9b7cba9753ca7b9c40e8b98f67.png'
        name='npm'
        height={height}
      />
    </div>
  )
}

export default Social
