import { Paper, Table, TableRow, Typography } from '@mui/material';

import { AggregateData } from './types';

export default function Totalling(data: AggregateData) {
  return (
    <div>
      <div className="bg-red-300 pb-10 pt-5">
        <Typography component="h3" variant="h5" color="primary" className="mb-6 text-center font-bold">
          夜間勤務集計
        </Typography>
        <div className="mb-3 flex rounded bg-indigo-50 px-5 py-3">
          <Typography className="">集計期間 :</Typography>
          <Typography className="">日付</Typography>
        </div>
        <Paper className="px-10 pb-10 pt-5 shadow-lg">
          <Table className="w-full table-fixed border-collapse">
            <thead>
              <TableRow
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                }}
                className="px-2 text-blue-600"
              >
                <th className="py-2 text-left">社員名</th>
                <th className="py-2 text-left">夜間勤務日数</th>
              </TableRow>
            </thead>
            <tbody>
              {data.data.map((user) => (
                <TableRow
                  sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                  }}
                  key={user.name}
                  className="px-2"
                >
                  <td className="py-2">{user.name}</td>
                  <td className="py-2">{user.count}</td>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </Paper>
      </div>
    </div>
  );
}
