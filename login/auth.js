const budget = 1000;
    const squadLimits = { GK: 2, DEF: 5, MID: 5, FWD: 3 };
    const maxPerTeam = 4;

    const starterRules = {
      total: 11,
      GK: 1,
      minDEF: 3,
      minMID: 2,
      minFWD: 1
    };

    const possibleFormations = [
      { DEF: 3, MID: 4, FWD: 3 },
      { DEF: 3, MID: 5, FWD: 2 },
      { DEF: 4, MID: 4, FWD: 2 },
      { DEF: 4, MID: 3, FWD: 3 },
      { DEF: 4, MID: 5, FWD: 1 },
      { DEF: 5, MID: 3, FWD: 2 },
      { DEF: 5, MID: 4, FWD: 1 },
      { DEF: 5, MID: 2, FWD: 3 }
    ];

    const teamStyle = {
      "Real Madrid": {
        colors: ["#ffffff", "#d9b34a"],
        logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
      },
      "Barcelona": {
        colors: ["#1f4aa8", "#8c1b4d"],
        logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
      },
      "PSG": {
        colors: ["#0b2d6b", "#c8102e"],
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg"
      },
      "Bayern": {
        colors: ["#d91e36", "#1e5fbf"],
        logo: "https://1000logos.net/wp-content/uploads/2018/05/Bayern-Munchen-Logo.png"
      },
      "Liverpool": {
        colors: ["#c8102e", "#7a1020"],
        logo: "https://1000logos.net/wp-content/uploads/2017/04/Logo-Liverpool.png"
      },
      "Arsenal": {
        colors: ["#d81920", "#9b1219"],
        logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
      },
      "Atletico": {
        colors: ["#d81e34", "#1f4fb8"],
        logo: "https://1000logos.net/wp-content/uploads/2018/05/Atletico-Madrid-Logo.png"
      },
      "Sporting": {
        colors: ["#0d8b3d", "#0a5e2a"],
        logo: "https://cdn.brandfetch.io/idNWw1XaNT/w/820/h/1082/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1766960749811"
      }
    };

    const players = [
       { id: 1,name: "Thibaut Courtois",       team: "Real Madrid", pos: "GK",  price: 10 },
  { id: 2,  name: "Andriy Lunin",            team: "Real Madrid", pos: "GK",  price: 6 },
  { id: 3,  name: "Dani Carvajal",           team: "Real Madrid", pos: "DEF", price: 7 },
  { id: 4,  name: "Éder Militão",            team: "Real Madrid", pos: "DEF", price: 8 },
  { id: 5,  name: "David Alaba",             team: "Real Madrid", pos: "DEF", price: 8 },
  { id: 6,  name: "Trent Alexander-Arnold",  team: "Real Madrid", pos: "DEF", price: 9 },
  { id: 7,  name: "Raúl Asencio",            team: "Real Madrid", pos: "DEF", price: 7 },
  { id: 8,  name: "Álvaro Carreras",         team: "Real Madrid", pos: "DEF", price: 8 },
  { id: 9,  name: "Fran García",             team: "Real Madrid", pos: "DEF", price: 7 },
  { id: 10, name: "Antonio Rüdiger",         team: "Real Madrid", pos: "DEF", price: 8 },
  { id: 11, name: "Ferland Mendy",           team: "Real Madrid", pos: "DEF", price: 7 },
  { id: 12, name: "Dean Huijsen",            team: "Real Madrid", pos: "DEF", price: 8 },
  { id: 13, name: "Jude Bellingham",         team: "Real Madrid", pos: "MID", price: 10 },
  { id: 14, name: "Eduardo Camavinga",       team: "Real Madrid", pos: "MID", price: 9 },
  { id: 15, name: "Federico Valverde",       team: "Real Madrid", pos: "MID", price: 9 },
  { id: 16, name: "Aurélien Tchouaméni",     team: "Real Madrid", pos: "MID", price: 9 },
  { id: 17, name: "Arda Güler",              team: "Real Madrid", pos: "MID", price: 9 },
  { id: 18, name: "Daniel Ceballos",         team: "Real Madrid", pos: "MID", price: 8 },
  { id: 19, name: "Vinícius Júnior",         team: "Real Madrid", pos: "FWD", price: 10 },
  { id: 20, name: "Kylian Mbappé",           team: "Real Madrid", pos: "FWD", price: 10 },
  { id: 21, name: "Rodrygo Goes",            team: "Real Madrid", pos: "FWD", price: 9 },
  { id: 22, name: "Gonzalo García Torres",   team: "Real Madrid", pos: "FWD", price: 8 },
  { id: 23, name: "Brahim Díaz",             team: "Real Madrid", pos: "FWD", price: 8 },
  { id: 24, name: "Franco Mastantuono",      team: "Real Madrid", pos: "FWD", price: 9 },

  {id:25,name:"Joan García",team:"Barcelona",pos:"GK",price:8},
  {id:26,name:"Wojciech Szczęsny",team:"Barcelona",pos:"GK",price:8},
  {id:27,name:"João Cancelo",team:"Barcelona",pos:"DEF",price:8},
  {id:28,name:"Alejandro Balde",team:"Barcelona",pos:"DEF",price:8},
  {id:29,name:"Ronald Araújo",team:"Barcelona",pos:"DEF",price:8},
  {id:30,name:"Pau Cubarsí",team:"Barcelona",pos:"DEF",price:8},
  {id:31,name:"Andreas Christensen",team:"Barcelona",pos:"DEF",price:7},
  {id:32,name:"Gerard Martín",team:"Barcelona",pos:"DEF",price:7},
  {id:33,name:"Jules Koundé",team:"Barcelona",pos:"DEF",price:8},
  {id:34,name:"Eric García",team:"Barcelona",pos:"DEF",price:7},
  {id:35,name:"Gavi",team:"Barcelona",pos:"MID",price:9},
  {id:36,name:"Pedri",team:"Barcelona",pos:"MID",price:10},
  {id:37,name:"Fermín López",team:"Barcelona",pos:"MID",price:8},
  {id:38,name:"Marc Casadó",team:"Barcelona",pos:"MID",price:8},
  {id:39,name:"Dani Olmo",team:"Barcelona",pos:"MID",price:9},
  {id:40,name:"Frenkie de Jong",team:"Barcelona",pos:"MID",price:9},
  {id:41,name:"Marc Bernal",team:"Barcelona",pos:"MID",price:8},
  {id:42,name:"Ferran Torres",team:"Barcelona",pos:"FWD",price:8},
  {id:43,name:"Robert Lewandowski",team:"Barcelona",pos:"FWD",price:10},
  {id:44,name:"Lamine Yamal",team:"Barcelona",pos:"FWD",price:10},
  {id:45,name:"Raphinha",team:"Barcelona",pos:"FWD",price:9},
  {id:46,name:"Marcus Rashford",team:"Barcelona",pos:"FWD",price:9},
  {id:47,name:"Roony Bardghji",team:"Barcelona",pos:"FWD",price:8},

  {id:48,name:"Lucas Chevalier",team:"PSG",pos:"GK",price:8},
  {id:49,name:"Matvey Safonov",team:"PSG",pos:"GK",price:8},
  {id:50,name:"Renato Marin",team:"PSG",pos:"GK",price:7},
  {id:51,name:"Achraf Hakimi",team:"PSG",pos:"DEF",price:8},
  {id:52,name:"Marquinhos",team:"PSG",pos:"DEF",price:8},
  {id:53,name:"Illia Zabarnyi",team:"PSG",pos:"DEF",price:8},
  {id:54,name:"Lucas Hernández",team:"PSG",pos:"DEF",price:8},
  {id:55,name:"Nuno Mendes",team:"PSG",pos:"DEF",price:9},
  {id:56,name:"Lucas Beraldo",team:"PSG",pos:"DEF",price:8},
  {id:57,name:"Willian Pacho",team:"PSG",pos:"DEF",price:8},
  {id:58,name:"Fabián Ruiz",team:"PSG",pos:"MID",price:8},
  {id:59,name:"Vitinha",team:"PSG",pos:"MID",price:9},
  {id:60,name:"Kang-In Lee",team:"PSG",pos:"MID",price:8},
  {id:61,name:"Warren Zaïre-Emery",team:"PSG",pos:"MID",price:8},
  {id:62,name:"João Neves",team:"PSG",pos:"MID",price:9},
  {id:63,name:"Senny Mayulu",team:"PSG",pos:"MID",price:8},
  {id:64,name:"Désiré Doué",team:"PSG",pos:"MID",price:9},
  {id:65,name:"Dro Fernández",team:"PSG",pos:"MID",price:7},
  {id:66,name:"Khvicha Kvaratskhelia",team:"PSG",pos:"FWD",price:10},
  {id:67,name:"Gonçalo Ramos",team:"PSG",pos:"FWD",price:8},
  {id:68,name:"Ousmane Dembélé",team:"PSG",pos:"FWD",price:10},
  {id:69,name:"Bradley Barcola",team:"PSG",pos:"FWD",price:9},
  {id:70,name:"Ibrahim Mbaye",team:"PSG",pos:"FWD",price:7},
  {id:71,name:"Quentin Ndjantou",team:"PSG",pos:"FWD",price:7},

     
  {id:72,name:"Manuel Neuer",team:"Bayern",pos:"GK",price:9},
  {id:73,name:"Sven Ulreich",team:"Bayern",pos:"GK",price:7},
  {id:74,name:"Jonas Urbig",team:"Bayern",pos:"GK",price:8},
  {id:75,name:"Leon Klanac",team:"Bayern",pos:"GK",price:6},
  {id:76,name:"Dayot Upamecano",team:"Bayern",pos:"DEF",price:8},
  {id:77,name:"Minjae Kim",team:"Bayern",pos:"DEF",price:8},
  {id:78,name:"Jonathan Tah",team:"Bayern",pos:"DEF",price:8},
  {id:79,name:"Alphonso Davies",team:"Bayern",pos:"DEF",price:9},
  {id:80,name:"Hiroki Ito",team:"Bayern",pos:"DEF",price:7},
  {id:81,name:"Raphaël Guerreiro",team:"Bayern",pos:"DEF",price:8},
  {id:82,name:"Josip Stanišić",team:"Bayern",pos:"DEF",price:7},
  {id:83,name:"Joshua Kimmich",team:"Bayern",pos:"MID",price:9},
  {id:84,name:"Leon Goretzka",team:"Bayern",pos:"MID",price:8},
  {id:85,name:"Jamal Musiala",team:"Bayern",pos:"MID",price:10},
  {id:86,name:"Tom Bischof",team:"Bayern",pos:"MID",price:7},
  {id:87,name:"Konrad Laimer",team:"Bayern",pos:"MID",price:8},
  {id:88,name:"Lennart Karl",team:"Bayern",pos:"MID",price:7},
  {id:89,name:"Aleksandar Pavlović",team:"Bayern",pos:"MID",price:8},
  {id:90,name:"Serge Gnabry",team:"Bayern",pos:"FWD",price:8},
  {id:91,name:"Harry Kane",team:"Bayern",pos:"FWD",price:10},
  {id:92,name:"Nicolas Jackson",team:"Bayern",pos:"FWD",price:8},
  {id:93,name:"Luis Díaz",team:"Bayern",pos:"FWD",price:9},
  {id:94,name:"Michael Olise",team:"Bayern",pos:"FWD",price:9},

  {id:95,name:"Alisson Becker",team:"Liverpool",pos:"GK",price:10},
  {id:96,name:"Giorgi Mamardashvili",team:"Liverpool",pos:"GK",price:9},
  {id:97,name:"Freddie Woodman",team:"Liverpool",pos:"GK",price:7},
  {id:98,name:"Armin Pecsi",team:"Liverpool",pos:"GK",price:6},
  {id:99,name:"Joe Gomez",team:"Liverpool",pos:"DEF",price:8},
  {id:100,name:"Virgil van Dijk",team:"Liverpool",pos:"DEF",price:9},
  {id:101,name:"Ibrahima Konaté",team:"Liverpool",pos:"DEF",price:8},
  {id:102,name:"Milos Kerkez",team:"Liverpool",pos:"DEF",price:8},
  {id:103,name:"Conor Bradley",team:"Liverpool",pos:"DEF",price:7},
  {id:104,name:"Jeremie Frimpong",team:"Liverpool",pos:"DEF",price:8},
  {id:105,name:"Andy Robertson",team:"Liverpool",pos:"DEF",price:8},
  {id:106,name:"Giovanni Leoni",team:"Liverpool",pos:"DEF",price:7},
  {id:107,name:"Alexis Mac Allister",team:"Liverpool",pos:"MID",price:9},
  {id:108,name:"Florian Wirtz",team:"Liverpool",pos:"MID",price:10},
  {id:109,name:"Ryan Gravenberch",team:"Liverpool",pos:"MID",price:9},
  {id:110,name:"Dominik Szoboszlai",team:"Liverpool",pos:"MID",price:8},
  {id:111,name:"Curtis Jones",team:"Liverpool",pos:"MID",price:8},
  {id:112,name:"Wataru Endo",team:"Liverpool",pos:"MID",price:7},
  {id:113,name:"Mohamed Salah",team:"Liverpool",pos:"FWD",price:10},
  {id:114,name:"Cody Gakpo",team:"Liverpool",pos:"FWD",price:9},
  {id:115,name:"Alexander Isak",team:"Liverpool",pos:"FWD",price:10},
  {id:116,name:"Hugo Ekitike",team:"Liverpool",pos:"FWD",price:9},
  {id:117,name:"Federico Chiesa",team:"Liverpool",pos:"FWD",price:8},

  {id:118,name:"David Raya",team:"Arsenal",pos:"GK",price:8},
  {id:119,name:"Kepa Arrizabalaga",team:"Arsenal",pos:"GK",price:8},
  {id:120,name:"Tommy Setford",team:"Arsenal",pos:"GK",price:7},
  {id:121,name:"William Saliba",team:"Arsenal",pos:"DEF",price:9},
  {id:122,name:"Cristhian Mosquera",team:"Arsenal",pos:"DEF",price:8},
  {id:123,name:"Ben White",team:"Arsenal",pos:"DEF",price:8},
  {id:124,name:"Piero Hincapié",team:"Arsenal",pos:"DEF",price:8},
  {id:125,name:"Gabriel Magalhães",team:"Arsenal",pos:"DEF",price:8},
  {id:126,name:"Jurrien Timber",team:"Arsenal",pos:"DEF",price:8},
  {id:127,name:"Riccardo Calafiori",team:"Arsenal",pos:"DEF",price:8},
  {id:128,name:"Myles Lewis-Skelly",team:"Arsenal",pos:"DEF",price:8},
  {id:129,name:"Martin Ødegaard",team:"Arsenal",pos:"MID",price:9},
  {id:130,name:"Declan Rice",team:"Arsenal",pos:"MID",price:9},
  {id:131,name:"Martin Zubimendi",team:"Arsenal",pos:"MID",price:9},
  {id:132,name:"Mikel Merino",team:"Arsenal",pos:"MID",price:8},
  {id:133,name:"Christian Nørgaard",team:"Arsenal",pos:"MID",price:8},
  {id:134,name:"Ethan Nwaneri",team:"Arsenal",pos:"MID",price:8},
  {id:135,name:"Eberechi Eze",team:"Arsenal",pos:"MID",price:9},
  {id:136,name:"Max Dowman",team:"Arsenal",pos:"MID",price:7},
  {id:137,name:"Bukayo Saka",team:"Arsenal",pos:"FWD",price:10},
  {id:138,name:"Viktor Gyökeres",team:"Arsenal",pos:"FWD",price:10},
  {id:139,name:"Kai Havertz",team:"Arsenal",pos:"FWD",price:9},
  {id:140,name:"Gabriel Martinelli",team:"Arsenal",pos:"FWD",price:8},
  {id:141,name:"Leandro Trossard",team:"Arsenal",pos:"FWD",price:8},
  {id:142,name:"Noni Madueke",team:"Arsenal",pos:"FWD",price:8},

  {id:143,name:"Juan Musso",team:"Atletico",pos:"GK",price:8},
  {id:144,name:"Jan Oblak",team:"Atletico",pos:"GK",price:9},
  {id:145,name:"José María Giménez",team:"Atletico",pos:"DEF",price:8},
  {id:146,name:"Matteo Ruggeri",team:"Atletico",pos:"DEF",price:8},
  {id:147,name:"Clément Lenglet",team:"Atletico",pos:"DEF",price:8},
  {id:148,name:"Nahuel Molina",team:"Atletico",pos:"DEF",price:8},
  {id:149,name:"Dávid Hancko",team:"Atletico",pos:"DEF",price:8},
  {id:150,name:"Marc Pubill",team:"Atletico",pos:"DEF",price:7},
  {id:151,name:"Robin Le Normand",team:"Atletico",pos:"DEF",price:8},
  {id:152,name:"Javi Mendoza",team:"Atletico",pos:"DEF",price:7},
  {id:153,name:"Johnny Cardoso",team:"Atletico",pos:"MID",price:8},
  {id:154,name:"Koke",team:"Atletico",pos:"MID",price:8},
  {id:155,name:"Pablo Barrios",team:"Atletico",pos:"MID",price:8},
  {id:156,name:"Álex Baena",team:"Atletico",pos:"MID",price:9},
  {id:157,name:"Marcos Llorente",team:"Atletico",pos:"MID",price:8},
  {id:158,name:"Obed Vargas",team:"Atletico",pos:"MID",price:7},
  {id:159,name:"Nicolò Rovella",team:"Atletico",pos:"MID",price:8},
  {id:160,name:"Thiago Almada",team:"Atletico",pos:"MID",price:9},
  {id:161,name:"Giuliano Simeone",team:"Atletico",pos:"MID",price:8},
  {id:162,name:"Antoine Griezmann",team:"Atletico",pos:"FWD",price:10},
  {id:163,name:"Alexander Sørloth",team:"Atletico",pos:"FWD",price:9},
  {id:164,name:"Julián Álvarez",team:"Atletico",pos:"FWD",price:10},
  {id:165,name:"Ademola Lookman",team:"Atletico",pos:"FWD",price:9},

  {id:166,name:"Rui Silva",team:"Sporting",pos:"GK",price:8},
  {id:167,name:"João Virgínia",team:"Sporting",pos:"GK",price:7},
  {id:168,name:"Diego Callai",team:"Sporting",pos:"GK",price:6},
  {id:169,name:"Francisco Silva",team:"Sporting",pos:"GK",price:6},
  {id:170,name:"Zeno Debast",team:"Sporting",pos:"DEF",price:8},
  {id:171,name:"Nuno Santos",team:"Sporting",pos:"DEF",price:7},
  {id:172,name:"Georgios Vagiannidis",team:"Sporting",pos:"DEF",price:7},
  {id:173,name:"Maxi Araújo",team:"Sporting",pos:"DEF",price:8},
  {id:174,name:"Iván Fresneda",team:"Sporting",pos:"DEF",price:7},
  {id:175,name:"Gonçalo Inácio",team:"Sporting",pos:"DEF",price:8},
  {id:176,name:"Ousmane Diomande",team:"Sporting",pos:"DEF",price:8},
  {id:177,name:"Eduardo Quaresma",team:"Sporting",pos:"DEF",price:7},
  {id:178,name:"Ricardo Mangas",team:"Sporting",pos:"DEF",price:7},
  {id:179,name:"Hidemasa Morita",team:"Sporting",pos:"MID",price:8},
  {id:180,name:"Pedro Gonçalves",team:"Sporting",pos:"MID",price:9},
  {id:181,name:"Giorgi Kochorashvili",team:"Sporting",pos:"MID",price:8},
  {id:182,name:"Daniel Bragança",team:"Sporting",pos:"MID",price:7},
  {id:183,name:"Morten Hjulmand",team:"Sporting",pos:"MID",price:9},
  {id:184,name:"João Simões",team:"Sporting",pos:"MID",price:7},
  {id:185,name:"Geovany Quenda",team:"Sporting",pos:"FWD",price:9},
  {id:186,name:"Geny Catamo",team:"Sporting",pos:"FWD",price:8},
  {id:187,name:"Souleymane Faye",team:"Sporting",pos:"FWD",price:7},
  {id:188,name:"Francisco Trincão",team:"Sporting",pos:"FWD",price:9},
  {id:189,name:"Luís Guilherme",team:"Sporting",pos:"FWD",price:7},
  {id:190,name:"Fotis Ioannidis",team:"Sporting",pos:"FWD",price:8},
  {id:191,name:"Luis Suárez",team:"Sporting",pos:"FWD",price:9}

    ];

    const PRICE_MIN_BOUND = Math.min(...players.map(p => p.price));
    const PRICE_MAX_BOUND = Math.max(...players.map(p => p.price));
    const POSITION_ORDER = { GK: 1, DEF: 2, MID: 3, FWD: 4 };

    let selected = [];
    let draftTeamName = "";
    let teamName = "";
    let starterIds = [];
    let captain = null;
    let totalPoints = 0;
    let currentRound = 0;
    let userLastRoundPoints = {};
    let userPlayerTotalPoints = {};
    let playersScrollTop = 0;
    let swapSelection = null;
    let viewedLeagueTeamId = null;
    let currentUser = null;
    let authMode = "login";
    let creationTeamFilter = "ALL";
    let creationPositionFilter = "ALL";
    let creationSortBy = "DEFAULT";
    let creationMinPrice = PRICE_MIN_BOUND;
    let creationMaxPrice = PRICE_MAX_BOUND;
    let activePlayerModalId = null;

    const USERS_STORAGE_KEY = "fantazu_users_v1";
    const SESSION_STORAGE_KEY = "fantazu_session_v1";


    const GAME_STORAGE_KEY = "fantazu_game_v1";

    function createFreshLeagueTeams() {
      return generateLeagueTeams();
    }

    function clearGameState() {
      localStorage.removeItem(GAME_STORAGE_KEY);
    }

    function saveGameState() {
      const state = {
        selectedIds: selected.map(p => p.id),
        draftTeamName,
        teamName,
        starterIds,
        captain,
        totalPoints,
        currentRound,
        userLastRoundPoints,
        userPlayerTotalPoints,
        playersScrollTop,
        swapSelection,
        viewedLeagueTeamId,
        authMode,
        creationTeamFilter,
        creationPositionFilter,
        creationSortBy,
        creationMinPrice,
        creationMaxPrice,
        activePlayerModalId,
        leagueTeams
      };

      localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify(state));
    }

    function loadGameState() {
      try {
        return JSON.parse(localStorage.getItem(GAME_STORAGE_KEY) || "null");
      } catch (e) {
        return null;
      }
    }

    function hydrateGameState(state) {
      selected = (state?.selectedIds || []).map(getPlayer).filter(Boolean);
      draftTeamName = state?.draftTeamName || "";
      teamName = state?.teamName || "";
      starterIds = (state?.starterIds || []).map(Number).filter(Boolean);
      captain = state?.captain || null;
      totalPoints = state?.totalPoints || 0;
      currentRound = state?.currentRound || 0;
      userLastRoundPoints = state?.userLastRoundPoints || {};
      userPlayerTotalPoints = state?.userPlayerTotalPoints || {};
      playersScrollTop = state?.playersScrollTop || 0;
      swapSelection = state?.swapSelection || null;
      authMode = state?.authMode || "login";
      creationTeamFilter = state?.creationTeamFilter || "ALL";
      creationPositionFilter = state?.creationPositionFilter || "ALL";
      creationSortBy = state?.creationSortBy || "DEFAULT";
      creationMinPrice = state?.creationMinPrice ?? PRICE_MIN_BOUND;
      creationMaxPrice = state?.creationMaxPrice ?? PRICE_MAX_BOUND;
      activePlayerModalId = state?.activePlayerModalId || null;
      leagueTeams = Array.isArray(state?.leagueTeams) && state.leagueTeams.length ? state.leagueTeams : createFreshLeagueTeams();
      viewedLeagueTeamId = state?.viewedLeagueTeamId || (leagueTeams.length ? leagueTeams[0].id : null);
    }

    function goToAuthPage() {
      window.location.href = "auth.html";
    }

    function goToCreationPage() {
      saveGameState();
      window.location.href = "../squad/squad.html";
    }

    function goToMainPage() {
      saveGameState();
      window.location.href = "../dashboard/dashboard.html";
    }


    function getPlayer(id) {
      return players.find(p => p.id === id);
    }

    function resetGameState() {
      leagueTeams = createFreshLeagueTeams();
      selected = [];
      starterIds = [];
      captain = null;
      totalPoints = 0;
      currentRound = 0;
      userLastRoundPoints = {};
      userPlayerTotalPoints = {};
      playersScrollTop = 0;
      swapSelection = null;
      viewedLeagueTeamId = leagueTeams.length ? leagueTeams[0].id : null;
      draftTeamName = currentUser ? currentUser.teamName : "";
      teamName = "";
      creationTeamFilter = "ALL";
      creationPositionFilter = "ALL";
      creationSortBy = "DEFAULT";
      creationMinPrice = PRICE_MIN_BOUND;
      creationMaxPrice = PRICE_MAX_BOUND;
      activePlayerModalId = null;
      saveGameState();
    }

    function getStoredUsers() {
      try {
        return JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || "[]");
      } catch (e) {
        return [];
      }
    }

    function saveStoredUsers(users) {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    }

    function getSessionEmail() {
      return localStorage.getItem(SESSION_STORAGE_KEY) || "";
    }

    function setSessionEmail(email) {
      localStorage.setItem(SESSION_STORAGE_KEY, email);
    }

    function clearSessionEmail() {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isStrongPassword(password) {
      return /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/.test(password);
    }

    function setAuthMode(mode) {
      authMode = mode;
      renderAuth();
    }

    function showAuthMessage(message, type = "error") {
      const el = document.getElementById("authMessage");
      if (!el) return;
      el.className = `auth-message ${type}`;
      el.textContent = message;
    }

    function signupUser() {
      const teamNameInput = document.getElementById("signupTeamName")?.value.trim() || "";
      const birthDate = document.getElementById("signupBirthDate")?.value || "";
      const email = (document.getElementById("signupEmail")?.value || "").trim().toLowerCase();
      const password = document.getElementById("signupPassword")?.value || "";
      const confirmPassword = document.getElementById("signupConfirmPassword")?.value || "";

      if (!teamNameInput) return showAuthMessage("Enter your team name.");
      if (!birthDate) return showAuthMessage("Enter your birth date.");
      if (!isValidEmail(email)) return showAuthMessage("Enter a valid email address.");
      if (!isStrongPassword(password)) return showAuthMessage("Password must be at least 8 characters and include 1 capital letter and 1 symbol.");
      if (password !== confirmPassword) return showAuthMessage("Passwords do not match.");

      const users = getStoredUsers();
      if (users.some(user => user.email === email)) return showAuthMessage("An account with this email already exists.");

      const newUser = { teamName: teamNameInput, birthDate, email, password };
      users.push(newUser);
      saveStoredUsers(users);
      currentUser = newUser;
      setSessionEmail(email);
      resetGameState();
      saveGameState();
      goToCreationPage();
    }

    function loginUser() {
      const email = (document.getElementById("loginEmail")?.value || "").trim().toLowerCase();
      const password = document.getElementById("loginPassword")?.value || "";

      if (!isValidEmail(email)) return showAuthMessage("Enter a valid email address.");
      if (!password) return showAuthMessage("Enter your password.");

      const user = getStoredUsers().find(u => u.email === email && u.password === password);
      if (!user) return showAuthMessage("Wrong email or password.");

      currentUser = user;
      setSessionEmail(email);
      resetGameState();
      saveGameState();
      goToCreationPage();
    }

    function logoutUser() {
      currentUser = null;
      clearSessionEmail();
      clearGameState();
      leagueTeams = createFreshLeagueTeams();
      authMode = "login";
      goToAuthPage();
    }

    function loadSessionUser() {
      const email = getSessionEmail();
      if (!email) return null;
      return getStoredUsers().find(user => user.email === email) || null;
    }

    function renderAuth() {
      const app = document.getElementById("app");
      app.innerHTML = `
        <div class="auth-wrap">
          <div class="auth-card glass">
            <h2 style="margin-bottom:6px;">Welcome to Fantazu</h2>
            <div style="color:#bfdbfe;font-size:13px;margin-bottom:14px;">Login to continue or create a new account first.</div>

            <div class="auth-tabs">
              <div class="auth-tab ${authMode === "login" ? "active" : ""}" onclick="setAuthMode('login')">Login</div>
              <div class="auth-tab ${authMode === "signup" ? "active" : ""}" onclick="setAuthMode('signup')">Sign Up</div>
            </div>

            ${authMode === "login" ? `
              <div class="auth-grid">
                <div>
                  <label class="auth-label">Email</label>
                  <input id="loginEmail" type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <label class="auth-label">Password</label>
                  <input id="loginPassword" type="password" placeholder="Enter password" />
                </div>
                <button onclick="loginUser()">Login</button>
              </div>
            ` : `
              <div class="auth-grid two">
                <div>
                  <label class="auth-label">Team Name</label>
                  <input id="signupTeamName" type="text" placeholder="Enter team name" />
                </div>
                <div>
                  <label class="auth-label">Birth Date</label>
                  <input id="signupBirthDate" type="date" />
                </div>
              </div>
              <div class="auth-grid" style="margin-top:12px;">
                <div>
                  <label class="auth-label">Email</label>
                  <input id="signupEmail" type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <label class="auth-label">Password</label>
                  <input id="signupPassword" type="password" placeholder="Minimum 8 characters, 1 capital, 1 symbol" />
                </div>
                <div>
                  <label class="auth-label">Retype Password</label>
                  <input id="signupConfirmPassword" type="password" placeholder="Retype password" />
                </div>
                <button onclick="signupUser()">Create Account</button>
              </div>
            `}

            <div id="authMessage" class="auth-message"></div>
            <div class="auth-note">This demo stores accounts in your browser only, so it is a front-end mock login and not a secure production auth system.</div>
          </div>
        </div>
      `;
    }

    function renderApp() {
      if (currentUser) {
        if (teamName.trim()) {
          goToMainPage();
        } else {
          goToCreationPage();
        }
        return;
      }
      renderAuth();
    }

    function randomInt(max) {
      return Math.floor(Math.random() * max);
    }

    function shuffle(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    function spentBudget() {
      return selected.reduce((sum, p) => sum + p.price, 0);
    }

    function countPos(pos) {
      return selected.filter(p => p.pos === pos).length;
    }

    function countTeam(team, squadIds = null) {
      if (!squadIds) return selected.filter(p => p.team === team).length;
      return squadIds.map(getPlayer).filter(p => p.team === team).length;
    }

    function squadIsComplete() {
      return (
        selected.length === 15 &&
        countPos("GK") === 2 &&
        countPos("DEF") === 5 &&
        countPos("MID") === 5 &&
        countPos("FWD") === 3 &&
        spentBudget() <= budget
      );
    }

    function canSaveTeam() {
      return squadIsComplete() && draftTeamName.trim() !== "";
    }

    function canAdd(player) {
      if (countPos(player.pos) >= squadLimits[player.pos]) return false;
      if (countTeam(player.team) >= maxPerTeam) return false;
      if (spentBudget() + player.price > budget) return false;
      return true;
    }

    function teamAbbr(team) {
      const parts = team.split(" ").filter(Boolean);
      if (parts.length === 1) return parts[0].slice(0, 3).toUpperCase();
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }

    function teamGradient(team) {
      const style = teamStyle[team];
      if (!style) return "linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)";
      return `linear-gradient(180deg, ${style.colors[0]} 0%, ${style.colors[1]} 100%)`;
    }

    function getTeamLogo(team) {
      return teamStyle[team]?.logo || "";
    }

    function getSurname(name) {
      const parts = name.trim().split(/\s+/);
      if (parts.length <= 1) return name;
      const prefixes = new Set(["da", "de", "del", "della", "der", "di", "dos", "das", "du", "el", "la", "le", "ter", "ten", "van", "von"]);
      let surname = parts[parts.length - 1];
      let i = parts.length - 2;
      while (i >= 0 && prefixes.has(parts[i].toLowerCase())) {
        surname = parts[i] + " " + surname;
        i -= 1;
      }
      return surname;
    }

    function getCreationTeamOptions() {
      return [...new Set(players.map(p => p.team))].sort((a, b) => a.localeCompare(b));
    }

    function getFilteredPlayers() {
      let list = [...players].filter(p => p.price >= creationMinPrice && p.price <= creationMaxPrice);

      if (creationPositionFilter !== "ALL") {
        list = list.filter(p => p.pos === creationPositionFilter);
      }

      if (creationTeamFilter !== "ALL") {
        list = list.filter(p => p.team === creationTeamFilter);
      }

      if (creationSortBy === "POSITION") {
        list.sort((a, b) => (POSITION_ORDER[a.pos] - POSITION_ORDER[b.pos]) || a.name.localeCompare(b.name));
      } else if (creationSortBy === "TEAM") {
        list.sort((a, b) => a.team.localeCompare(b.team) || POSITION_ORDER[a.pos] - POSITION_ORDER[b.pos] || a.name.localeCompare(b.name));
      } else if (creationSortBy === "PRICE_ASC") {
        list.sort((a, b) => a.price - b.price || a.name.localeCompare(b.name));
      } else if (creationSortBy === "PRICE_DESC") {
        list.sort((a, b) => b.price - a.price || a.name.localeCompare(b.name));
      }

      return list;
    }

    function setCreationPositionFilter(value) {
      creationPositionFilter = value;
      renderCreation();
    }

    function setCreationTeamFilter(value) {
      creationTeamFilter = value;
      renderCreation();
    }

    function setCreationSortBy(value) {
      creationSortBy = value;
      renderCreation();
    }

    function setCreationMinPrice(value) {
      creationMinPrice = Math.min(Number(value), creationMaxPrice);
      renderCreation();
    }

    function setCreationMaxPrice(value) {
      creationMaxPrice = Math.max(Number(value), creationMinPrice);
      renderCreation();
    }

    function openPlayerModal(id) {
      activePlayerModalId = id;
      renderApp();
    }

    function closePlayerModal() {
      activePlayerModalId = null;
      renderApp();
    }

    function renderPlayerModal() {
      if (!activePlayerModalId) return "";
      const p = getPlayer(activePlayerModalId);
      if (!p) return "";
      const logo = getTeamLogo(p.team);

      return `
        <div class="player-modal-backdrop" onclick="closePlayerModal()">
          <div class="player-modal-card glass" onclick="event.stopPropagation()">
            <div class="player-modal-head">
              <div>
                <div style="display:flex;align-items:center;gap:10px;">
                  ${logo ? `<img class="kit-logo-img" src="${logo}" alt="${p.team} logo" style="position:static;width:30px;height:30px;">` : ""}
                  <div>
                    <h3 style="margin:0 0 4px 0;">${p.name}</h3>
                    <div style="color:#bfdbfe;font-size:13px;">${p.team}</div>
                  </div>
                </div>
              </div>
              <button class="danger-btn" onclick="closePlayerModal()">Close</button>
            </div>

            <div class="player-modal-grid">
              <div class="player-modal-item"><strong>Surname</strong><span>${getSurname(p.name)}</span></div>
              <div class="player-modal-item"><strong>Position</strong><span>${p.pos}</span></div>
              <div class="player-modal-item"><strong>Price</strong><span>${p.price}M</span></div>
              <div class="player-modal-item"><strong>Round Points</strong><span>${playerRound(p.id)} pts</span></div>
              <div class="player-modal-item"><strong>Total Points</strong><span>${playerTotal(p.id)} pts</span></div>
              <div class="player-modal-item"><strong>Team Count</strong><span>${countTeam(p.team)} / ${maxPerTeam}</span></div>
            </div>
          </div>
        </div>
      `;
    }

    function getSelectedByPos(pos) {
      return selected.filter(p => p.pos === pos);
    }

    function getBenchPlayers() {
      return selected.filter(p => !starterIds.includes(p.id));
    }

    function getBenchPlayersFromLineup(starters, squadIds) {
      return squadIds.filter(id => !starters.includes(id));
    }

    function validateStarterLineup(ids) {
      if (ids.length !== starterRules.total) return false;

      const lineup = ids.map(getPlayer);
      const gk = lineup.filter(p => p.pos === "GK").length;
      const def = lineup.filter(p => p.pos === "DEF").length;
      const mid = lineup.filter(p => p.pos === "MID").length;
      const fwd = lineup.filter(p => p.pos === "FWD").length;

      return (
        gk === starterRules.GK &&
        def >= starterRules.minDEF &&
        mid >= starterRules.minMID &&
        fwd >= starterRules.minFWD
      );
    }

    function starterCounts(ids) {
      const starters = ids.map(getPlayer);
      return {
        GK: starters.filter(p => p.pos === "GK").length,
        DEF: starters.filter(p => p.pos === "DEF").length,
        MID: starters.filter(p => p.pos === "MID").length,
        FWD: starters.filter(p => p.pos === "FWD").length
      };
    }

    function groupStartersByPos(ids) {
      const starters = ids.map(getPlayer);
      return {
        FWD: starters.filter(p => p.pos === "FWD"),
        MID: starters.filter(p => p.pos === "MID"),
        DEF: starters.filter(p => p.pos === "DEF"),
        GK: starters.filter(p => p.pos === "GK")
      };
    }

    function playerRound(id) {
      return userLastRoundPoints[id] || 0;
    }

    function playerTotal(id) {
      return userPlayerTotalPoints[id] || 0;
    }

    function generateValidSquadIds() {
      const byPos = {
        GK: players.filter(p => p.pos === "GK"),
        DEF: players.filter(p => p.pos === "DEF"),
        MID: players.filter(p => p.pos === "MID"),
        FWD: players.filter(p => p.pos === "FWD")
      };

      for (let attempt = 0; attempt < 300; attempt++) {
        const squad = [];
        const teamCounts = {};
        let failed = false;

        for (const pos of ["GK", "DEF", "MID", "FWD"]) {
          const need = squadLimits[pos];
          const pool = shuffle(byPos[pos]);
          let picked = 0;

          for (const player of pool) {
            if (picked >= need) break;
            if (squad.includes(player.id)) continue;
            if ((teamCounts[player.team] || 0) >= maxPerTeam) continue;

            squad.push(player.id);
            teamCounts[player.team] = (teamCounts[player.team] || 0) + 1;
            picked++;
          }

          if (picked < need) {
            failed = true;
            break;
          }
        }

        if (!failed) return squad;
      }

      throw new Error("Could not generate a valid squad");
    }

    function pickValidStartersFromSquad(squadIds) {
      const gks = shuffle(squadIds.filter(id => getPlayer(id).pos === "GK"));
      const defs = shuffle(squadIds.filter(id => getPlayer(id).pos === "DEF"));
      const mids = shuffle(squadIds.filter(id => getPlayer(id).pos === "MID"));
      const fwds = shuffle(squadIds.filter(id => getPlayer(id).pos === "FWD"));

      const validForms = possibleFormations.filter(f =>
        defs.length >= f.DEF &&
        mids.length >= f.MID &&
        fwds.length >= f.FWD &&
        gks.length >= 1
      );

      const formation = validForms[randomInt(validForms.length)];

      return [
        gks[0],
        ...defs.slice(0, formation.DEF),
        ...mids.slice(0, formation.MID),
        ...fwds.slice(0, formation.FWD)
      ];
    }

    function generateLeagueTeams() {
      const names = ["North Stars", "Blue Orbit", "Iron Pulse", "Golden Eleven", "Emerald Wave"];

      return names.map((name, index) => {
        const squadIds = generateValidSquadIds();
        const starterIds = pickValidStartersFromSquad(squadIds);
        const captain = shuffle(starterIds)[0];

        return {
          id: "league-" + (index + 1),
          name,
          squadIds,
          starterIds,
          captain,
          totalPoints: 0,
          lastRoundPoints: {},
          playerTotalPoints: {}
        };
      });
    }

    let leagueTeams = [];
    currentUser = loadSessionUser();

    if (currentUser) {
      const storedGameState = loadGameState();
      if (storedGameState) {
        hydrateGameState(storedGameState);
      } else {
        resetGameState();
      }
      if (!draftTeamName) draftTeamName = currentUser.teamName;
      if (!viewedLeagueTeamId && leagueTeams.length) viewedLeagueTeamId = leagueTeams[0].id;
      saveGameState();
    } else {
      clearGameState();
      leagueTeams = createFreshLeagueTeams();
      viewedLeagueTeamId = leagueTeams.length ? leagueTeams[0].id : null;
    }

    function getCreationWarning() {
      if (draftTeamName.trim() === "") return "You must name your team.";
      if (selected.length < 15) return "Select all 15 players.";
      if (spentBudget() > budget) return "Budget exceeded.";
      if (
        countPos("GK") !== 2 ||
        countPos("DEF") !== 5 ||
        countPos("MID") !== 5 ||
        countPos("FWD") !== 3
      ) return "Your squad must be exactly 2 GK, 5 DEF, 5 MID, 3 FWD.";
      return "";
    }

    function updateCreationControls() {
      const saveBtn = document.getElementById("saveTeamBtn");
      const warningEl = document.getElementById("creationWarning");
      if (saveBtn) saveBtn.disabled = !canSaveTeam();
      if (warningEl) warningEl.textContent = getCreationWarning();
    }

    function handleTeamNameInput(value) {
      draftTeamName = value;
      saveGameState();
      updateCreationControls();
    }

    function buildDefaultStarters() {
      const gk = getSelectedByPos("GK").slice(0, 1);
      const def = getSelectedByPos("DEF").slice(0, 4);
      const mid = getSelectedByPos("MID").slice(0, 4);
      const fwd = getSelectedByPos("FWD").slice(0, 2);
      return [...gk, ...def, ...mid, ...fwd].map(p => p.id);
    }

    function togglePlayer(id) {
      const list = document.getElementById("playersList");
      if (list) playersScrollTop = list.scrollTop;

      const player = getPlayer(id);
      const isSelected = selected.some(p => p.id === id);

      if (isSelected) {
        selected = selected.filter(p => p.id !== id);
      } else {
        if (!canAdd(player)) return;
        selected.push(player);
      }

      renderCreation();
    }

    function removeSelectedPlayer(id) {
      selected = selected.filter(p => p.id !== id);
      renderCreation();
    }

    function renderCreationSlots(pos, limit) {
      const list = getSelectedByPos(pos);

      return Array.from({ length: limit }, (_, i) => {
        const p = list[i];
        if (!p) {
          return `<div class="slot"><span class="slot-empty">Empty ${pos} slot ${i + 1}</span></div>`;
        }

        return `
          <div class="slot filled">
            <div>
              <strong>${p.name}</strong><br>
              <span style="font-size:13px;color:#bfdbfe;">${p.team}</span>
            </div>
            <div class="slot-actions">
              <span>${p.price}M</span>
              <button class="slot-remove" onclick="removeSelectedPlayer(${p.id})">Remove</button>
            </div>
          </div>
        `;
      }).join("");
    }

    function renderCreation() {
      goToCreationPage();
    }

    function saveTeam() {
      if (!draftTeamName.trim()) {
        alert("Please enter a team name.");
        return;
      }

      if (!squadIsComplete()) {
        alert("Complete a valid 15-player squad first.");
        return;
      }

      teamName = draftTeamName.trim();
      starterIds = buildDefaultStarters();

      if (captain && !starterIds.includes(captain)) captain = null;
      swapSelection = null;
      saveGameState();
      goToMainPage();
    }

    function setCaptain(value) {
      captain = value ? Number(value) : null;
      renderMain();
    }

    function clearSwapSelection() {
      swapSelection = null;
    }

    function attemptStarterBenchSwap(starterId, benchId) {
      const newStarterIds = starterIds.map(id => id === starterId ? benchId : id);

      if (!validateStarterLineup(newStarterIds)) {
        alert("Invalid lineup. You must keep exactly 1 GK, min 3 DEF, min 2 MID, min 1 FWD.");
        return;
      }

      starterIds = newStarterIds;

      if (captain && !starterIds.includes(captain)) captain = null;

      clearSwapSelection();
      renderMain();
    }

    function clickStarterCard(id) {
      if (!swapSelection) {
        swapSelection = { section: "starter", id };
        renderMain();
        return;
      }

      if (swapSelection.section === "starter") {
        if (swapSelection.id === id) clearSwapSelection();
        else swapSelection = { section: "starter", id };
        renderMain();
        return;
      }

      if (swapSelection.section === "bench") {
        attemptStarterBenchSwap(id, swapSelection.id);
      }
    }

    function clickBenchCard(id) {
      if (!swapSelection) {
        swapSelection = { section: "bench", id };
        renderMain();
        return;
      }

      if (swapSelection.section === "bench") {
        if (swapSelection.id === id) clearSwapSelection();
        else swapSelection = { section: "bench", id };
        renderMain();
        return;
      }

      if (swapSelection.section === "starter") {
        attemptStarterBenchSwap(swapSelection.id, id);
      }
    }

    function generateBaseRoundPointsForPlayer(player) {
      const appearance = 2;
      const goals = Math.floor(Math.random() * 3);
      const assists = Math.floor(Math.random() * 3);
      let points = appearance + goals * 5 + assists * 3;

      if (player.pos === "GK" || player.pos === "DEF") {
        points += Math.floor(Math.random() * 3);
      }

      return points;
    }

    function simulateMatchday() {
      if (!captain || !starterIds.includes(captain)) {
        alert("Please choose a captain from your starting lineup.");
        return;
      }

      currentRound++;

      const baseRoundPoints = {};
      players.forEach(p => {
        baseRoundPoints[p.id] = generateBaseRoundPointsForPlayer(p);
      });

      selected.forEach(p => {
        userLastRoundPoints[p.id] = baseRoundPoints[p.id];
      });

      let roundTotal = 0;
      starterIds.forEach(id => {
        let pts = baseRoundPoints[id];
        if (id === captain) pts *= 2;

        userLastRoundPoints[id] = pts;
        userPlayerTotalPoints[id] = (userPlayerTotalPoints[id] || 0) + pts;
        roundTotal += pts;
      });
      totalPoints += roundTotal;

      leagueTeams.forEach(team => {
        team.lastRoundPoints = {};
        team.squadIds.forEach(id => {
          team.lastRoundPoints[id] = baseRoundPoints[id];
        });

        let teamRoundTotal = 0;
        team.starterIds.forEach(id => {
          let pts = baseRoundPoints[id];
          if (id === team.captain) pts *= 2;

          team.lastRoundPoints[id] = pts;
          team.playerTotalPoints[id] = (team.playerTotalPoints[id] || 0) + pts;
          teamRoundTotal += pts;
        });

        team.totalPoints += teamRoundTotal;
      });

      renderMain();
    }

    function kitCardHTML(player, options = {}) {
      const {
        clickable = false,
        selectedSwap = false,
        onClick = "",
        showC = false,
        roundPoints = 0,
        crossedRound = false,
        actionHtml = "",
        useSurname = false
      } = options;

      const logo = getTeamLogo(player.team);
      const displayName = useSurname ? getSurname(player.name) : player.name;

      return `
        <div class="kit-card ${clickable ? "clickable" : ""} ${selectedSwap ? "selected-swap" : ""}" ${onClick ? `onclick="${onClick}"` : ""}>
          <div class="kit-shell">
            <div class="shirt-top" style="background:${teamGradient(player.team)};">
              <div class="shirt-collar"></div>
              ${logo ? `<img class="kit-logo-img" src="${logo}" alt="${player.team} logo">` : ""}
              ${showC ? `<div class="badge-c">C</div>` : ""}
            </div>
            <div class="kit-body">
              <div class="kit-name">${displayName}</div>
              <div class="kit-team">${player.team}</div>
              <div class="kit-stats">
                ${player.pos}<br>
                <span class="${crossedRound ? "bench-crossed" : ""}">Round: ${roundPoints} pts</span>
              </div>
              ${actionHtml}
            </div>
          </div>
        </div>
      `;
    }

    function viewLeagueTeam(id) {
      viewedLeagueTeamId = viewedLeagueTeamId === id ? null : id;
      renderMain();
    }

    function renderLeagueTeamViewer(team) {
      const grouped = groupStartersByPos(team.starterIds);
      const benchIds = getBenchPlayersFromLineup(team.starterIds, team.squadIds);

      return `
        <div class="viewer-wrap">
          <div class="viewer-box glass">
            <div class="panel-header">
              <div>
                <h3 style="margin-bottom:4px;">${team.name} Squad</h3>
                <div style="color:#bfdbfe;font-size:13px;">Total points: ${team.totalPoints}</div>
              </div>
            </div>

            <div class="field-outer" style="margin-top:0;">
              <div class="pitch-wrap">
                <div class="pitch-lines"></div>
                <div class="pitch-half-line"></div>
                <div class="pitch-center-circle"></div>
                <div class="pitch-center-dot"></div>
                <div class="pitch-box-top"></div>
                <div class="pitch-box-bottom"></div>

                <div class="pitch-layout">
                  <div class="pitch-row">
                    ${grouped.FWD.map(p => kitCardHTML(p, {
                      clickable: true,
                      onClick: `openPlayerModal(${p.id})`,
                      showC: team.captain === p.id,
                      roundPoints: team.lastRoundPoints[p.id] || 0,
                      useSurname: true
                    })).join("")}
                  </div>

                  <div class="pitch-row">
                    ${grouped.MID.map(p => kitCardHTML(p, {
                      clickable: true,
                      onClick: `openPlayerModal(${p.id})`,
                      showC: team.captain === p.id,
                      roundPoints: team.lastRoundPoints[p.id] || 0,
                      useSurname: true
                    })).join("")}
                  </div>

                  <div class="pitch-row">
                    ${grouped.DEF.map(p => kitCardHTML(p, {
                      clickable: true,
                      onClick: `openPlayerModal(${p.id})`,
                      showC: team.captain === p.id,
                      roundPoints: team.lastRoundPoints[p.id] || 0,
                      useSurname: true
                    })).join("")}
                  </div>

                  <div class="pitch-row">
                    ${grouped.GK.map(p => kitCardHTML(p, {
                      clickable: true,
                      onClick: `openPlayerModal(${p.id})`,
                      showC: team.captain === p.id,
                      roundPoints: team.lastRoundPoints[p.id] || 0,
                      useSurname: true
                    })).join("")}
                  </div>
                </div>
              </div>
            </div>

            <div class="bench-wrap">
              <div class="formation-box glass">
                <h3 style="margin-bottom:10px;">Bench</h3>
                <div class="bench-grid">
                  ${benchIds.map(id => {
                    const p = getPlayer(id);
                    return kitCardHTML(p, {
                      clickable: true,
                      onClick: `openPlayerModal(${p.id})`,
                      showC: team.captain === p.id,
                      roundPoints: team.lastRoundPoints[p.id] || 0,
                      crossedRound: true,
                      useSurname: true
                    });
                  }).join("")}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderMain() {
      goToMainPage();
    }

    renderApp();
