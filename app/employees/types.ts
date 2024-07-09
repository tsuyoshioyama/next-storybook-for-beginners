export interface EmployeesData {
  data: {
    id: number;
    icon: {
      value: string | null;
      backgroundColor: string | undefined;
    };
    name: string;
    email: string;
    phoneNumber: string;
  }[];
}
