import Employees from './employees';
import { EmployeesData } from './types';

export default async function Page() {
  const employees = await getEmployeesData();
  return <Employees data={employees.data} />;
}

async function getEmployeesData() {
  const result: EmployeesData = {
    data: [
      {
        id: 1,
        icon: {
          value: null,
          backgroundColor: undefined,
        },
        name: 'サンプル',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
      {
        id: 2,
        icon: {
          value: '八',
          backgroundColor: 'bg-blue-300',
        },
        name: '八尋祐輝',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
      {
        id: 3,
        icon: {
          value: '北',
          backgroundColor: 'bg-red-300',
        },
        name: '北島蓮也',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
    ],
  };
  return await Promise.resolve(result);
}
