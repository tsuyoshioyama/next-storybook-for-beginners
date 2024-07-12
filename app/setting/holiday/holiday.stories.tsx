import { Meta, StoryObj } from '@storybook/react';

import Holiday from './holiday';

const meta = {
  title: 'defaultassign/settingHoliday',
  component: Holiday,
  args: {
    sh: {
      data: [
        {
          id: 1,
          date: '2022-01-01',
          name: '元日',
          isNationalHoliday: true,
        },
      ],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Holiday>;

export default meta;

export const Settingholiday: StoryObj<typeof meta> = {};
