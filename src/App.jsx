import React from 'react';
import './App.css';
import Header from './constants/header/header';
import AppRoutes from './routes/routes';
import Footer from './constants/footer/footer';

function App() {
  return (
    <div>
      <Header />
      <div id="content">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
