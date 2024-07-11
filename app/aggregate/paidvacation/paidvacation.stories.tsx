import { Meta, StoryObj } from '@storybook/react';

import Paidvacation from './paidvacation';

const meta = {
  title: 'nightshift/Aggregate',
  component: Paidvacation,
  args: {
    pv: {
      data: [
        {
          name: '山田太郎',
          count: 5,
          aggregationPeriod: '2021-12-31',
        },
      ],
    },
    sd: '2021-01-01',
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Paidvacation>;

export default meta;

export const Paid: StoryObj<typeof meta> = {};
