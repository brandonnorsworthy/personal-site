import Link from 'next/link'
import React, { useContext } from 'react'

import RouteTile from './components/RouteTile'
import globalLinks from './data/globalLinks'
import withLayout from './hocs/withLayout'

interface HomeProps {
  responsiveConstraintClasses: string;
}

const Home: React.FC<HomeProps> = ({ responsiveConstraintClasses }) => {

  return (
    <main className='py-6 flex justify-center w-full min-h-[calc(100vh-48px)] bg-gray-600'>
      <article className={[responsiveConstraintClasses, "grid grid-cols-2 gap-6 h-full"].join(" ")}>
        {
          globalLinks.map((link, index) => {
            if (link.ignore) return null;

            return (<RouteTile
              title={link.name}
              description={link.description}
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