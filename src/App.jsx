import "./assets/styles/Styles.css";
import { useState } from "react";
import books from "./books";
import MainPage from "./components/MainPage";
import RandomBook from "./components/RandomBook";

const App = () => {
  const [book, setBook] = useState("");

  const getBooks = () => {
    let randomBook = Math.floor(Math.random() * books.length);
    setBook(books[randomBook]);
  };

  return (
    <div className="container">
      {book ? (
        <div className="randomBooks-container">
          <RandomBook book={book} />
          <button onClick={getBooks}>¡Recomiéndame otro libro!</button>
        </div>
      ) : (
        <div className="mainpage-container">
          <MainPage />
          <button onClick={getBooks}>¡Recomiéndame un libro!</button>
        </div>
      )}
    </div>
  );
};

export default App;
