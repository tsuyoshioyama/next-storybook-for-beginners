import AddIcon from '@mui/icons-material/Add';
import { Button, MenuItem, Paper, Table, TextField, Typography } from '@mui/material';

import { HolidayData } from './types';

export default function Holiday({ sh }: { sh: HolidayData }) {
  console.log(sh.data);
  const currentYear = new Date().getFullYear();
  const selectYear = [
    { label: (currentYear - 2).toString() + '年', value: (currentYear - 2).toString() },
    { label: (currentYear - 1).toString() + '年', value: (currentYear - 1).toString() },
    { label: currentYear.toString() + '年', value: currentYear.toString() },
  ];
  return (
    <div className="px-3 pt-3">
      <div className="pb-10 pt-5">
        <Typography component="h3" variant="h5" color="primary" className="mb-6 text-center font-bold">
          カレンダー休日設定
        </Typography>
        <div className="mb-6 flex justify-between">
          <div>
            <TextField select size="small" variant="outlined" className="mr-3" defaultValue={currentYear.toString()}>
              {selectYear.map((year) => (
                <MenuItem key={year.value} value={year.value}>
                  {year.label}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="outlined" size="medium">
              表示
            </Button>
          </div>
          <div>
            <Button variant="contained" color="primary" size="medium" endIcon={<AddIcon />} href="#" className="">
              休日を登録
            </Button>
          </div>
        </div>
        <div className="mb-6 flex justify-between">
          <Typography className="text-lg">公休</Typography>
          <Paper className="w-3/4 px-10 pb-10 pt-5 shadow-lg">
            <Table>
              <thead>
                <tr className="border-x-0 border-b-[1px] border-t-0 border-solid border-slate-200 px-2 text-left text-blue-600">
                  <th className="w-2/5">日付</th>
                  <th className="w-2/5">休日名</th>
                  <th className="w-1/5 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {sh.data.map((shd) => (
                  <tr
                    key={shd.id}
                    className="border-x-0 border-b-[1px] border-t-0 border-solid border-slate-200 px-2 text-left"
                  >
                    <td>{shd.date}</td>
                    <td>{shd.name}</td>
                    <td className="text-right">
                      <Button variant="outlined" size="medium">
                        編集
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Paper>
        </div>
        <div className="flex justify-between">
          <Typography className="text-lg">祝日</Typography>
          <Paper className="w-3/4 px-10 pb-10 pt-5 shadow-lg">
            <Table>
              <thead>
                <tr className="border-x-0 border-b-[1px] border-t-0 border-solid border-slate-200 px-2 text-left text-blue-600">
                  <th className="w-2/5">日付</th>
                  <th className="w-2/5">休日名</th>
                  <th className="w-1/5 text-right"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-x-0 border-b-[1px] border-t-0 border-solid border-slate-200 px-2 text-left">
                  <td>2021-01-01</td>
                  <td>元旦</td>
                  <td className="text-right">
                    <Button variant="outlined" size="medium">
                      編集
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Paper>
        </div>
      </div>
    </div>
  );
}
