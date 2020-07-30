import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import Routers from './page/router';

class App extends React.Component {
    render() {
        import(/* webpackChunkName: "lodash" */ 'lodash').then((_) => {
            const element = document.createElement('div');
            element.innerHTML = _.join(['hello', 'lodash'], ' ');
            document.body.appendChild(element);
        })
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to="/a">a</Link></li>
                    <li><Link to="/b">b</Link></li>
                </ul>
                <Routers/>
            </BrowserRouter>
        );
    }
}

export default App;
