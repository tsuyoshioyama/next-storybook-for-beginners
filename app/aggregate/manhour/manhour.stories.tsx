import { Meta, StoryObj } from '@storybook/react';

import Manhour from './manhour';

const meta = {
  title: 'aggregate/Manhour',
  component: Manhour,
  args: {
    mh: {
      data: [
        {
          name: 'イオン香椎浜',
          startAt: '2024-01-01',
          endAt: '2024-01-31',
          manHour: 100,
          totalManHour: 1000,
        },
        {
          name: 'イオン香椎浜',
          startAt: '2024-10-11',
          endAt: '2024-11-20',
          manHour: 10,
          totalManHour: 200,
        },
      ],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Manhour>;

export default meta;

export const Man: StoryObj<typeof meta> = {};
