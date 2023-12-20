export interface FaqQuestion {
  question: string;
  answer: string;
  link?: string;
}

export interface ScheduledEvent {
  time: string;
  title: string;
}

export interface ScheduledDay {
  dayOfWeek: string;
  date: string;
  note?: string;
  events: ScheduledEvent[];
}