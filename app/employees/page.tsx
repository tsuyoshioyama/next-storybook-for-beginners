import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Employees from './employees';

export default async function Page() {
  const employees = await getEmployeesData();
  return <Employees employees={employees} />;
}

async function getEmployeesData() {
  return await api<ComponentProps<typeof Employees>['employees']>('employee');
}
