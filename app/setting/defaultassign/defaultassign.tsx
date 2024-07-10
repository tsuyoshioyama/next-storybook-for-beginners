import { Paper, Typography } from '@mui/material';

import { DefaultAssign } from './types';

export default function Defaultassign({ da }: { da: DefaultAssign }) {
  return (
    <div>
      <div className="pb-10 pt-5">
        <Typography component="h3" variant="h5" color="primary" className="mb-6 text-center font-bold">
          デフォルトアサイン設定
        </Typography>
      </div>
      <Paper className="p-10">
        <div className="grid grid-cols-2">
          <div className="col-start-1 col-end-3">休日設定</div>
          <div className="col-start-3 col-end-4">平日アサイン先</div>
        </div>
      </Paper>
    </div>
  );
}
