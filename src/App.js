import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";
import BooksApp from './BooksApp'
import Search from './search'

class App extends React.Component {


  state = {
    books: []
  }

//when component mounts gets the books from BooksAPI db
//BooksAPI.getAll() returns promise
//implicit return sets state to all books
  componentDidMount() {
   this.showAllBooks()
  }

  update = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(response => {
          book.shelf = shelf;
          this.showAllBooks(); //update app w/ new state
       });
  }

  showAllBooks = () => {
    BooksAPI.getAll().then(response => {
      this.setState({books: response})
    })
  }

 render() {
       return (
      <div className="app">
      <Route exact path="/" render={()=>(
        <BooksApp
        books={this.state.books}
        update={this.update}
        />
      )}/>

      <Route exact path="/search" render={()=>(
       <Search
       books={this.state.books}
       update={this.update}
       />
       )}/>
      </div>
    )
  }
}

export default App;
