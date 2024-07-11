import { Meta, StoryObj } from '@storybook/react';

import Manhour from './manhour';

const meta = {
  title: 'aggregate/Manhour',
  component: Manhour,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Manhour>;

export default meta;

export const Man: StoryObj<typeof meta> = {};
