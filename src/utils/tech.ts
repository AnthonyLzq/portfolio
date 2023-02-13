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
    image:
      'data:image/png;base64,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',
    url: 'https://www.raspberrypi.org'
  }
}

export { tech }
