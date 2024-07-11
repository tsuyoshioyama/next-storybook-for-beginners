import { Button, MenuItem, Paper, Table, TextField, Typography } from '@mui/material';

import { ManhourData } from './types';

export default function Manhour({ mh }: { mh: ManhourData }) {
  console.log(mh);
  const selectYear = [
    { label: '2000年', value: '2000' },
    { label: '2001年', value: '2001' },
    { label: '2024年', value: '2024' },
  ];

  const selectMonth = [
    { label: '1月', value: '1' },
    { label: '2月', value: '2' },
    { label: '3月', value: '3' },
    { label: '4月', value: '4' },
    { label: '5月', value: '5' },
    { label: '6月', value: '6' },
    { label: '7月', value: '7' },
    { label: '8月', value: '8' },
    { label: '9月', value: '9' },
    { label: '10月', value: '10' },
    { label: '11月', value: '11' },
    { label: '12月', value: '12' },
  ];
  return (
    <div>
      <div className="pb-10 pt-5">
        <Typography component="h3" variant="h5" color="primary" className="mb-6 text-center font-bold">
          工数集計
        </Typography>
      </div>
      <div className="flex">
        <TextField select variant="outlined" label="" className="mx-2 w-1/6" defaultValue="2024">
          {selectYear.map((year) => (
            <MenuItem key={year.value} value={year.value}>
              {year.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField select variant="outlined" label="" className="mx-2 w-1/6" defaultValue="1">
          {selectMonth.map((month) => (
            <MenuItem key={month.value} value={month.value}>
              {month.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="outlined" size="small" className="mx-2 px-4 py-1.5" href="#">
          表示
        </Button>
      </div>
      <Paper className="px-10 pb-10 pt-5">
        <Table>
          <thead>
            <tr className="border-x-0 border-b-[1px] border-t-0 border-solid border-slate-200 px-2 text-left text-blue-600">
              <th className="w-1/2">現場名</th>
              <th className="w-1/7">現場開始日時</th>
              <th className="w-1/7">現場最終日時</th>
              <th className="w-1/7">対象月の工数</th>
              <th className="w-1/7">総工数</th>
            </tr>
          </thead>
          <tbody>
            {mh.data.map((mhd) => (
              <tr key={mhd.name} className="border-x-0 border-b-[1px] border-t-0 border-solid border-slate-200 px-2">
                <td className="px-2 py-4">{mhd.name}</td>
                <td className="px-2 py-4">{mhd.startAt}</td>
                <td className="px-2 py-4">{mhd.endAt}</td>
                <td className="px-2 py-4">{mhd.manHour}</td>
                <td className="px-2 py-4">{mhd.totalManHour}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>
    </div>
  );
}
