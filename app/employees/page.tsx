import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Employees from './employees';
import Partners from './employees';

export default async function Page() {
  const employees = await getEmployeesData();
  const partners = await getPartnerData();
  return <Employees employees={employees} partners={partners} />;
}

async function getEmployeesData() {
  return await api<ComponentProps<typeof Employees>['employees']>('employee');
}

async function getPartnerData() {
  return await api<ComponentProps<typeof Partners>['partners']>('partner');
}
