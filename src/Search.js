import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';

import Book from './Book';


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      searchBooks: []
    }
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })

    BooksAPI.search(this.state.query)
      .then(searchBooks => {

        // Merge results with the parent book state
        var books = [];

        if (searchBooks !== undefined) {
          books = searchBooks.map(book => {
            var findBook = this.props.books.find((userBook) => (userBook.id === book.id))
            if (findBook) {
              book.shelf = findBook.shelf;
            } else {
              book.shelf = 'none'
            }
            return book;
          });
        }

        this.setState({ searchBooks: books });
      });

  }

  render() {
    const { searchBooks } = this.state;
    const { categories, moveBook } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

            {
              (!searchBooks || searchBooks.error || searchBooks.length === 0) ?
                'No results' :
                searchBooks.map((book, idx) => (
                  <Book
                    key={idx}
                    book={book}
                    categories={categories}
                    moveBook={moveBook}
                  />
                ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;