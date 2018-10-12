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
    console.log(JSON.stringify(response))
        console.log("hi" + JSON.stringify(response[0].title))
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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div><Shelf/></div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div><Shelf/></div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div><Shelf/></div>
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
