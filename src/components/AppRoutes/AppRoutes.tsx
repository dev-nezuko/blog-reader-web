import { Navigate, Route, Routes } from 'react-router-dom';
import { Posts } from 'pages/Posts/Posts';
import { SignIn } from 'pages/Signin/Signin';

import { routes } from 'constants/routes';

export const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route path={routes.signin} Component={SignIn} />
    <Route path={routes.posts} Component={Posts} />
    <Route path="*" element={<Navigate to={routes.posts} replace />} />
  </Routes>
);
