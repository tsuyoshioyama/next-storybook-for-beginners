import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import { DefaultAssign } from './types';

export default function Defaultassign({ da }: { da: DefaultAssign }) {
  const trueStyle = 'h-full w-full p-2 text-base font-bold text-black border-gray-300';
  const falseStyle = 'h-full w-full p-2 text-base font-bold bg-red-50 border-red-300 text-red-500';
  const sunday = da.data.sunday ? '平日' : '休日';
  const monday = da.data.monday ? '平日' : '休日';
  const tuesday = da.data.tuesday ? '平日' : '休日';
  const wednesday = da.data.wednesday ? '平日' : '休日';
  const thursday = da.data.thursday ? '平日' : '休日';
  const friday = da.data.friday ? '平日' : '休日';
  const saturday = da.data.saturday ? '平日' : '休日';
  const holiday = da.data.holiday ? '平日' : '休日';

  return (
    <div>
      <div className="pb-10 pt-5">
        <Typography component="h3" variant="h5" color="primary" className="mb-6 text-center font-bold">
          デフォルトアサイン設定
        </Typography>
      </div>
      <Paper className="p-10">
        <div className="flex">
          <Box className="w-3/4">
            <Typography component="h4" variant="h6" color="primary" className="font-bold">
              休日/平日設定
            </Typography>
            <div className="grid grid-rows-2 gap-5 bg-white">
              <div className="grid h-[200px] grid-cols-4 p-2 text-center">
                <div className="p-1">
                  <div>日曜</div>
                  <Button variant="outlined" href="#" className={da.data.sunday ? trueStyle : falseStyle}>
                    {sunday}
                  </Button>
                </div>
                <div className="p-1">
                  <div>月曜</div>
                  <Button variant="outlined" href="#" className={da.data.monday ? trueStyle : falseStyle}>
                    {monday}
                  </Button>
                </div>
                <div className="p-1">
                  <div>火曜</div>
                  <Button variant="outlined" href="#" className={da.data.tuesday ? trueStyle : falseStyle}>
                    {tuesday}
                  </Button>
                </div>
                <div className="p-1">
                  <div>水曜</div>
                  <Button variant="outlined" href="#" className={da.data.wednesday ? trueStyle : falseStyle}>
                    {wednesday}
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-4 p-2 text-center">
                <div className="p-1">
                  <div>木曜</div>
                  <Button variant="outlined" href="#" className={da.data.thursday ? trueStyle : falseStyle}>
                    {thursday}
                  </Button>
                </div>
                <div className="p-1">
                  <div>金曜</div>
                  <Button variant="outlined" href="#" className={da.data.friday ? trueStyle : falseStyle}>
                    {friday}
                  </Button>
                </div>
                <div className="p-1">
                  <div>土曜</div>
                  <Button variant="outlined" href="#" className={da.data.saturday ? trueStyle : falseStyle}>
                    {saturday}
                  </Button>
                </div>
                <div className="p-1">
                  <div>祝日</div>
                  <Button variant="outlined" href="#" className={da.data.holiday ? trueStyle : falseStyle}>
                    {holiday}
                  </Button>
                </div>
              </div>
              <Box>
                曜日をクリックすると平日と休日を切り替えることができます。
                <br />
                休日として設定された曜日はデフォルトで休に配置されます。
              </Box>
            </div>
          </Box>

          <Box className="w-1/4 pl-4">
            <Typography component="h4" variant="h6" color="primary" className="font-bold">
              平日アサイン先
            </Typography>
            <TextField margin="normal" fullWidth label="名称" autoFocus />
          </Box>
        </div>
        <div className="text-right">
          <Button variant="contained" color="primary" size="medium" href="#">
            変更を保存
          </Button>
        </div>
      </Paper>
    </div>
  );
}
