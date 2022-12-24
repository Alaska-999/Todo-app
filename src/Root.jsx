import React from 'react';
import App from "./App";
import {createGlobalStyle} from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Root = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>}>
                        <Route path=':filter' element={<App/>}/>
                    </Route>
                </Routes>
                <Global/>
            </BrowserRouter>
    );
};

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default Root;