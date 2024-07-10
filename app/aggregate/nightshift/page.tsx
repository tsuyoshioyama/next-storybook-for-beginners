import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Nightshift from './nightshift';
import { Date } from './types';

export default async function Page() {
  const aggregate = await getAggregateData();
  const aggregateDate = await getData();
  return <Nightshift nightshift={aggregate} aggregateDate={aggregateDate} />;
}

async function getAggregateData() {
  return await api<ComponentProps<typeof Nightshift>['nightshift']>('aggregate/nightshift');
}

async function getData(): Promise<Date> {
  const result: Date = {
    date: {
      startDate: '2024 / 04 / 01',
      endDate: '2024 / 04 / 31',
    },
  };
  return await Promise.resolve(result);
}
