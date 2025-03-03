import { ROUTES } from '@config';
import { useAuthState } from '@shared/hooks';
import { BrowserRouter, Route, Routes } from 'react-router';

export const App = () => {
  useAuthState();

  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map(({ layout, children }, id) => (
          <Route element={layout} key={id}>
            {children.map(({ path, element, index }, id) =>
              index ? (
                <Route key={id} index element={element} />
              ) : (
                <Route key={id} path={path} element={element} />
              )
            )}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};
