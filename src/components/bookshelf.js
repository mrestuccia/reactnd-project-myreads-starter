import React, { Component } from 'react';

var ShelfChanger = ({ categories, current }) => {
  return (
    <div className="book-shelf-changer">
      <select defaultValue={current}>
        <option value="none" disabled>Move to...</option>
        {
          categories.map((category, idx) => {
            return (
              <option
                key={idx}
                value={category.shelf} >
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

var Book = ({ book, categories }) => {

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
          <ShelfChanger categories={categories} current={book.shelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
}


class Bookshelf extends Component {
  render() {
    const { title, books, categories } = this.props;

    return (<div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (<Book key={book.id} book={book} categories={categories} />))}
        </ol>
      </div>
    </div>
    );
  };
};

export default Bookshelf;