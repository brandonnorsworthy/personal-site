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
  hasScanned: boolean;
}

export interface FaqQuestion {
  question: string;
  answer: string;
  link?: string;
}
