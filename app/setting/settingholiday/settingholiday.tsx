import AddIcon from '@mui/icons-material/Add';
import { Button, MenuItem, Paper, TextField, Typography } from '@mui/material';

export default function SettingHoliday() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="px-3 pt-3">
      <div className="bg-indigo-200 pb-10 pt-5">
        <Typography component="h3" variant="h5" color="primary" className="mb-6 text-center font-bold">
          カレンダー休日設定
        </Typography>
        <div className="mb-6 grid grid-cols-3 bg-red-300">
          <TextField
            //select
            size="small"
            variant="outlined"
            className=""
            defaultValue={currentYear.toString()}
          >
            プルダウンメニュー
          </TextField>
          <Button variant="outlined" size="medium">
            表示
          </Button>
          <Button variant="contained" color="primary" size="medium" endIcon={<AddIcon />} href="#">
            休日を登録
          </Button>
        </div>
        <div className="flex justify-between bg-slate-200">
          <Typography>公休</Typography>
          <Paper className="px-10 pb-10 pt-5 shadow-lg">表</Paper>
        </div>
        <div className="flex justify-between">
          <Typography>祝日</Typography>
          <Paper className="px-10 pb-10 pt-5 shadow-lg">表</Paper>
        </div>
      </div>
    </div>
  );
}
