import { Navigate, Route, Routes } from 'react-router-dom';
import { Posts } from 'pages/Posts/Posts';
import { Signin } from 'pages/Signin/Signin';
import { Signup } from 'pages/Signup/Signup';

import { routes } from 'constants/routes';

export const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route path={routes.signup} Component={Signup} />
    <Route path={routes.signin} Component={Signin} />
    <Route path={routes.posts} Component={Posts} />
    <Route path="*" element={<Navigate to={routes.posts} replace />} />
  </Routes>
);
