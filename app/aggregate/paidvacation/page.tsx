import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Paidvacation from './paidvacation';

export default async function Page() {
  const paidVacation = await getPaidVactionData();
  const today = await getStartDay();
  return <Paidvacation pv={paidVacation} today={today} />;
}

async function getPaidVactionData() {
  return await api<ComponentProps<typeof Paidvacation>['pv']>('aggregate/paidvacation');
}

async function getStartDay() {
  const today: string = new Date()
    .toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replaceAll('/', '-');
  return await Promise.resolve(today);
}
