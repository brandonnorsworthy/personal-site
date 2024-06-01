export interface People {
  id: number;
  group_id: string;
  firstname: string;
  lastname: string;
  status: boolean;
}

export interface Group {
  id: number;
  name: string;
  confirmed: boolean;
  has_scanned: boolean;
  max_number_of_people: number;
}

export interface FaqQuestion {
  question: string;
  answer: string;
  link?: string;
}
