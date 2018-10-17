import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Search from './search'
import BooksApp from './BooksApp'

class Nav extends React.Component {


 render() {
       return (
      <div>
      <Route exact path="/" component={BooksApp} />
      <Route exact path="/search" component={Search} />
      </div>
    )
  }
}

export default Nav;
