
import { Article, City, Prisma } from "@prisma/client";

export const cityData: Partial<City>[] = [
    {
        name: "Amsterdam",
        description: "Città piena di musei ",
        image: "/media/amsterdam.jpg",
        area: new Prisma.Decimal(219.33),
        population: 921402,
        year: 2015,
        altitude: 2
    },
    {
        name: "Chicago",
        description: "Città con grandi edifici inportanti",
        image: "/media/chicago.jpg",
        area: new Prisma.Decimal(606.34),
        population: 2746388,
        year: 2020,
        altitude: 179
    },
    {
        name: "Firenze",
        description: "Città con una grande storia di Poeti ",
        image: "/media/Firenze.jpg",
        area: new Prisma.Decimal(102.32),
        population: 363837,
        year: 2023,
        altitude: 50
    },
    {
        name: "Isole Eolie",
        description: "Arcipelago della Sicilia",
        image: "/media/isoleEolie.jpg",
        altitude: 0,
        area: new Prisma.Decimal(114.7),
        population: 15138,
        year: 2022,
    },
    {
        name: "New York",
        description: "Città con grandi luci e monumenti",
        image: "/media/NewYork.jpg",
        altitude: 10,
        area: new Prisma.Decimal(785),
        population: 8804190,
        year: 2020,
    },
    {
        name: "Parigi",
        description: "Città degli innamorati",
        image: "/media/Parigi.jpg",
        altitude: 78,
        area: new Prisma.Decimal(105.4),
        population: 2145906,
        year: 2020,
    },
    {
        name: "Roma",
        description: "Città ricca di Storie",
        image: "/media/Roma.jpg",
        altitude: 21,
        area: new Prisma.Decimal(1287.36),
        population: 2753395,
        year: 2024,
    },
    {
        name: "Venezia",
        description: "Città di navigatori",
        image: "/media/Venezia.jpg",
        altitude: 2,
        area: new Prisma.Decimal(415.9),
        population: 250255,
        year: 2024,
    },
]

export const articleCity: Partial<Article>[] = [
    {
        city_id: 1,
        title: "titolo 1",
        description: "Amsterdam è la capitale dei Paesi Bassi, nota per il suo patrimonio artistico, l'elaborato sistema di canali e le case strette con facciate a capanna, eredità del XVII secolo, l'epoca d'oro della città. Il Quartiere dei Musei ospita il Museo Van Gogh, il Rijksmuseum, con opere di Rembrandt e Vermeer, e il museo Stedelijk, dove sono esposte opere d'arte moderna. La bicicletta è il simbolo della città, che è attraversata da numerose piste ciclabili."
    },
    {
        city_id: 2,
        title: "titolo 1",
        description: "Chicago, una città dell'Illinois sul Lago Michigan, è una delle metropoli più grandi degli Stati Uniti. Famosa per l'audace architettura, è costellata di grattacieli, come i famosi John Hancock Center, la Willis Tower, alta 1451 piedi e precedentemente chiamata Sears Tower, e la neogotica Tribune Tower. La città è conosciuta anche per i musei, fra cui l'Art Institute of Chicago, che ospita rinomate opere impressioniste e post-impressioniste."
    },
    {
        city_id: 3,
        title: "titolo 1",
        description: "Firenze, capoluogo della Toscana, ospita molti capolavori dell'arte e dell'architettura rinascimentale. Uno dei luoghi più celebri è il Duomo, la cattedrale con cupola di tegole progettata dal Brunelleschi e il campanile di Giotto. La Galleria dell'Accademia espone la scultura del David di Michelangelo mentre nella Galleria degli Uffizi si trovano La nascita di Venere di Botticelli e l’Annunciazione di Leonardo da Vinci."
    },
    {
        city_id: 4,
        title: "titolo 1",
        description: "Le isole Eolie, dette anche isole Lipari, sono un arcipelago appartenente all'arco Eoliano situato nel mar Tirreno meridionale, a nord della costa siciliana, fanno parte della città metropolitana di Messina. Dal 2000 fanno parte dei siti dichiarati patrimonio dell'umanità dall'UNESCO."
    },
    {
        city_id: 5,
        title: "titolo 1",
        description: "New York si trova alla foce del fiume Hudson, sull'Oceano Atlantico, e comprende 5 distretti. Manhattan, il suo cuore pulsante, è considerato uno dei poli commerciali, finanziari e culturali più importanti al mondo. I luoghi più caratteristici della metropoli sono i grattacieli come l'Empire State Building e l'estesa zona di Central Park. Il teatro di Broadway è illuminato dai neon di Times Square."
    },
    {
        city_id: 6,
        title: "titolo 1",
        description: "Parigi, capitale della Francia, è una delle città più importanti d'Europa, centro mondiale di arte, moda, gastronomia e cultura. L'architettura urbana risalente al XIX secolo è caratterizzata dagli ampi boulevard e dalla Senna. Oltre a monumenti come la Torre Eiffel e la cattedrale gotica di Notre-Dame, del XII secolo, la città è rinomata per i tradizionali caffè e per i negozi di alta moda lungo la Rue du Faubourg Saint-Honoré."
    },
    {
        city_id: 7,
        title: "titolo 1",
        description: "Roma, capitale dell’Italia, è una grande città cosmopolita con una storia artistica, architettonica e culturale che ha influenzato tutto il mondo e che risale a quasi 3000 anni fa. Le antiche rovine come il Foro e il Colosseo testimoniano la potenza dell’antico Impero romano. Nella Città del Vaticano, sede della Chiesa Cattolica, si trovano la Basilica di San Pietro e i Musei Vaticani, che ospitano capolavori come la Cappella Sistina affrescata da Michelangelo. "
    },
    {
        city_id: 8,
        title: "titolo 1",
        description: "Venezia, il capoluogo della regione Veneto, è adagiata su più di 100 piccole isole all'interno di una laguna nel mare Adriatico. In questa città non esistono strade ma canali, tra cui il Canal Grande, fiancheggiato da palazzi rinascimentali e gotici. Sulla piazza centrale, piazza San Marco, sorgono la Basilica di San Marco, arricchita da mosaici bizantini, e il campanile di San Marco, da cui si possono ammirare i tetti rossi della città. "
    },
    {
        city_id: 8,
        title: "titolo 2",
        description: "Venezia, il capoluogo della regione Veneto, è adagiata su più di 100 piccole isole all'interno di una laguna nel mare Adriatico. In questa città non esistono strade ma canali, tra cui il Canal Grande, fiancheggiato da palazzi rinascimentali e gotici. Sulla piazza centrale, piazza San Marco, sorgono la Basilica di San Marco, arricchita da mosaici bizantini, e il campanile di San Marco, da cui si possono ammirare i tetti rossi della città. "
    },

]