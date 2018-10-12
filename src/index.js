import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BooksApp from './App'
import Search from './search'

import './index.css'

ReactDOM.render(
	<Router>
	<div>
        <Route exact path="/" component={BooksApp} />
        <Route path="/search" component={Search} />
        <BooksApp />
     </div>
	</Router>,
	document.getElementById('root')
)
