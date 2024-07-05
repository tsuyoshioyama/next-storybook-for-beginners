import { Meta, StoryObj } from '@storybook/react';

import Component from './order';

const meta = {
  title: 'dashboard/Order',
  component: Component,
  args: {
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
      {
        id: 3,
        date: 'Sat Mar 16 2019 20:34:41 GMT+0900 (日本標準時)',
        name: 'Tom Scholz',
        shipTo: 'Boston, MA',
        paymentMethod: 'MC ⠀•••• 1253',
        amount: 100.81,
      },
      {
        id: 4,
        date: 'Sat Mar 16 2019 20:34:41 GMT+0900 (日本標準時)',
        name: 'Michael Jackson',
        shipTo: 'Gary, IN',
        paymentMethod: 'AMEX ⠀•••• 2000',
        amount: 654.39,
      },
      {
        id: 5,
        date: 'Fri Mar 15 2019 20:34:41 GMT+0900 (日本標準時)',
        name: 'Bruce Springsteen',
        shipTo: 'Long Branch, NJ',
        paymentMethod: 'VISA ⠀•••• 5919',
        amount: 212.79,
      },
    ],
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[750px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;

export const Order: StoryObj<typeof meta> = {};
