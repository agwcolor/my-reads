
import React from 'react'
import './App.css'

class Book extends React.Component {

  render() {
    const { book, update, shelf } = this.props //passed from shelf
    let imgStyle = {
    width: 128,
    height: 193,
    backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : ''}")`

};

    return (
      <div>
        <div className="book">

          <div className="book-top">
            <div className="book-cover"
               style={imgStyle }>
            </div>
            <div className="book-shelf-changer">
             <select value= {shelf} onChange={(e) =>{ update(book, e.target.value) }}>
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


