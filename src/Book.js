import React from 'react';
import PropTypes from 'prop-types';

import ShelfSelector from './ShelfSelector';

var Book = ({ book, categories, moveBook }) => {

  var divStyle = {
    width: 128,
    height: 193,
    backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')'
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={divStyle} ></div>
          <ShelfSelector
            categories={categories}
            book={book}
            moveBook={moveBook}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
}

Book.PropTypes = {
  book: PropTypes.object.isRequired
}

export default Book;
