import '../style/main.scss';
import React from 'react';
import ReactDom from 'react-dom/client';
import App from '../components/App';

const render = () => {
  const root = ReactDom.createRoot(document.getElementById('root'));
  root.render(<App />);
};
render();
