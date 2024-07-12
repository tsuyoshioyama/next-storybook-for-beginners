import { Meta, StoryObj } from '@storybook/react';

import SettingHoliday from './settingholiday';

const meta = {
  title: 'defaultassign/settingHoliday',
  component: SettingHoliday,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SettingHoliday>;

export default meta;

export const Settingholiday: StoryObj<typeof meta> = {};
