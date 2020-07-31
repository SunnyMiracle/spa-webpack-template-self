import React from 'react';
import ReactDom from 'react-dom';
import App from './App';



const mountContainer = document.getElementById('mount_container');
// render to root mount element
ReactDom.render(<App/>, mountContainer);
