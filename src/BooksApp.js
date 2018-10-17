import React from 'react'
import * as BooksAPI from './BooksAPI'
import ReactDOM from 'react-dom'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Shelf from './shelf'
import App from './App'
import Search from './search'


class BooksApp extends React.Component {

  render() {
    return (

      <div className="app">

        <div className="list-books">

          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>

            <div className="list-books-content">
              <div>
                <Shelf
                  update={this.props.update}
                  name ="Currently Reading"
                  books={this.props.books
                    .filter(book => book.shelf === "currentlyReading")}
                />
                <Shelf
                  update={this.props.update}
                  name ="Want to Read"
                  books={this.props.books.filter(book => book.shelf === "wantToRead")}
                />
                <Shelf
                  update={this.props.update}
                  name ="Read"
                  books={this.props.books.filter(book => book.shelf === "read")}
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
