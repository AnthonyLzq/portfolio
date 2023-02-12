export type Tech = {
  name: string
  image: string
  url: string
}

const tech: Record<string, Tech> = {
  typescript: {
    name: 'TypeScript',
    image:
      'https://profilinator.rishav.dev/skills-assets/typescript-original.svg',
    url: 'https://www.typescriptlang.org'
  },
  javascript: {
    name: 'JavaScript',
    image:
      'https://profilinator.rishav.dev/skills-assets/javascript-original.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  node: {
    name: 'Node.js',
    image:
      'https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg',
    url: 'https://nodejs.org'
  },
  express: {
    name: 'Express',
    image:
      'https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg',
    url: 'https://expressjs.com'
  },
  fastify: {
    name: 'Fastify',
    image: 'https://avatars.githubusercontent.com/u/24939410',
    url: 'https://fastify.io'
  },
  graphql: {
    name: 'GraphQL',
    image: 'https://profilinator.rishav.dev/skills-assets/graphql.png',
    url: 'https://graphql.org'
  },
  mongo: {
    name: 'MongoDB',
    image:
      'https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg',
    url: 'https://www.mongodb.com'
  },
  postgres: {
    name: 'PostgreSQL',
    image:
      'https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg',
    url: 'https://www.postgresql.org'
  },
  remix: {
    name: 'Remix',
    image: 'https://avatars.githubusercontent.com/u/64235328?s=200&v=4',
    url: 'https://remix.run'
  },
  material: {
    name: 'MaterialUI',
    image: 'https://profilinator.rishav.dev/skills-assets/mui.png',
    url: 'https://material-ui.com'
  },
  supabase: {
    name: 'Supabase',
    image: 'https://avatars.githubusercontent.com/u/54469796',
    url: 'https://supabase.io'
  },
  prisma: {
    name: 'Prisma',
    image: 'https://profilinator.rishav.dev/skills-assets/prisma.png',
    url: 'https://www.prisma.io'
  },
  react: {
    name: 'React',
    image:
      'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
    url: 'https://reactjs.org'
  },
  'chart.js': {
    name: 'Chart.js',
    image: 'https://profilinator.rishav.dev/skills-assets/logo-title.svg',
    url: 'https://www.chartjs.org'
  },
  'mqtt.js': {
    name: 'MQTT.js',
    image: 'https://avatars.githubusercontent.com/u/10424911?s=200&v=4',
    url: 'https://github.com/mqttjs/MQTT.js'
  },
  tensorflow: {
    name: 'TensorFlow',
    image: 'https://profilinator.rishav.dev/skills-assets/tensorflow-icon.svg',
    url: 'https://www.tensorflow.org'
  },
  raspberry: {
    name: 'Raspberry Pi',
    image: 'https://profilinator.rishav.dev/skills-assets/raspberrypi.png',
    url: 'https://www.raspberrypi.org'
  }
}

export { tech }
