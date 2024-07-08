import { Meta, StoryObj } from '@storybook/react';

import Employees from './employees';

const meta = {
  title: 'employees/employees',
  component: Employees,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Employees>;
export default meta;

export const Main: StoryObj<typeof meta> = {};
