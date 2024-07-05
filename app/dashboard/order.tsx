import { Paper, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import './order.css';
import { OrderData } from './types';

export default function Order({ data }: Readonly<OrderData>) {
  return (
    <Paper className="flex p-2">
      <div className="pl-1 pr-1 pt-1">
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Recent Orders
        </Typography>
        <div className="text-justify">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="table-header">
                <th className="table-data">Date</th>
                <th className="table-data">Name</th>
                <th className="table-data">Ship To</th>
                <th className="table-data">Payment Method</th>
                <th className="table-last">Sale Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order.id} className="table-body">
                  <td className="table-data">
                    {order.date.split(' ')[2]} {order.date.split(' ')[1]},{order.date.split(' ')[3]}
                  </td>
                  <td className="table-data">{order.name}</td>
                  <td className="table-data">{order.shipTo}</td>
                  <td className="table-data">{order.paymentMethod}</td>
                  <td className="table-last">${order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pb-2 pt-6">
          <Link href="#"> See more orders </Link>
        </div>
      </div>
    </Paper>
  );
}
