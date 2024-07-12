import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Settingholiday from './settingholiday';

export default async function Page() {
  const settingHoliday = await getSettingholidayData();
  return <Settingholiday shd={settingHoliday} />;
}

async function getSettingholidayData() {
  return await api<ComponentProps<typeof Settingholiday>['shd']>('setting/holiday');
}
