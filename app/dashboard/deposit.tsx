import { Paper, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { DepositData } from './types';

export default function Deposit({ data }: Readonly<DepositData>) {
  const date = new Date(data.date);
  const dateString = date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <Paper className="flex h-48 p-2">
      <div className="relative">
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
          on {dateString}
        </Typography>
        <div className="absolute bottom-0">
          <Link href="#"> View balance </Link>
        </div>
      </div>
    </Paper>
  );
}
