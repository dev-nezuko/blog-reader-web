import { useCallback } from 'react';
import { Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import { Form, Formik } from 'formik';
import { SigninPayload } from 'types/signinPayload';

import { TextInput } from 'components/TextInput/TextInput';

export const SigninForm = (): JSX.Element => {
  const handleSubmit = useCallback((values: SigninPayload) => {
    console.log(values);
  }, []);

  return (
    <>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <TextInput required fullWidth name="email" label="Email Address" type="email" autoComplete="email" />
            <TextInput
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox name="remember" value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
      <Link href="#" variant="body2" underline="hover">
        Don't have an account? Sign Up
      </Link>
    </>
  );
};
