import { Router } from '../router/Router';
import { BrowserRouter } from 'react-router-dom';

import '../App.css';

export default function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </>
  );
}
