import { Paper, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import './deposit.css';
import { DepositData } from './types';

export default function Deposit({ data }: Readonly<DepositData>) {
  return (
    <Paper className="flex h-48 p-2">
      <div className="recent">
        <Typography component="h3" variant="h6" color="primary" gutterBottom>
          Recent Deposits
        </Typography>
        <Typography variant="h4" color="black">
          $
          {data.amount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          on {data.date}
        </Typography>
        <div className="link">
          <Link href="#"> View balance </Link>
        </div>
      </div>
    </Paper>
  );
}
