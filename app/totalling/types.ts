export interface TotallingData {
  data: {
    id: number;
    name: string;
    nightWorkDays: number;
  }[];
}

export interface Date {
  date: {
    startDate: string;
    endDate: string;
  };
}
