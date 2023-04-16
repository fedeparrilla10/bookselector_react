const books = [
  {
    name: "El Imperio Final",
    img: "/img/ImperioFinal.jpg",
    author: "Brandon Sanderson",
    genre: "Fantasía",
    pages: "690",
    details: `Durante mil años han caído las cenizas y nada florece. Durante mil años los skaa han sido esclavizados y viven sumidos en un miedo inevitable. Durante mil años el Lord Legislador reina con un poder absoluto gracias al terror, a sus poderes e inmortalidad.
        Le ayudan «obligadores» e «inquisidores», junto a la poderosa magia de la «alomancia». Pero los nobles, con frecuencia, han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborns).
        Ahora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos unidos a la rebelión que los skaa intentan desde hace mil años puedan cambiar el mundo y la atroz dominación del Lord Legislador.`,
    href: "https://www.goodreads.com/book/show/7183286-el-imperio-final?ref=nav_sb_ss_1_16",
  },

  {
    name: "Neverwhere",
    img: "/img/neverwhere.jpg",
    author: "Neil Gaiman",
    genre: "Fantasía",
    pages: "370",
    details: `Under the streets of London there's a world most people could never even dream of. A city of monsters and saints, murderers and angels, knights in armour and pale girls in black velvet.
        "Neverwhere" is the London of the people who have fallen between the cracks.
        Strange destinies lie in wait in London below - a world that seems eerily familiar. But a world that is utterly bizarre, peopled by unearthly characters such as the Angel called Islington, the girl named Door, and the Earl who holds Court on a tube train.
        Now a single act of kindness has catapulted young businessman Richard Mayhew out of his safe and predictable life - and into the realms of "Neverwhere." Richard is about to find out more than he ever wanted to know about this other London. Which is a pity. Because Richard just wants to go home...`,
    href: "https://www.goodreads.com/book/show/14497.Neverwhere?ref=nav_sb_ss_1_11",
  },

  {
    name: "El Nombre del Viento",
    img: "/img/nombreviento.jpg",
    author: "Patrick Rothfuss",
    genre: "Fantasía",
    pages: "872",
    details: `En una posada en tierra de nadie, un hombre se dispone a relatar, por primera vez, la auténtica historia de su vida. Una historia que únicamente él conoce y que ha quedado diluida tras los rumores, las conjeturas y los cuentos de taberna que le han convertido en un personaje legendario a quien todos daban ya por muerto: Kvothe... músico, mendigo, ladrón, estudiante, mago, héroe y asesino.
      Ahora va a revelar la verdad sobre sí mismo. Y para ello debe empezar por el principio: su infancia en una troupe de artistas itinerantes, los años malviviendo como un ladronzuelo en las calles de una gran ciudad y su llegada a una universidad donde esperaba encontrar todas las respuestas que había estado buscando.`,
    href: "https://www.goodreads.com/book/show/6483211-el-nombre-del-viento?ref=nav_sb_ss_1_20",
  },

  {
    name: "La Sombra del Viento",
    img: "/img/SombraViento.jpg",
    author: "Carlos Ruiz Zafón",
    genre: "Fantasía",
    pages: "521",
    details:
      "Barcelona, 1945. Daniel Sempere y su padre, un librero de libros antiguos, son los últimos de una estirpe de editores que se remonta a los tiempos de los primeros impresores de la ciudad. Un día, aparece por el establecimiento un hombre misterioso, de nombre Julián Carax, quien solicita adquirir un ejemplar del libro que el padre de Daniel guardaba como su preferido, 'La Sombra del Viento', de un autor llamado Julián Carax. Daniel queda fascinado por la novela y se propone encontrar todos los demás libros del autor, pero pronto descubre que alguien ha estado quemándolos sistemáticamente. A partir de ese momento, Daniel emprende una investigación para descubrir la verdad detrás de la vida y la muerte de Carax, mientras se adentra en un peligroso laberinto de intrigas y secretos de la Barcelona de posguerra.",
    href: "https://www.goodreads.com/book/show/1232.La_sombra_del_viento",
  },

  {
    name: "Elantris",
    img: "/img/Elantris.jpg",
    author: "Brandon Sanderson",
    genre: "Fantasía",
    pages: "638",
    details: `Elantris, una ciudad legendaria que en tiempos fue conocida como la "Ciudad de los Dioses". Sin embargo, hace 10 años, una terrible desgracia convirtió a sus habitantes en seres monstruosos. Ahora, un príncipe caído y una joven viuda intentan descubrir la verdad sobre lo que realmente sucedió aquel fatídico día. Mientras tanto, las intrigas políticas y religiosas en la capital de Arelon amenazan con sumir el país en la guerra. Las dos personas destinadas a salvarlo, Raoden y Sarene, se ven atrapadas en un juego de pasión y política que puede destruir no sólo a ellos, sino también a su mundo.`,
    href: "https://www.goodreads.com/book/show/68427.Elantris?from_search=true&from_srp=true&qid=PmxWu9BnKY&rank=1",
  },

  {
    name: "Cien Años de Soledad",
    img: "/img/cienanios.jpg",
    author: "Gabriel García Márquez",
    genre: "Ficción",
    pages: "471",
    details: `La novela que cuenta la historia de la familia Buendía y su mágico pueblo llamado Macondo. Una obra maestra de la literatura hispanoamericana que ha cautivado a millones de lectores en todo el mundo. Con una imaginación desbordante, Gabriel García Márquez nos lleva a través de la vida de los Buendía, cuyos destinos están irremediablemente unidos al de su pueblo. Una historia de amor, guerra, magia y política que trasciende el tiempo y las fronteras.`,
    href: "https://www.goodreads.com/book/show/320.One_Hundred_Years_of_Solitude",
  },

  {
    name: "El Caso Hartung",
    img: "/img/casohartung.jpg",
    author: "Soren Sveistrup",
    genre: "Thriller",
    pages: "544",
    details: `Una ventosa mañana de octubre en un tranquilo suburbio de Copenhague, la policía realiza un terrible descubrimiento. Una joven ha sido asesinada y abandonada en un parque infantil. Le han amputado una mano y sobre el cadáver cuelga una pequeña figura hecha con castañas.

    La joven inspectora Naia Thulin es la encargada del caso. Su compañero, Mark Hess, es un inspector descontento que recientemente ha sido expulsado de la sede central de Europol, en la Haya. En la figura de castañas descubren una misteriosa huella que les llevará a una niña, la hija de la ministra de Asuntos Sociales Rosa Hartung, desaparecida un año antes y que presuntamente está muerta. Un hombre confesó el crimen en su momento y el caso consta como resuelto y cerrado desde hace varios meses.`,
    href: "https://www.goodreads.com/book/show/36664177-el-caso-hartung",
  },
];

export default books;
