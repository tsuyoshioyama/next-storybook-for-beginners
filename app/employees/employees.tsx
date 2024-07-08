import { Box, Typography } from '@mui/material';

export default function Employees() {
  return (
    <Box className="bg-red-500 pl-3 pr-3 pt-3">
      <Box className="bg-red-300 pb-10 pt-5">
        <Typography component="h3" variant="h5" className="text-center font-bold text-indigo-500">
          社員・協力会社
        </Typography>
        <Box className="flex">
          <div className="text-black">社員一覧</div>
          <div>協力会社一覧</div>
        </Box>
        <Box>
          <div className="text-right">社員を登録ボタン</div>
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="table-header">
                <th className="text-left">社員名</th>
                <th className="text-center">メールアドレス</th>
                <th className="text-center">電話番号</th>
                <th className="text-right">編集ボタン</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-body">
                <td className="flex">
                  <div>アイコン</div>
                  <div>名前</div>
                </td>
                <td className="text-center">test@example.com</td>
                <td className="text-center">080-1234-1234</td>
                <td className="text-right">編集ボタン</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
    </Box>
  );
}
