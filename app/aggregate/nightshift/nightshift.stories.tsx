import { Meta, StoryObj } from '@storybook/react';

import Nightshift from './nightshift';

const meta = {
  title: 'totalling/Totalling',
  component: Nightshift,
  args: {
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
    // date: {
    //   startDate: '2022-01-01',
    //   endDate: '2022-01-31',
    // },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Nightshift>;

export default meta;

export const Main: StoryObj<typeof meta> = {};
