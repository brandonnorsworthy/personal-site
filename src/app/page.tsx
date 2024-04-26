import React from 'react'

import RouteTile from './components/RouteTile'
import globalLinks from './data/globalLinks'
import withLayout from './hocs/withLayout'
import HomeScene from './components/HomeScene'

interface HomeProps {
  responsiveConstraintClasses: string;
}

const Home: React.FC<HomeProps> = ({ responsiveConstraintClasses }) => {

  return (
    <main className='py-3 md:py-6 flex justify-center w-full min-h-[calc(100vh-48px)]'>
      <HomeScene />
      <article className={[responsiveConstraintClasses, "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 md:gap-6 h-full"].join(" ")}>
        {
          globalLinks.map((link, index) => {
            if (link.ignore) return null;

            return (<RouteTile
              title={link.name}
              description={link.description}
              model={link.model}
              disable={link.coming ? true : false}
              href={link.url}
              key={link.url + index}
              externalLink={link.externalLink} />)
          })
        }
      </article>
    </main>
  )
}

export default withLayout(Home);