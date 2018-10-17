
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './search'
import App from './App'
import Shelf from './shelf'



let imgStyle={};

class Book extends React.Component {

imgStyle = {
    width: 128,
    height: 193,
    /*backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}")` }}>*/
    backgroundImage: 'url(' + `${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}` +')'
    /*backgroundImage: 'url(' + imgUrl + ')',*/
};


  render() {
    const { book, update } = this.props //passed from shelf
    console.log(this.imgStyle);
//    console.log(this.props.book);
//    console.log(this.props.book.shelf);

    return (
      <div>
        <div className="book">

          <div className="book-top">
            <div className="book-cover"
               style={this.imgStyle }>
            </div>

            <div className="book-shelf-changer">

             <select value= {book.shelf} onChange={(e) =>
              { update(book, e.target.value) }}>

              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
             </select>
            </div>

           </div>

          </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
     </div>
   )
 }
}
export default Book;


