import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page404 from '../pages/Page404';

export function Router() {
  return (
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="page1" element={<Page1 />} />
      <Route exact path="page2" element={<Page2 />} />
      <Route exact path="*" element={<Page404 />} />
    </Routes>
  );
}
