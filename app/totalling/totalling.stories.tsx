import { Meta, StoryObj } from '@storybook/react';

import Totalling from './totalling';

const meta = {
  title: 'totalling/Totalling',
  component: Totalling,
  args: {
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
    date: {
      startDate: '2022-01-01',
      endDate: '2022-01-31',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Totalling>;

export default meta;

export const Main: StoryObj<typeof meta> = {};
