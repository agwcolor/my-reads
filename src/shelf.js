
import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ReactDOM from 'react-dom'
import { Route, Link } from "react-router-dom";
import Book from './book'
import BooksApp from './App'

class Shelf extends React.Component {

  render() {
    return (
      <div>
       <div className="bookshelf">
                 <h2 className="bookshelf-title">Currently Doing</h2>
                  <div className="bookshelf-books">
                   <ol className="books-grid">
                   <Book/>
                   </ol>
                  </div>
                </div>
               </div>
   )
 }
}

export default Shelf;


