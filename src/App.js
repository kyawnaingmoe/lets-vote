import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import 'antd/dist/antd.css';
import WebsiteLayout from './components/layout'

const App = () => {
    return  <Router><WebsiteLayout /></Router>
}

export default App;
