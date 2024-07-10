import { ComponentProps } from 'react';

import { api } from 'lib/api';

import Defaultassign from './defaultassign';
import { DefaultAssign } from './types';

export default async function Page() {
  const defaultAssign = await getDefaultAssignData();
  return <Defaultassign da={defaultAssign} />;
}

async function getDefaultAssignData() {
  return await api<ComponentProps<typeof Defaultassign>['da']>('setting/defaultassign');
}
