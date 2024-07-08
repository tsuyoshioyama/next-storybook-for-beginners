'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { Box, Button, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { useFormState } from 'react-dom';

import { loginAction } from 'lib/actions/auth';
import { validation } from 'lib/validations/auth';

export default function Login({ onSubmit }: { onSubmit: typeof loginAction }) {
  const [lastResult, action] = useFormState(onSubmit, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: validation });
    },
    shouldValidate: 'onBlur',
  });
  return (
    <Box component="main">
      <div className="relative flex h-screen">
        <Image src="/image.png" alt="image" className="h-full w-full" width={1151} height={768} />
        <div className="absolute right-0 flex h-full w-3/5 flex-col place-content-center items-center bg-white px-4">
          <Typography component="h1" variant="h5" className="text-center font-bold text-indigo-500">
            業務管理システム
          </Typography>
          <Box component="form" action={action} {...getFormProps(form)} className="mt-2">
            <TextField
              margin="normal"
              required
              fullWidth
              label="メールアドレス"
              autoComplete="email"
              autoFocus
              {...getInputProps(fields.email, { type: 'email' })}
              key={fields.email.key}
              error={!!fields.email.errors}
              helperText={fields.email.errors}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="パスワード"
              autoComplete="current-password"
              {...getInputProps(fields.password, { type: 'password' })}
              key={fields.password.key}
              error={!!fields.password.errors}
              helperText={fields.password.errors}
            />
            {form.errors && <div className="text-center text-red-600">{form.errors}</div>}

            <Typography variant="body2" className="text-xs">
              パスワードを忘れた方は管理者にご連絡ください
            </Typography>
            <Button type="submit" fullWidth variant="contained" className="mb-4 mt-6">
              ログイン
            </Button>
          </Box>
          <div className="absolute bottom-4 text-center font-sans text-sm font-bold">© 2024 サンプル空調</div>
        </div>
      </div>
    </Box>
  );
}
