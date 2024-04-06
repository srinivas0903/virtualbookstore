import React from 'react';
// import './BookDetail.css';

const BookDetail = ({ book, onClose }) => {
  return (
    <div className="book-detail">
      <div className="close-btn" onClick={onClose}>
        &times;
      </div>
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p>By {book.author}</p>
      <p>{book.description}</p>
      <a href={book.previewLink} target="_blank" rel="noopener noreferrer">
        Read Now
      </a>
      <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
        More Info
      </a>
    </div>
  );
};

export default BookDetail;