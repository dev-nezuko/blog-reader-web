import { useCallback } from 'react';
import { Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import { Form, Formik } from 'formik';
import { SignupPayload } from 'types/signupPayload';

import { TextInput } from 'components/TextInput/TextInput';
import { routes } from 'constants/routes';

export const SignupForm = (): JSX.Element => {
  const handleSubmit = useCallback((values: SignupPayload) => {
    console.log(values);
  }, []);

  return (
    <>
      <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <TextInput required fullWidth name="name" label="Full Name" autoComplete="user-name" />
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
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <Link href={routes.signin} variant="body2" underline="hover">
        Already have an account? Sign In
      </Link>
    </>
  );
};
