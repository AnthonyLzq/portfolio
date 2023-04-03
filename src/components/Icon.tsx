import type { FC } from 'react'

type Props = {
  href: string
  image: string
  name: string
  height?: string
}

const Icon: FC<Props> = props => {
  const { href, image, name, height = '50px' } = props

  return (
    <a
      href={href}
      target='_blank'
      style={{ textDecoration: 'none', color: '#000', cursor: 'pointer' }}
    >
      <img
        src={image}
        alt={name}
        height={height}
        style={{ margin: '0.5rem', borderRadius: '4px' }}
      />
    </a>
  )
}

export default Icon
