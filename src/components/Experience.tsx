import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { IconBriefcase, IconStarFilled } from '@tabler/icons-react'

import 'react-vertical-timeline-component/style.min.css'
import '../styles/experience.css'

const Experience = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        id='current'
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        date='June 2022 - Present'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IconBriefcase />}
      >
        <h3 className='vertical-timeline-element-title'>
          Sr. Node.js Developer
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>
          <a href='https://distillery.com' target='_blank' rel='noreferrer'>
            Distillery
          </a>{' '}
          - Buenos Aires, Argentina
        </h4>
        <p>
          Node.js developer currently working in a service that provides
          automated search and removal of personally identifiable information
          with a JavaScript - Koa - RabbitMq - Puppeteer stack.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='November 2021 - June 2022'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IconBriefcase />}
      >
        <h3 className='vertical-timeline-element-title'>Backend Developer</h3>
        <h4 className='vertical-timeline-element-subtitle'>
          <a href='https://kashin.app' target='_blank' rel='noreferrer'>
            Kashin
          </a>{' '}
          - Lima, Peru
        </h4>
        <p>
          Backend developer in charge of APIs built with a Node.js - TypeScript
          - MongoDB - RabbitMq - Puppeteer stack. Also, developer in charge of
          automation integrations.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='June 2020 - June 2022'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IconBriefcase />}
      >
        <h3 className='vertical-timeline-element-title'>
          Full Stack Developer
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>
          <a href='https://chazki.com' target='_blank' rel='noreferrer'>
            Chazki
          </a>{' '}
          - Lima, Peru
        </h4>
        <p>
          Full Stack Developer and TI support of a multi country B2B retail
          system built with a Java - Angular - MERN - GraphQL stack.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='February 2020 - April 2020'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<IconBriefcase />}
      >
        <h3 className='vertical-timeline-element-title'>SRE maintainer</h3>
        <h4 className='vertical-timeline-element-subtitle'>
          <a href='https://krowdy.com' target='_blank' rel='noreferrer'>
            Krowdy
          </a>{' '}
          - Lima, Peru
        </h4>
        <p>
          MERN developer, and responsible for the system availability and the
          response in case of emergency.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<IconStarFilled />}
      />
    </VerticalTimeline>
  )
}

export default Experience
