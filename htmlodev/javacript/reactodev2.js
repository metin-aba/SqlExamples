import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Features />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  );
}

export default App;



