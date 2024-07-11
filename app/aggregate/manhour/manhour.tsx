import { MenuItem, Paper, TextField, Typography } from '@mui/material';

import { ManhourData } from './types';

export default function Manhour({ mh }: { mh: ManhourData }) {
  const selectBox = [
    { label: '2000年', value: '2000' },
    { label: '2001年', value: '2001' },
    { label: '2024年', value: '2024' },
  ];
  return (
    <div>
      <div className="pb-10 pt-5">
        <Typography component="h3" variant="h5" color="primary" className="mb-6 text-center font-bold">
          工数集計
        </Typography>
      </div>
      <div className="flex">
        <TextField select variant="outlined" size="small" label="年" className="w-1/4" defaultValue="2024">
          {selectBox.map((year) => (
            <MenuItem key={year.value} value={year.value}>
              {year.label}
            </MenuItem>
          ))}
        </TextField>
        <div>b</div>
        <div>c</div>
      </div>
      <Paper>bcdef</Paper>
    </div>
  );
}
