import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Paidvacation from './paidvacation';

export default async function Page() {
  const paidVacation = await getPaidVactionData();
  const startDay = await getStartDay();
  return <Paidvacation pv={paidVacation} sd={startDay} />;
}

async function getPaidVactionData() {
  return await api<ComponentProps<typeof Paidvacation>['pv']>('aggregate/paidvacation');
}

async function getStartDay() {
  const start: string = '2023-04-01';
  return await Promise.resolve(start);
}
