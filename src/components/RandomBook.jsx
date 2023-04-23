const RandomBook = ({ book }) => {
  return (
    <>
      <div className="book-box">
        <div className="img-info-box">
          <a href={book.href} target="_blank">
            <img src={book.img} alt={`Portada de ${book.name}`} />
          </a>
          <h4>
            <span>Autor</span>: {book.author}
          </h4>
          <h4>
            <span>Género</span>: {book.genre}
          </h4>
        </div>
        <div className="title-descr-box">
          <h2>{book.name}</h2>
          <p>{book.details}</p>
        </div>
      </div>
    </>
  );
};

export default RandomBook;
