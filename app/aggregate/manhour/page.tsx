import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Manhour from './manhour';
import { ManhourData } from './types';

export default async function Page() {
  const manhour = await getManhourData();
  return <ManhourData mh={manhour} />;
}

async function getManhourData() {
  return await api<ComponentProps<typeof Manhour>['mh']>('aggregate/manhour');
}
