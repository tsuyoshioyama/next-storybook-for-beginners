import { Paper, Table, Typography } from '@mui/material';

import { PaidVacationData } from './types';

export default function Paidvacation({ pv, sd }: { pv: PaidVacationData; sd: string }) {
  console.log(pv.data);
  return (
    <div>
      <Typography component="h3" variant="h5" color="primary" className="mb-6 text-center font-bold">
        有給休暇集計
      </Typography>
      <Paper className="px-10 pb-10 pt-5 shadow-lg">
        <Table className="text-left">
          <thead className="border-x-0 border-b-[1px] border-t-0 border-solid border-slate-200 px-2 text-blue-600">
            <tr>
              <th className="w-2/5 p-2">社員名</th>
              <th className="w-2/5 p-2">集計期間</th>
              <th className="w-1/5 p-2">有給休暇日数</th>
            </tr>
          </thead>
          <tbody>
            {pv.data.map((pvd) => (
              <tr key={pvd.name} className="border-x-0 border-b-[1px] border-t-0 border-solid border-slate-200">
                <td className="p-2">{pvd.name}</td>
                <td className="p-2">
                  {sd} ~ {pvd.aggregationPeriod}
                </td>
                <td className="p-2">{pvd.count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>
    </div>
  );
}
