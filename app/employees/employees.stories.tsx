import { Meta, StoryObj } from '@storybook/react';

import Employees from './employees';

const meta = {
  title: 'employees/employees',
  component: Employees,
  args: {
    employees: {
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
    partners: {
      data: [
        {
          id: 1,
          name: '赤星設備',
          initial: '赤',
          phone: '080-1234-1234',
        },
        {
          id: 2,
          name: '吉川空調設備',
          initial: '吉',
          phone: '080-1234-1234',
        },
        {
          id: 3,
          name: '田中空調設備',
          initial: '田',
          phone: '080-1234-1234',
        },
      ],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Employees>;
export default meta;

export const Employee: StoryObj<typeof meta> = {};
