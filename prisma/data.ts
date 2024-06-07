
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
        title: "Descrizione",
        description: "Amsterdam è la capitale dei Paesi Bassi, nota per il suo patrimonio artistico, l'elaborato sistema di canali e le case strette con facciate a capanna, eredità del XVII secolo, l'epoca d'oro della città. Il Quartiere dei Musei ospita il Museo Van Gogh, il Rijksmuseum, con opere di Rembrandt e Vermeer, e il museo Stedelijk, dove sono esposte opere d'arte moderna. La bicicletta è il simbolo della città, che è attraversata da numerose piste ciclabili."
    },
    {
        city_id: 1,
        title: "Storia",
        description: `La città possiede uno dei maggiori centri rinascimentali di tutta Europa. Numerose costruzioni che risalgono al periodo tra il XVI e il XVII secolo, conosciuto anche come "Secolo d'oro", sono ora considerate monumenti storici e sono collocate intorno ad una serie di canali poligonali concentrici. Questi cingono il vecchio porto, che un tempo era affacciato sullo Zuiderzee, oggi un lago separato dal resto del mare e noto con il nome di IJsselmeer. La città ospita il Rijksmuseum (museo statale), il museo Van Gogh, il Concertgebouw, il Rembrandthuis e la casa di Anna Frank.`
    },
    {
        city_id: 1,
        title: "Edifici",
        description: `È anche famosa per il suo quartiere a luci rosse, De Wallen, e i suoi numerosi coffee-shop autorizzati alla vendita di marijuana e di derivati della cannabis. Il motto ufficiale della città è "Heldhaftig, Vastberaden, Barmhartig" ("valorosa, decisa, misericordiosa"). Le tre croci di Sant'Andrea sulla bandiera sono associate a queste tre parole, benché siano entrate in uso prima del motto.`
    },
    {
        city_id: 2,
        title: "descrizione",
        description: "Chicago, una città dell'Illinois sul Lago Michigan, è una delle metropoli più grandi degli Stati Uniti. Famosa per l'audace architettura, è costellata di grattacieli, come i famosi John Hancock Center, la Willis Tower, alta 1451 piedi e precedentemente chiamata Sears Tower, e la neogotica Tribune Tower. La città è conosciuta anche per i musei, fra cui l'Art Institute of Chicago, che ospita rinomate opere impressioniste e post-impressioniste."
    },
    {
        city_id: 2,
        title: "Geografia",
        description: `L'area metropolitana (detta Chicagoland) conta 9 618 502 abitanti distribuiti in un'ampia zona pianeggiante situata lungo le rive del lago Michigan, sulle quali la città si estende per 50 km da nord a sud. È soprannominata "Windy City" e "Second City". Il centro della città (detto "the Loop") è dominato da imponenti grattacieli che arrivano fino a 104 piani (per un'altezza di 442 m) della Willis Tower. Questo tipo di opera architettonica è nato proprio a Chicago che, anche se da tempo ha ceduto a New York il primato della città con più grattacieli del paese, vanta ancora oggi il terzo grattacielo più alto statunitense (dopo il nuovo World Trade Center e la Central Park Tower). Trentacinque dei suoi grattacieli superano i 200 metri d'altezza. Trasformatasi da cittadina in un'importante metropoli, Chicago è stata definita come una delle 10 città più influenti al mondo. Oggi è una città multietnica, un importante centro finanziario e industriale ed uno dei maggiori centri fieristico/espositivi mondiali. È la città con il maggior numero di ponti mobili al mondo (attualmente 45) ed è un punto di riferimento mondiale per il blues.`
    },
    {
        city_id: 3,
        title: "Descrizione",
        description: "Firenze, capoluogo della Toscana, ospita molti capolavori dell'arte e dell'architettura rinascimentale. Uno dei luoghi più celebri è il Duomo, la cattedrale con cupola di tegole progettata dal Brunelleschi e il campanile di Giotto. La Galleria dell'Accademia espone la scultura del David di Michelangelo mentre nella Galleria degli Uffizi si trovano La nascita di Venere di Botticelli e l’Annunciazione di Leonardo da Vinci."
    },
    {
        city_id: 3,
        title: "Storia",
        description: `Nel Medioevo è stata un importantissimo centro artistico, culturale, commerciale, politico, economico e finanziario; nell'età moderna ha ricoperto il ruolo di capitale del Granducato di Toscana dal 1569 al 1859 che, col governo delle famiglie dei Medici e dei Lorena, divenne uno degli stati più ricchi e moderni d'Italia. Le varie vicissitudini politiche, la potenza finanziaria e mercantile e le influenze in ogni campo della cultura hanno fatto della città un crocevia fondamentale della storia italiana ed europea. Nel 1865 Firenze fu proclamata capitale del Regno d'Italia (seconda, dopo Torino), mantenendo questo status fino al 1871, anno che segna la fine del Risorgimento e il passaggio del testimone a Roma.`
    },
    {
        city_id: 3,
        title: "Università",
        description: `Importante centro universitario e patrimonio dell'umanità UNESCO (il centro storico, dal 1982), è considerata luogo d'origine del Rinascimento – la consapevolezza di una nuova era moderna dopo il Medioevo, periodo di cambiamento e "rinascita" culturale e scientifica – e della lingua italiana, grazie al volgare fiorentino usato nella letteratura. Nel 1986 fu nominata città europea della cultura.`
    },
    {
        city_id: 4,
        title: "titolo 1",
        description: "Le isole Eolie, dette anche isole Lipari, sono un arcipelago appartenente all'arco Eoliano situato nel mar Tirreno meridionale, a nord della costa siciliana, fanno parte della città metropolitana di Messina. Dal 2000 fanno parte dei siti dichiarati patrimonio dell'umanità dall'UNESCO."
    },
    {
        city_id: 5,
        title: "Descrizione",
        description: "New York si trova alla foce del fiume Hudson, sull'Oceano Atlantico, e comprende 5 distretti. Manhattan, il suo cuore pulsante, è considerato uno dei poli commerciali, finanziari e culturali più importanti al mondo. I luoghi più caratteristici della metropoli sono i grattacieli come l'Empire State Building e l'estesa zona di Central Park. Il teatro di Broadway è illuminato dai neon di Times Square."
    },
    {
        city_id: 6,
        title: "Descrizione",
        description: "Parigi, capitale della Francia, è una delle città più importanti d'Europa, centro mondiale di arte, moda, gastronomia e cultura. L'architettura urbana risalente al XIX secolo è caratterizzata dagli ampi boulevard e dalla Senna. Oltre a monumenti come la Torre Eiffel e la cattedrale gotica di Notre-Dame, del XII secolo, la città è rinomata per i tradizionali caffè e per i negozi di alta moda lungo la Rue du Faubourg Saint-Honoré."
    },
    {
        city_id: 6,
        title: "Città",
        description: `Con una popolazione di 2 229 095 abitanti è, dopo Berlino, Madrid e Roma, il quarto comune più popoloso dell'Unione europea e, in considerazione della superficie comunale, possiede una delle più alte densità abitative del mondo. Tuttavia, l'estensione urbana della capitale francese è ben più ampia del suo territorio comunale: la sua area metropolitana, detta anche "Grande Parigi" (in francese Grand Paris), conta infatti circa 12 milioni di persone.`
    },
    {
        city_id: 7,
        title: "Descrizione",
        description: "Roma, capitale dell’Italia, è una grande città cosmopolita con una storia artistica, architettonica e culturale che ha influenzato tutto il mondo e che risale a quasi 3000 anni fa. Le antiche rovine come il Foro e il Colosseo testimoniano la potenza dell’antico Impero romano. Nella Città del Vaticano, sede della Chiesa Cattolica, si trovano la Basilica di San Pietro e i Musei Vaticani, che ospitano capolavori come la Cappella Sistina affrescata da Michelangelo. "
    },
    {
        city_id: 7,
        title: "Storia",
        description: `Fondata secondo la tradizione il 21 aprile 753 a.C. da Romolo (sebbene scavi recenti presso il Lapis niger indichino la presenza di insediamenti già due secoli prima),[9][10] nel corso dei suoi tre millenni di storia, è stata la prima metropoli dell'Occidente,[11] cuore pulsante di una delle più importanti civiltà antiche, che influenzò la società, la cultura, la lingua, la letteratura, l'arte, l'architettura, l'urbanistica, l'ingegneria civile, la filosofia, la religione, il diritto e i costumi dei secoli successivi. Luogo di origine della lingua latina, fu capitale dell'antico Stato romano, che estendeva il suo dominio su tutto il bacino del Mediterraneo e gran parte dell'Europa; poi dello Stato Pontificio, sottoposto al potere temporale dei papi; quindi del Regno d'Italia dal 1871 al 1946, poi della Repubblica Italiana. Per antonomasia è definita l'Urbe, Caput mundi e Città eterna.`
    },
    {
        city_id: 8,
        title: "titolo 1",
        description: "Venezia, il capoluogo della regione Veneto, è adagiata su più di 100 piccole isole all'interno di una laguna nel mare Adriatico. In questa città non esistono strade ma canali, tra cui il Canal Grande, fiancheggiato da palazzi rinascimentali e gotici. Sulla piazza centrale, piazza San Marco, sorgono la Basilica di San Marco, arricchita da mosaici bizantini, e il campanile di San Marco, da cui si possono ammirare i tetti rossi della città. "
    },
    {
        city_id: 8,
        title: "titolo 2",
        description: `La città è stata per 1 100 anni la capitale della Serenissima Repubblica di Venezia ed è conosciuta a questo riguardo come la Serenissima, la Dominante e la Regina dell'Adriatico: per le peculiarità urbanistiche e per il suo patrimonio artistico, è universalmente considerata una tra le più belle città del mondo, dichiarata, assieme alla sua laguna, patrimonio dell'umanità dall'UNESCO,[9] che ha contribuito a farne la seconda città italiana dopo Roma con il più alto flusso turistico.`
    },

]