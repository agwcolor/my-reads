import React from 'react'
import './App.css'
import { Link } from "react-router-dom";
import Shelf from './shelf'


class BooksApp extends React.Component {

  render() {
    const { books, update } = this.props
    return (

      <div className="app">

        <div className="list-books">

          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>

            <div className="list-books-content">
              <div>
                <Shelf
                  update={update}
                  name ="Currently Reading"
                  books={books.filter(book => book.shelf === "currentlyReading")}
                />
                <Shelf
                  update={update}
                  name ="Want to Read"
                  books={books.filter(book => book.shelf === "wantToRead")}
                />
                <Shelf
                  update={update}
                  name ="Read"
                  books={books.filter(book => book.shelf === "read")}
                />
              </div>
           </div>

        </div>
       <div className="open-search">
              <Link to="/search">
              Add a book
              </Link>
      </div>
      <div>

      </div>
      </div>
    )}
}

export default BooksApp
