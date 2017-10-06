import React from 'react';
import { Link } from 'react-router-dom';

import Bookshelf from './Bookshelf';


var Books = ({ categories, books, moveBook }) => {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {categories.map((category, idx) => {
            var sectionBooks = books.filter((book) => book.shelf === category.shelf);
            return (
              <Bookshelf 
                key={idx} 
                title={category.title} 
                books={sectionBooks} 
                categories={categories} 
                moveBook = {moveBook}
                />);
          })};
          </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
};

export default Books;
