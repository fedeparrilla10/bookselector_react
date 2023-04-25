import { useState } from "react";
import books from "./assets/js/books";
import MainPage from "./components/MainPage";
import RandomBook from "./components/RandomBook";
import Checkbox from "./components/Checkbox";
import "./assets/styles/Styles.css";

const App = () => {
  const [book, setBook] = useState("");
  const [fantasy, setFantasy] = useState(false);
  const [thriller, setThriller] = useState(false);
  const [fiction, setFiction] = useState(false);
  const [scifi, setScifi] = useState(false);

  const getBooks = () => {
    let filteredBooks = books.filter((book) => {
      if (
        (fantasy && book.genre === "Fantasía") ||
        (thriller && book.genre === "Thriller") ||
        (fiction && book.genre === "Ficción") ||
        (scifi && book.genre === "Ciencia Ficción")
      ) {
        return true;
      }
      return false;
    });

    if (!fantasy && !thriller && !fiction && !scifi) {
      filteredBooks = books;
    }

    let randomBook = Math.floor(Math.random() * filteredBooks.length);
    setBook(filteredBooks[randomBook]);
  };

  return (
    <div className="container">
      {book ? (
        <div className="randomBooks-container">
          <RandomBook book={book} />
          <button onClick={getBooks}>¡Recomiéndame otro libro!</button>
        </div>
      ) : (
        <div className="mainPage-container">
          <MainPage />
          <div className="checkbox-container">
            <Checkbox category="Fantasía" check={fantasy} state={setFantasy} />
            <Checkbox
              category="Thriller"
              check={thriller}
              state={setThriller}
            />
            <Checkbox category="Ficción" check={fiction} state={setFiction} />
            <Checkbox category="SciFi" check={scifi} state={setScifi} />
          </div>
          <button onClick={getBooks}>¡Recomiéndame un libro!</button>
        </div>
      )}
    </div>
  );
};

export default App;
