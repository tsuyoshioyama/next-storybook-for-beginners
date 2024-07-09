import { Meta, StoryObj } from '@storybook/react';

import Employees from './employees';

const meta = {
  title: 'employees/employees',
  component: Employees,
  args: {
    data: [
      {
        id: 1,
        icon: {
          value: null,
          backgroundColor: undefined,
        },
        name: 'サンプル',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
      {
        id: 2,
        icon: {
          value: '北',
          backgroundColor: 'bg-red-300',
        },
        name: '北島蓮也',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
      {
        id: 3,
        icon: {
          value: '八',
          backgroundColor: 'bg-blue-200',
        },
        name: '八尋祐輝',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
      {
        id: 4,
        icon: {
          value: '八',
          backgroundColor: 'bg-blue-200',
        },
        name: '八尋祐輝',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
      {
        id: 5,
        icon: {
          value: '八',
          backgroundColor: 'bg-blue-200',
        },
        name: '八尋祐輝',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
      {
        id: 6,
        icon: {
          value: '八',
          backgroundColor: 'bg-blue-200',
        },
        name: '八尋祐輝',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
      {
        id: 7,
        icon: {
          value: '八',
          backgroundColor: 'bg-blue-200',
        },
        name: '八尋祐輝',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
      {
        id: 8,
        icon: {
          value: '八',
          backgroundColor: 'bg-blue-200',
        },
        name: '八尋祐輝',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
      {
        id: 9,
        icon: {
          value: '八',
          backgroundColor: 'bg-blue-200',
        },
        name: '八尋祐輝',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
      {
        id: 10,
        icon: {
          value: '八',
          backgroundColor: 'bg-blue-200',
        },
        name: '八尋祐輝',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
      {
        id: 11,
        icon: {
          value: '八',
          backgroundColor: 'bg-blue-200',
        },
        name: '八尋祐輝',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
      {
        id: 12,
        icon: {
          value: '八',
          backgroundColor: 'bg-blue-200',
        },
        name: '八尋祐輝',
        email: 'test@example.com',
        phoneNumber: '080-1234-1234',
      },
    ],
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Employees>;
export default meta;

export const Employee: StoryObj<typeof meta> = {};
