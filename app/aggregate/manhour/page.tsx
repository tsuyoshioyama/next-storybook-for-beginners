import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Manhour from './manhour';

export default async function Page() {
  const manhour = await getManhourData();
  return <Manhour mh={manhour} />;
}

async function getManhourData() {
  const date = new Date()
    .toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replaceAll('/', '-');
  return await api<ComponentProps<typeof Manhour>['mh']>('aggregate/manhour/' + date);
}
