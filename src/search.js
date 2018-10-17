import React from 'react'
import * as BooksAPI from './BooksAPI'
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import './App.css'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './book'
import App from './App'


class Search extends React.Component {

state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.search(query)
  }

  search = (query) => {
    if(query) {
      BooksAPI.search(query)
       .then((searchResults) => {
       this.setState({ searchResults: searchResults});
       console.log(JSON.stringify(searchResults))
        })
       .catch(() => this.setState({searchResults: [] }))
    }else{
    this.setState({ searchResults: [] });
    }
  }

  render() {
    console.log(this.state.searchResults)
    return (
      <div>

        <div className="search-books">
          <div className="search-books-bar">

            <Link to="/" className="close-search">Close</Link>

             <div className="search-books-input-wrapper">
              <input type="text"
                     placeholder="Search by title or author"
                     value={this.state.query}
                     onChange={(event) => this.updateQuery(event.target.value)}
               />
            </div>
         </div>
         </div>

        <div className="search-books-results">
            <ol className="books-grid">
              {this.state.searchResults.map(sr => {
                let shelf="none";
                this.props.books.map(book => (
                  book.id === sr.id ?
                  shelf = book.shelf : ''
                  ));
                return(
                  <li key={sr.id}>
                  <Book book={sr} update={this.props.update} shelf={shelf}
                  />
                  </li>
                  );
              })}
              </ol>
        </div>

  </div>

    );
   }
}

export default Search

