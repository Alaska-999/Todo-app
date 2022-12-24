import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./Root";
import {Provider} from "react-redux";
import {configurateStore} from "./store";

const store = configurateStore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
  <Root/>
    </Provider>
);


