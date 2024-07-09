'use client';

import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Paper, Tab, Tabs, Typography } from '@mui/material';
import * as React from 'react';

import { EmployeesData } from './types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Employees({ data }: EmployeesData) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className="pb-10 pt-5">
      <Typography component="h3" variant="h5" className="text-center font-bold text-indigo-500">
        社員・協力会社
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="社員一覧" {...a11yProps(0)} />
            <Tab label="協力会社一覧" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Paper className="px-10 pb-10 pt-5">
            <Box className="mb-5 text-right">
              <Button variant="contained" color="primary" size="medium" endIcon={<AddIcon />} href="#">
                社員を登録
              </Button>
            </Box>
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="border-x-0 border-b-[1px] border-t-0 border-solid border-slate-400 px-2 text-blue-600">
                  <th className="py-2 text-left">社員名</th>
                  <th className="py-2 text-left">メールアドレス</th>
                  <th className="py-2 text-left">電話番号</th>
                  <th className="w-16 text-center"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((employee) => (
                  <tr
                    key={employee.id}
                    className="border-x-0 border-b-[1px] border-t-0 border-solid border-slate-400 p-2"
                  >
                    <td className="flex px-5 py-3">
                      <div className={'w-[24px] rounded-full text-center' + ' ' + `${employee.icon.backgroundColor}`}>
                        {employee.icon.value}
                      </div>
                      <div className="pl-5">{employee.name}</div>
                    </td>
                    <td className="text-left">{employee.email}</td>
                    <td className="text-left">{employee.phoneNumber}</td>
                    <td className="text-right">
                      <Button variant="outlined" href="#">
                        編集
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Paper>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Tab2
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
