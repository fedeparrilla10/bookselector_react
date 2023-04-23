const MainPage = () => {
  return (
    <>
      <img src="img/library.png" alt="Book" />
      <h1>BookSelector</h1>
      <h2>¿Terminaste tu libro y no sabes con cuál seguir?</h2>
      <p className="first-description">
        BookSelector es una aplicación web diseñada para todos aquellos lectores
        empedernidos que siempre que terminan un libro sufren para elegir el
        siguiente. Aquellos que sufran para tomar decisiones: esta página esta
        dedicada a ustedes.
      </p>
      <p className="second-description">
        En cada uno de los libros agregamos un link a su correspondiente página
        en GoodReads, para que puedas entrar y ver las diferentes reseñas de los
        usuarios. Cada obra va acompañada también por su cantidad de páginas y
        su género, para que veas si es un buen match para vos.
      </p>
    </>
  );
};

export default MainPage;
