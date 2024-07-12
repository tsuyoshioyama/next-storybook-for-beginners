import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Holiday from './holiday';

export default async function Page() {
  const holiday = await getHolidayData();
  return <Holiday sh={holiday} />;
}

async function getHolidayData() {
  const month = new Date().getMonth() + 1;
  return await api<ComponentProps<typeof Holiday>['sh']>('setting/holiday?month=' + month);
}
