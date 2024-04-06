import React from 'react';
// import './BookCard.css';

const BookCard = ({ book, onBookClick }) => {
  return (
    <div className="book-card" onClick={() => onBookClick(book)}>
      <img src={book.image} alt={book.title} />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;