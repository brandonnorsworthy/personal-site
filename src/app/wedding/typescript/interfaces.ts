export interface IPeople {
  id: number;
  group_id: string;
  firstname: string;
  lastname: string;
  status: boolean;
}

export interface IGroup {
  id: number;
  name: string;
  confirmed: boolean;
  hasScanned: boolean;
}
