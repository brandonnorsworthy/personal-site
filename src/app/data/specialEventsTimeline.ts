export interface Event {
  date: string,
  description: string,
  icon: string
}

const specialEvents: Event[] = [
  {
    date: '25 March 2016',
    description: 'We started dating',
    icon: 'engage'
  },
  {
    date: '25 November 2021',
    description: 'First apartment',
    icon: 'key'
  },
  {
    date: '23 January 2023',
    description: 'We got engaged!',
    icon: 'ringbox'
  },
  {
    date: '20 April 2023',
    description: 'Our first home',
    icon: 'house'
  }
];

export default specialEvents;