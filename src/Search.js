import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';

import Book from './Book';


class Search extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })

    BooksAPI.search(this.state.query)
      .then(books => {
        this.setState({ books: books });
      });

  }

  render() {

    const { books } = this.state;

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
              (!books || books.error || books.length === 0) ?
                'No results' :
                books.map((book, idx) => (
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