import React from 'react';

import ShelfSelector from './ShelfSelector';

var Book = ({ book, categories, moveBook }) => {

  if (book === undefined) return;

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

export default Book;
