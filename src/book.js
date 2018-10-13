
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import './App.css'

let imgStyle={};

class Book extends React.Component {

imgStyle = {
    width: 128,
    height: 193,
    /*backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''}")` }}>*/
    backgroundImage: 'url(' + `${this.props.book.imageLinks.thumbnail}` +')'
    /*backgroundImage: 'url(' + imgUrl + ')',*/
};


  render() {
    console.log(this.imgStyle);

    return (
      <li>
        <div className="book">
          <div className="book-top">
          <div className="book-cover"
               style={this.imgStyle}>

          </div>
          </div>
            <div className="book-shelf-changer">
             <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
             </select>
            </div>
           </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
     </li>
   )
 }
}
export default Book;


