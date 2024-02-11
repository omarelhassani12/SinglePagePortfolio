import React from 'react';
import './App.css';
import Header from './constants/header/header';
import AppRoutes from './routes/routes';

function App() {
  return (
    <div>
      <Header />
      <div id="content">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
