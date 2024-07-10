import { Meta, StoryObj } from '@storybook/react';

import Nightshift from './nightshift';

const meta = {
  title: 'nightshift/Aggregate',
  component: Nightshift,
  args: {
    nightshift: {
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
    },
    aggregateDate: {
      date: {
        startDate: '2024 / 04 / 01',
        endDate: '2024 / 04 / 31',
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Nightshift>;

export default meta;

export const Aggregate: StoryObj<typeof meta> = {};
