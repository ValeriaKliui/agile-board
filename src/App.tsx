import { ROUTES } from '@config';
import { useAuthState } from '@shared/hooks';
import { BrowserRouter, Route, Routes } from 'react-router';

export const App = () => {
  useAuthState();

  return <BrowserRouter>
    <Routes>{ROUTES.map(({ layout, children }) => <Route element={layout}>
      {children.map(({ path, element, index }) => <Route index={index} path={path} element={element} />)}
    </Route>)}</Routes>
  </BrowserRouter>;
};
