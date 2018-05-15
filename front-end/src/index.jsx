import React from 'react'
import ReactDom from 'react-dom'

import './img/favicon.ico';
import './css/index.css';
import './css/pure-min.css';
import App from './components/App.jsx'

ReactDom.render(
    <App />,
    document.querySelector("#main")
)