import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// Queries
import {getBooksQuery} from '../query/main.js';

class BookList extends Component {
  displayBooks(){
    var data = this.props.data;
    if(data.loading){
      return( <div>Loading Books...</div> );
    } else {
      return data.books.map(book => {
        return(
          <li key={book.id}>{book.name}</li>
        );
      })
    }
  }
  render() {
    return (
      <div id="list">
        <ul>
            {this.displayBooks()}
        </ul>
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);