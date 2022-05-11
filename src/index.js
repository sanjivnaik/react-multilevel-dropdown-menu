import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import Menubar from './menu-components/Menubar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menubar />
  </React.StrictMode>
);