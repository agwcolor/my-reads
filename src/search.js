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
    query: "",
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    this.search(query)
  }

  search = (query) => {
    if(query) {
      console.log(query)
      BooksAPI.search(query)
       .then((searchResults) => {
       this.setState({ searchResults: searchResults});
     //  console.log(JSON.stringify(searchResults))
        })
       .catch(() => this.setState({searchResults: [] }))
    }else{
    this.setState({ searchResults: [] });
    }
  }

  render() {
    const { books, update } = this.props //from BooksApp
    const { query, searchResults } = this.state //from BooksApp

    return (
      <div>

        <div className="search-books">
          <div className="search-books-bar">

            <Link to="/" className="close-search">Close</Link>

             <div className="search-books-input-wrapper">
              <input type="text"
                     placeholder="Search by title or author"
                     value={query}
                     size="30"
                     onChange={(event) => this.updateQuery(event.target.value)}
               />
             </div>
          </div>
         </div>

        <div className="search-books-results">
            <ol className="books-grid">

               {searchResults.length >=1 ?
                (searchResults.map(sr => {
                  let shelf="none"
                  books.map(bk => (
                    bk.id === sr.id ?
                    shelf = bk.shelf : ''
                    ))

                  return(
                    <li key={sr.id}>
                     <Book book={sr} update={update} shelf={shelf}/>
                    </li>
                   );
               }))
               : ''
             }
              </ol>
        </div>

  </div>

    );
   }
}

export default Search

