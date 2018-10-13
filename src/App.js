import React from 'react'
import * as BooksAPI from './BooksAPI'
import ReactDOM from 'react-dom'
import './App.css'
import { Link } from 'react-router-dom'
import {Route} from 'react-router-dom'
import Shelf from './shelf'


class BooksApp extends React.Component {
  state = {
    books: []
    //shelves: ["Currently Reading", "Want to Read", "Read"]
  }

//when component mounts gets the books from BooksAPI db
//BooksAPI.getAll() returns promise
//implicit return sets state to all books
  componentDidMount() {
    BooksAPI.getAll()
    .then(response => {
    this.setState({books: response});
   // console.log(JSON.stringify(response))
    console.log("hi" + JSON.stringify(response[0].title));
    console.log("hi" + JSON.stringify(response[0].shelf));
    console.log(response.length)
   });
  }

  update = (book, shelf) => {    //update state.book attribute w/ correct shelf
    BooksAPI.update(book, shelf)     // book {id}, shelf ["wantToRead", "currentlyReading", "read"]
    .then(response => {
    book.shelf = shelf; //set book shelf attribute to shelf
    this.setState({books: response});
    });
  }

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
                  update={this.update}
                  name ="Currently Reading"
                  books={this.state.books.filter(book => book.shelf === "currentlyReading")}
                />
                <Shelf
                  update={this.update}
                  name ="Want to Read"
                  books={this.state.books.filter(book => book.shelf === "wantToRead")}
                />
                <Shelf
                  update={this.update}
                  name ="Read"
                  books={this.state.books.filter(book => book.shelf === "read")}
                />
              </div>
           </div>

        </div>

          <div className="open-search">
            <Link to ="/search">Add a book</Link>
          </div>
    </div>
    )
  }
}

export default BooksApp
