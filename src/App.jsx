import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import Routers from './page/router';
import { Button } from 'antd';

require('./styles/index');

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to="/a">a</Link></li>
                    <li><Link to="/b">b</Link></li>
                </ul>
                <Button type="primary">theme</Button>
                <Routers/>
            </BrowserRouter>
        );
    }
}

export default App;
