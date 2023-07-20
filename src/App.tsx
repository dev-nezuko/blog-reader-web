import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from 'components/AppRoutes/AppRoutes';

const App = (): JSX.Element => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
