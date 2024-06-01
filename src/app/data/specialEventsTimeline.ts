export interface Event {
  date: string,
  description: string,
}

const specialEvents: Event[] = [
  {
    date: '3 March 2016',
    description: 'We started dating',
  },
  {
    date: '8 August 2020',
    description: 'Moved in together',
  },
  {
    date: '25 November 2021',
    description: 'First apartment',
  },
  {
    date: '23 January 2023',
    description: 'We got engaged!',
  },
  {
    date: '20 April 2023',
    description: 'Our first home',
  },
]

export default specialEvents;