import { Paper, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import './order.css';
import { OrderData } from './types';

export default function Order({ data }: Readonly<OrderData>) {
  return (
    <Paper className="flex h-80 p-2">
      <div className="recent">
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Recent Orders
        </Typography>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Ship To</th>
                <th>Payment Method</th>
                <th className="table-last">Sale Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order.id}>
                  <td>{order.date}</td>
                  <td>{order.name}</td>
                  <td>{order.shipTo}</td>
                  <td>{order.paymentMethod}</td>
                  <td className="table-last">${order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="link">
          <Link href="#"> See more orders </Link>
        </div>
      </div>
    </Paper>
  );
}
