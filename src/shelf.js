
import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ReactDOM from 'react-dom'
import { Route, Link } from "react-router-dom";
import Book from './book'
import App from './App'
import BooksApp from './BooksApp'

class Shelf extends React.Component {

  render() {
    const { books, update, name } = this.props //passed from BooksApp
    return (
      <div>
       <div className="bookshelf">
          <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map(book =>
                    <li key={book.id}>
                      <Book update = {update} book={book} />
                    </li>
                 )}
              </ol>
            </div>
        </div>
       </div>
   )
 }
}

export default Shelf;