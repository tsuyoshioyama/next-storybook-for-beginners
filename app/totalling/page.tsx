import Totalling from './totalling';
import { Date, TotallingData } from './types';

export default async function Page() {
  const totalling = await getTotallingData();
  const date = await getData();
  return <Totalling data={totalling.data} date={date} />;
}

async function getTotallingData(): Promise<TotallingData> {
  const response: TotallingData = {
    data: [
      {
        id: 1,
        name: '八尋祐輝',
        nightWorkDays: 1,
      },
      {
        id: 2,
        name: '大山強志',
        nightWorkDays: 7,
      },
    ],
  };
  return await Promise.resolve(response);
}

async function getData() {
  const result: Date = {
    date: {
      startDate: '2022-01-01',
      endDate: '2022-01-31',
    },
  };
  return await Promise.resolve(result);
}
