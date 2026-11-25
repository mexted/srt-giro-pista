// =====================================================================
//  CONTENUTI DELLA PRESENTAZIONE · SOLO Racing Team · Stagione 2027
//  Puoi modificare questo file con un qualsiasi editor di testo.
//  Regola: cambia solo il testo tra le virgolette. Se un campo è vuoto ("")
//  sullo schermo compare un segnaposto tratteggiato "DA FORNIRE".
//  Foto: mettile nella cartella "media" e scrivi qui il nome del file.
//  Video: mettili nella cartella "video" con il nome indicato qui sotto.
// =====================================================================
window.SRT_CONFIG = {
  evento: {
    titolo: "Presentazione Stagione 2027",
    data: "29 novembre 2026",
    luogo: "Beta Formazione",
    citta: ""                       // es. "Argenta (FE)"
  },

  // Scaletta mostrata sulla griglia di partenza
  programma: [
    { ora: "11:00", voce: "Benvenuto" },
    { ora: "",      voce: "Beta Formazione" },
    { ora: "",      voce: "Coppa Italia Velocità", sub: "Recap 2026 · Stagione 2027" },
    { ora: "",      voce: "CIV Sportbike",         sub: "Recap 2026 · Stagione 2027" },
    { ora: "",      voce: "Ringraziamento sponsor 2026" },
    { ora: "",      voce: "Quiz a premi" },
    { ora: "",      voce: "Saluti" },
    { ora: "13:00", voce: "Rinfresco" },
    { ora: "",      voce: "Giri in pista sterrata", sub: "Meteo permettendo" }
  ],

  // Presentazione del partner che ospita (la fanno loro)
  beta: {
    logo: "sp-betaformazione.png",
    slogan: "",                     // titolo grande sotto il logo (vuoto = niente)
    relatore: { nome: "", ruolo: "", foto: "" },
    colore: "#ffaa11",              // arancione Beta Formazione delle infografiche
    // 3 macro aree: un clic per scheda. "grafica" = infografica animata (sicurezza, crediti, scuola);
    // per mettere una foto al suo posto: grafica: "" e foto: "nomefile.jpg"
    schede: [
      { titolo: "Formazione e sicurezza sul lavoro", grafica: "sicurezza", testo: "Corsi per lavoratori e aziende", foto: "" },
      { titolo: "Crediti formativi professionali",   grafica: "crediti",   testo: "Ingegneri · Architetti · Geometri · Periti industriali · Periti agrari · Agronomi · Geologi", foto: "" },
      { titolo: "Mondo scuola",                      grafica: "scuola",    testo: "Scuola · Diploma · Università", foto: "" }
    ]
  },

  // COPPA ITALIA VELOCITÀ
  coppaItalia2026: {
    titolo: "Coppa Italia Velocità",
    etichetta: "Recap 2026",
    classi: ["Trofeo Aprilia RS 457", "Trofeo Aprilia RS 660"],   // DA CONFERMARE (il sito dice RS 457 e Italiano Amatori)
    dati: [
      { valore: "", etichetta: "Gare" },
      { valore: "", etichetta: "Piloti" },
      { valore: "", etichetta: "Wild card" },
      { valore: "", etichetta: "Podi" }
    ],
    moto: "bike-rs457.webp",
    video: "video/recap-coppa-italia-2026.mp4",
    schermo: "Recap 2026"
  },
  coppaItalia2027: {
    titolo: "Coppa Italia Velocità",
    etichetta: "Stagione 2027 · Nuovi piloti",
    gruppi: [
      { classe: "Trofeo Aprilia RS 457", piloti: [
        { nome: "", numero: "", foto: "" },
        { nome: "", numero: "", foto: "" },
        { nome: "", numero: "", foto: "" },
        { nome: "", numero: "", foto: "" }
      ] },
      { classe: "Trofeo Aprilia RS 660", piloti: [
        { nome: "", numero: "", foto: "" },
        { nome: "", numero: "", foto: "" },
        { nome: "", numero: "", foto: "" }
      ] }
    ]
  },

  // CIV SPORTBIKE
  civ2026: {
    titolo: "CIV Sportbike",
    etichetta: "Recap 2026",
    pilota: { nome: "Matteo Fabbri", numero: "49", foto: "rider-fabbri.jpg" },
    messaggio: "Un anno per imparare",
    dati: [
      { valore: "", etichetta: "Round" },
      { valore: "", etichetta: "Gare" },
      { valore: "", etichetta: "Miglior risultato" },
      { valore: "", etichetta: "Punti" }
    ],
    video: "video/recap-civ-sportbike-2026.mp4",
    schermo: "Recap 2026"
  },
  civ2027: {
    titolo: "CIV Sportbike",
    etichetta: "Stagione 2027",
    frase: "Nuovo pilota",
    dati: [
      { valore: "", etichetta: "Round" },
      { valore: "", etichetta: "Moto" },
      { valore: "", etichetta: "Obiettivo" }
    ],
    video: "video/presentazione-nuovo-pilota-2027.mp4",
    schermo: "Nuovo pilota 2027"
  },
  // Svelamento dopo il video: un clic per riga, poi la foto. L'ultima riga è la più grande.
  // 2018: terzo posto europeo Supersport 600 (GRT Yamaha Junior Team)
  coppola: {
    righe: [
      { testo: "Campione Italiano CIV Supersport 300", anno: "2024" },
      { testo: "3° Campionato Europeo Supersport 600", anno: "2018" },
      { testo: "Vice Campione del Mondo Supersport 300", anno: "2017" }
    ],
    nome: "Alfonso Coppola",
    numero: "",
    foto: ""
  },

  // RINGRAZIAMENTO SPONSOR 2026 (nell'ordine di chiamata): logo, GRAZIE e infografica animata in loop.
  // "grafica": beta, cocchiola, tryeco, carbon, motoclub. Con grafica: "" compaiono le 3 "foto" (cartella media).
  sponsor: [
    { nome: "Beta Formazione", logo: "sp-betaformazione.png", grafica: "beta",      colore: "#ffaa11", foto: ["", "", ""] },
    { nome: "Cocchiola",       logo: "sp-cocchiola.png",      grafica: "cocchiola", colore: "#0abab5", foto: ["", "", ""] },
    { nome: "TryeCo.com",      logo: "sp-tryeco.png",         grafica: "tryeco",    colore: "#e52521", foto: ["", "", ""] },
    { nome: "666 Carbon",      logo: "sp-666carbon.png",      grafica: "carbon",    colore: "#8f80ff", foto: ["", "", ""] },
    { nome: "Motoclub 44011",  logo: "sp-motoclub44011.png",  grafica: "motoclub",  colore: "#8f80ff", foto: ["", "", ""] }
  ],

  // QUIZ: incolla qui l'indirizzo della lobby Kahoot (quello che si apre dopo "Start")
  // QUIZ GRAN PREMIO SOLO (nostro, su Render): indirizzo dello schermo con la chiave, es.
  // "https://srt-quiz.onrender.com/schermo?k=CHIAVE". Il clicker comanda il quiz; alla fine si torna alla presentazione.
  quiz: {
    url: "https://srt-quiz.onrender.com/schermo",   // versione pubblica: senza chiave, il quiz non si può comandare da qui
    modalita: "dentro"              // "dentro" = dentro la presentazione · "finestra" = apre una nuova finestra
  },

  // GIOCO DAL TELEFONO: QR code e classifica sulla schermata dell'elicottero
  gioco: {
    url: "https://mexted.github.io/srt-giro-pista/", // indirizzo pubblico del gioco (es. https://nomeutente.github.io/srt-giro-pista/)
    classifica: "https://hook.eu2.make.com/vcrbo3di7cfqpi2cmz3qc36v7b7dl68k",
    mostraClassifica: true          // top 5 in diretta accanto al QR (serve internet sul portatile)
  },

  finale: {
    righe: ["Grazie a tutti", "Benvenuto 2027"]
  },

  audio: {
    motore: true,                   // rombo sintetico durante gli spostamenti (si spegne con il tasto S)
    musica: "integrata",            // "integrata" = musica di sottofondo inclusa; "" = nessuna; oppure "audio/tuofile.mp3"
    volumeMusica: 0.12              // 0 = muta, 1 = piena. Durante video e Kahoot si spegne da sola (tasto A: accendi/spegni)
  }
};
