import { Button, MenuItem, Paper, Table, TextField, Typography } from '@mui/material';

import { ManhourData } from './types';

export default function Manhour({ mh }: { mh: ManhourData }) {
  const currentYear = new Date().getFullYear();
  const selectYear = [
    { label: (currentYear - 2).toString() + '年', value: (currentYear - 2).toString() },
    { label: (currentYear - 1).toString() + '年', value: (currentYear - 1).toString() },
    { label: currentYear.toString() + '年', value: currentYear.toString() },
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
    <div className="px-3 pt-3">
      <div className="pb-10 pt-5">
        <div className="my-6">
          <Typography component="h3" variant="h5" color="primary" className="mb-6 text-center font-bold">
            工数集計
          </Typography>
        </div>
        <div className="grid gap-3">
          <div className="grid-cols-3 items-center">
            <TextField
              select
              size="small"
              variant="outlined"
              className="mr-2 w-1/6"
              defaultValue={currentYear.toString()}
            >
              {selectYear.map((year) => (
                <MenuItem key={year.value} value={year.value}>
                  {year.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField select size="small" variant="outlined" className="mr-2 w-1/6" defaultValue="1">
              {selectMonth.map((month) => (
                <MenuItem key={month.value} value={month.value}>
                  {month.label}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="outlined" size="medium" className="px-4 py-1.5" href="#">
              表示
            </Button>
          </div>
          <Paper className="px-10 pb-10 pt-5">
            <Table>
              <thead>
                <tr className="border-x-0 border-b-[1px] border-t-0 border-solid border-slate-200 px-2 text-left text-blue-600">
                  <th className="w-1/2 p-2">現場名</th>
                  <th className="w-1/7 p-2">現場開始日時</th>
                  <th className="w-1/7 p-2">現場最終日時</th>
                  <th className="w-1/7 p-2">対象月の工数</th>
                  <th className="w-1/7 p-2">総工数</th>
                </tr>
              </thead>
              <tbody>
                {mh.data.map((mhd) => (
                  <tr
                    key={mhd.name}
                    className="border-x-0 border-b-[1px] border-t-0 border-solid border-slate-200 px-2"
                  >
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
      </div>
    </div>
  );
}
