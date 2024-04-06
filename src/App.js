import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BookCard from './components/BookCard';
import BookDetail from './components/BookDetail';
import SearchBar from './components/SearchBar';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const defaultQuery = 'harry potter'; // Default search query

  useEffect(() => {
    // Fetch default books (e.g., "Harry Potter") when component mounts
    fetchBooks(defaultQuery);
  }, []); // Empty dependency array ensures this effect runs once on component mount

  const fetchBooks = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const bookData = response.data.items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
        description: item.volumeInfo.description,
        image: item.volumeInfo.imageLinks?.thumbnail,
        previewLink: item.volumeInfo.previewLink,
        infoLink: item.volumeInfo.infoLink,
      }));
      setBooks(bookData);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseBookDetail = () => {
    setSelectedBook(null);
  };

  const handleSearch = (query) => {
    // Fetch books based on user's search query
    fetchBooks(query);
  };

  return (
    <div className="app">
      <h1>Virtual Bookstore</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onBookClick={handleBookClick} />
        ))}
      </div>
      {selectedBook && <BookDetail book={selectedBook} onClose={handleCloseBookDetail} />}
    </div>
  );
};

export default App;