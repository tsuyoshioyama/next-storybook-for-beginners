import { Meta, StoryObj } from '@storybook/react';

import Employees from './employees';

const meta = {
  title: 'employees/employees',
  component: Employees,
  args: {
    data: [
      {
        id: 1,
        name: 'サンプル',
        email: 'test@example.com',
        phone: '080-1234-1234',
        color: undefined,
        initial: null,
        hiredDate: '2021-01-01',
        isCalendarVisible: true,
        role: 'admin',
      },
      {
        id: 2,
        name: '八尋祐輝',
        email: 'test@example.com',
        phone: '080-1234-1234',
        color: '#ff0000',
        initial: '八',
        hiredDate: '2021-01-01',
        isCalendarVisible: true,
        role: 'admin',
      },
      {
        id: 3,
        name: '北島蓮也',
        email: 'test@example.com',
        phone: '080-1234-1234',
        color: '#00ff00',
        initial: '北',
        hiredDate: '2021-01-01',
        isCalendarVisible: true,
        role: 'admin',
      },
    ],
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Employees>;
export default meta;

export const Employee: StoryObj<typeof meta> = {};
