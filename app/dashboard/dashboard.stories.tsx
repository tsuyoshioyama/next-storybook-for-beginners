import { Meta, StoryObj } from '@storybook/react';

import Component from './dashboard';

const meta = {
  title: 'dashboard/Dashboard',
  component: Component,
  args: {
    chart: {
      data: [
        { time: '00:00', amount: 0 },
        { time: '03:00', amount: 200 },
        { time: '06:00', amount: 600 },
        { time: '09:00', amount: 800 },
        { time: '12:00', amount: 1500 },
        { time: '15:00', amount: 2000 },
        { time: '18:00', amount: 2400 },
        { time: '21:00', amount: 2400 },
        { time: '24:00', amount: 2500 },
      ],
    },
    deposit: {
      data: { amount: 3024.0, date: '15 March, 2019' },
    },
    order: {
      data: [
        {
          id: 1,
          date: 'Sat Mar 16 2019 20:34:41 GMT+0900 (日本標準時)',
          name: 'Elvis Presley',
          shipTo: 'Tupelo, MS',
          paymentMethod: 'VISA ⠀•••• 3719',
          amount: 312.44,
        },
        {
          id: 2,
          date: 'Sat Mar 16 2019 20:34:41 GMT+0900 (日本標準時)',
          name: 'Paul McCartney',
          shipTo: 'London, UK',
          paymentMethod: 'VISA ⠀•••• 2574',
          amount: 866.99,
        },
      ],
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[1000px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const Dashboard: StoryObj<typeof meta> = {};
