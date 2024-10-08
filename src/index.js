import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import store from './Component/store'; 

import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


