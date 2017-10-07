import React from 'react';
import { Route } from 'react-router-dom';

// API connector
import * as BooksAPI from './BooksAPI';

// CSS
import './App.css';

// Components
import Books from './Books'
import Search from './Search';



class App extends React.Component {
  state = {
    books: [],
    categories: [
      { shelf: 'currentlyReading', title: 'Currently Reading' },
      { shelf: 'wantToRead', title: 'Want to Read' },
      { shelf: 'read', title: 'Read' }
    ]
  }

  // Binding
  moveBook = this.moveBook.bind(this);

  componentDidMount() {
    // Get all the books from API
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    });
  }

  // Actions
  moveBook(book, target) {

    if (book.shelf === target) return;

    BooksAPI.update(book, target)
      .then((res) => {
        return BooksAPI.getAll();
      })
      .then((books) => {
        this.setState({ books: books })
      });
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <Books
            categories={this.state.categories}
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )} />

        <Route path='/search' render={() => (
          <Search 
            categories={this.state.categories}
            moveBook={this.moveBook}
          />
        )} />


      </div>
    )
  }
}

export default App
