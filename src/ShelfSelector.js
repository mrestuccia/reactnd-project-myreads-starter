import React from 'react';

var ShelfSelector = ({ categories, book, moveBook }) => {

  return (
    <div className="book-shelf-changer">
      <select value={book.shelf || 'none'} onChange={(event) => moveBook(book, event.target.value)}>
        <option value="" disabled>Move to...</option>
        {
          categories.map((category, idx) => {
            return (
              <option
                key={idx}
                value={category.shelf}
              >
                {category.title}

              </option>
            )
          })
        };
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default ShelfSelector;