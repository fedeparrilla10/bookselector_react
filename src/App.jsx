import { useState } from "react";
import books from "./assets/js/books";
import MainPage from "./components/MainPage";
import RandomBook from "./components/RandomBook";
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

          <div className="category-choose-container">
            <div className="category-checkbox">
              <label htmlFor="fantasy">Fantasía</label>
              <input
                type="checkbox"
                name="fantasy"
                id="fantasy"
                checked={fantasy}
                onChange={() => setFantasy(!fantasy)}
              />
            </div>

            <div className="category-checkbox">
              <label htmlFor="thriller">Thriller</label>
              <input
                type="checkbox"
                name="thriller"
                id="thriller"
                checked={thriller}
                onChange={() => setThriller(!thriller)}
              />
            </div>

            <div className="category-checkbox">
              <label htmlFor="fiction">Ficción</label>
              <input
                type="checkbox"
                name="fiction"
                id="fiction"
                checked={fiction}
                onChange={() => setFiction(!fiction)}
              />
            </div>

            <div className="category-checkbox">
              <label htmlFor="scifi">Ciencia Ficción</label>
              <input
                type="checkbox"
                name="scifi"
                id="scifi"
                checked={scifi}
                onChange={() => setScifi(!scifi)}
              />
            </div>
          </div>
          <button onClick={getBooks}>¡Recomiéndame un libro!</button>
        </div>
      )}
    </div>
  );
};

export default App;
