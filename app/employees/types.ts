export interface EmployeesData {
  data: {
    id: number;
    name: string;
    email: string;
    phone: string;
    color: string | undefined;
    initial: string | null;
    hiredDate: string;
    isCalendarVisible: boolean;
    role: string;
  }[];
}
