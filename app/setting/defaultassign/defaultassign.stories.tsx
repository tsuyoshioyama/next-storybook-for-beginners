import { Meta, StoryObj } from '@storybook/react';

import Defaultassign from './defaultassign';

const meta = {
  title: 'defaultassign/Defaultassign',
  component: Defaultassign,
  args: {
    da: {
      data: {
        weekdayAssign: 'string',
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
        holiday: true,
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Defaultassign>;

export default meta;

export const Main: StoryObj<typeof meta> = {};
