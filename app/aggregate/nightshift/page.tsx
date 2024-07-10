import Nightshift from './nightshift';
import { AggregateData } from './types';

export default async function Page() {
  const aggregate = await getTotallingData();
  //   const date = await getData();
  return <Nightshift data={aggregate.data} />;
}

async function getTotallingData(): Promise<AggregateData> {
  const response: AggregateData = {
    data: [
      {
        name: '八尋祐輝',
        count: 1,
      },
      {
        name: '大山強志',
        count: 7,
      },
    ],
  };
  return await Promise.resolve(response);
}

// async function getData() {
//   const result: Date = {
//     date: {
//       startDate: '2022-01-01',
//       endDate: '2022-01-31',
//     },
//   };
//   return await Promise.resolve(result);
// }
