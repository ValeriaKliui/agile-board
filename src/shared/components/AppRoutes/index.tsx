import { ROUTES } from '@config';
import { Route, Routes } from 'react-router';

export const AppRoutes = () => {
  return (
    <Routes>
      {ROUTES.map(({ layout, children }, id) => (
        <Route element={layout} key={id}>
          {children.map(({ path, element, index }, id) =>
            index ? (
              <Route key={id} index element={element} />
            ) : (
              <Route key={id} path={path!} element={element} />
            ),
          )}
        </Route>
      ))}
    </Routes>
  );
};
