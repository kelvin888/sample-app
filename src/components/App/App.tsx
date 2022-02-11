import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../../pages/Dashboard/Dashboard';
import { Login } from '../../pages/Login/Login';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
