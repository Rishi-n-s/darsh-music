/**
 * DARSH RADIO & MUSIC STREAMING ENGINE
 * Complete Web Audio Visualizer, Equalizer, Station Tuner, and Multi-Track Controller
 */

// ==========================================================================
// 1. TRACKS DATABASE (All 39 local tracks categorized & tagged)
// ==========================================================================
const TRACKS = [
  {
    id: 1,
    title: "Kun Faya Kun",
    artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
    movie: "Rockstar",
    genre: "sufi",
    genreLabel: "Sufi & Soul",
    src: "asstes/music/ROCKSTAR Kun Faya Kun (Full Video Song)  Ranbir Kapoor  A.R. Rahman, Javed Ali, Mohit Chauhan_1080p.mp4",
    accentColor: "#ffb800",
    frequency: "101.2 FM",
    duration: "7:53"
  },
  {
    id: 2,
    title: "Teri Deewani",
    artist: "Kailash Kher, Kailasa",
    movie: "Kailasa Album",
    genre: "sufi",
    genreLabel: "Sufi Rock",
    src: "asstes/music/Teri Deewani - Kailash Kher  Official Video  Kailasa  Paresh  Naresh_480p.mp4",
    accentColor: "#ff3366",
    frequency: "101.2 FM",
    duration: "5:21"
  },
  {
    id: 3,
    title: "Bulleya",
    artist: "Papon, Vishal & Shekhar",
    movie: "Sultan",
    genre: "sufi",
    genreLabel: "Sufi Rock",
    src: "asstes/music/Bulleya  Full Song  Sultan  Salman Khan, Anushka Sharma  Papon  Vishal & Shekhar  Irshad Kamil_1080p.mp4",
    accentColor: "#00f5d4",
    frequency: "101.2 FM",
    duration: "5:57"
  },
  {
    id: 4,
    title: "O Rangrez",
    artist: "Shreya Ghoshal, Javed Bashir",
    movie: "Bhaag Milkha Bhaag",
    genre: "sufi",
    genreLabel: "Classic Sufi",
    src: "asstes/music/O Rangrez Full Video - Bhaag Milkha BhaagFarhan, SonamShreya Ghoshal, Javed Bashir_1080p.mp4",
    accentColor: "#8a2be2",
    frequency: "101.2 FM",
    duration: "6:25"
  },
  {
    id: 5,
    title: "Jugni (Bulle Shah)",
    artist: "Tochi Raina",
    movie: "Sufi Folk",
    genre: "sufi",
    genreLabel: "Folk Sufi",
    src: "asstes/music/Jugni Bulle Shah Tochi Raina - with Lyrics_1080p.mp4",
    accentColor: "#ff4d79",
    frequency: "101.2 FM",
    duration: "4:38"
  },
  {
    id: 6,
    title: "Aaj Se Teri",
    artist: "Arijit Singh, Amit Trivedi",
    movie: "Padman",
    genre: "romantic",
    genreLabel: "Romantic Hit",
    src: "asstes/music/Aaj Se Teri  Padman  Akshay Kumar & Radhika Apte  Arijit Singh  Amit Trivedi_1080p.mp4",
    accentColor: "#ff3366",
    frequency: "103.8 FM",
    duration: "5:12"
  },
  {
    id: 7,
    title: "Darkhaast",
    artist: "Arijit Singh, Sunidhi Chauhan, Mithoon",
    movie: "Shivaay",
    genre: "romantic",
    genreLabel: "Romantic Duet",
    src: "asstes/music/DARKHAAST Full Video Song   SHIVAAY  Arijit Singh & Sunidhi Chauhan  Ajay Devgn  T-Series_1080p.mp4",
    accentColor: "#00f5d4",
    frequency: "103.8 FM",
    duration: "6:14"
  },
  {
    id: 8,
    title: "Kaise Hua",
    artist: "Vishal Mishra, Manoj Muntashir",
    movie: "Kabir Singh",
    genre: "romantic",
    genreLabel: "Soulful Romance",
    src: "asstes/music/LYRICAL Kaise Hua  Kabir Singh  Shahid K, Kiara A, Sandeep V  Vishal Mishra, Manoj Muntashir_1080p.mp4",
    accentColor: "#8a2be2",
    frequency: "103.8 FM",
    duration: "3:54"
  },
  {
    id: 9,
    title: "Raabta (Kehte Hain Khuda)",
    artist: "Arijit Singh, Hamsika, Pritam",
    movie: "Agent Vinod",
    genre: "romantic",
    genreLabel: "Romantic Melody",
    src: "asstes/music/Raabta (Kehte Hain Khuda) Full Song With Lyrics  Agent Vinod  Saif Ali Khan, Kareena Kapoor,Pritam_1080p.mp4",
    accentColor: "#ff3366",
    frequency: "103.8 FM",
    duration: "4:04"
  },
  {
    id: 10,
    title: "Tu Chahiye",
    artist: "Atif Aslam, Pritam",
    movie: "Bajrangi Bhaijaan",
    genre: "romantic",
    genreLabel: "Romantic Hit",
    src: "asstes/music/Tu Chahiye FULL VIDEO Song - Atif Aslam Pritam  Bajrangi Bhaijaan  Salman Khan, Kareena Kapoor_1080p.mp4",
    accentColor: "#ffb800",
    frequency: "103.8 FM",
    duration: "4:32"
  },
  {
    id: 11,
    title: "O Saathi",
    artist: "Atif Aslam, Arko",
    movie: "Baaghi 2",
    genre: "romantic",
    genreLabel: "Romantic Soul",
    src: "asstes/music/O Saathi Video Song  Baaghi 2  Tiger Shroff  Disha Patani  Arko  Ahmed Khan  Sajid Nadiadwala_1080p.mp4",
    accentColor: "#00f5d4",
    frequency: "103.8 FM",
    duration: "4:11"
  },
  {
    id: 12,
    title: "Yeh Fitoor Mera",
    artist: "Arijit Singh, Amit Trivedi",
    movie: "Fitoor",
    genre: "romantic",
    genreLabel: "Passion & Melancholy",
    src: "asstes/music/Yeh Fitoor Mera - Full Video  Fitoor  Aditya Roy Kapur, Katrina Kaif  Arijit Singh  Amit Trivedi_1080p.mp4",
    accentColor: "#8a2be2",
    frequency: "103.8 FM",
    duration: "4:42"
  },
  {
    id: 13,
    title: "Deewaana Deewaana",
    artist: "A.R. Rahman, Dhanush",
    movie: "Tere Ishk Mein",
    genre: "romantic",
    genreLabel: "Melodic Passion",
    src: "asstes/music/Deewaana Deewaana (Full Video) Tere Ishk Mein  Dhanush, Kriti  AR Rahman  Aanand LR  Bhushan K_1080p.mp4",
    accentColor: "#ff3366",
    frequency: "103.8 FM",
    duration: "4:15"
  },
  {
    id: 14,
    title: "Tenu Sang Rakhna",
    artist: "Arijit Singh, Achint, Anumita",
    movie: "Jigra",
    genre: "romantic",
    genreLabel: "Indie Romance",
    src: "asstes/music/Tenu Sang Rakhna - Full Song Audio  Jigra  Alia Bhatt  Vedang Raina  Arijit Singh,Achint,Anumita_1080p.mp4",
    accentColor: "#ffb800",
    frequency: "103.8 FM",
    duration: "4:05"
  },
  {
    id: 15,
    title: "Finding Her",
    artist: "Kushagra, Vanshika, Bharath",
    movie: "UR Debut",
    genre: "romantic",
    genreLabel: "Melodic Vibe",
    src: "asstes/music/Finding Her (Jana Mere Sawalon Ka Manzar Tu)  Kushagra  Vanshika  Bharath  Karan Maini UR Debut_1080p.mp4",
    accentColor: "#00f5d4",
    frequency: "103.8 FM",
    duration: "3:30"
  },
  {
    id: 16,
    title: "Finding Her (Female Version)",
    artist: "Tanishka Bahl, Kushagra, Bharath",
    movie: "UR Debut",
    genre: "romantic",
    genreLabel: "Chill Romance",
    src: "asstes/music/Finding Her (Female Version)  Tanishka Bahl  Kushagra  Bharath  Saaheal  UR Debut  New Songs_1080p.mp4",
    accentColor: "#ff4d79",
    frequency: "103.8 FM",
    duration: "3:40"
  },
  {
    id: 17,
    title: "Ishqa Ve",
    artist: "Zeeshan Ali, Sandeep Aulakh",
    movie: "Punjabi Single",
    genre: "romantic",
    genreLabel: "Punjabi Soul",
    src: "asstes/music/Ishqa Ve - Zeeshan Ali  Yuvraj Tung  Seerat Mast  Sandeep Aulakh  Latest Punjabi Songs 2025_1080p.mp4",
    accentColor: "#8a2be2",
    frequency: "103.8 FM",
    duration: "4:18"
  },
  {
    id: 18,
    title: "Jhaag",
    artist: "Chaar Diwaari",
    movie: "Def Jam India",
    genre: "indie",
    genreLabel: "Experimental Indie",
    src: "asstes/music/Chaar Diwaari - Jhaag (Official Video)  Def Jam India_1080p.mp4",
    accentColor: "#ff3366",
    frequency: "94.5 FM",
    duration: "2:50"
  },
  {
    id: 19,
    title: "MERA SAMAN KAHAN HAI",
    artist: "Chaar Diwaari",
    movie: "TERI MAIYAT KE GAANE",
    genre: "indie",
    genreLabel: "Experimental Rap",
    src: "asstes/music/Chaar Diwaari - MERA SAMAN KAHAN HAI (Official Video)  TERI MAIYAT KE GAANE EP_1080p.mp4",
    accentColor: "#ffb800",
    frequency: "94.5 FM",
    duration: "3:10"
  },
  {
    id: 20,
    title: "Thehra",
    artist: "Chaar Diwaari",
    movie: "Pyaar Diwaari Arc 1",
    genre: "indie",
    genreLabel: "Atmospheric Indie",
    src: "asstes/music/Chaar Diwaari - Thehra (Official Video)  Pyaar Diwaari Arc 1  Def Jam India_1080p.mp4",
    accentColor: "#00f5d4",
    frequency: "94.5 FM",
    duration: "3:25"
  },
  {
    id: 21,
    title: "FAREBI",
    artist: "Chaar Diwaari x Raftaar",
    movie: "Pyaar Diwaari Arc 3",
    genre: "indie",
    genreLabel: "Desi Hip Hop",
    src: "asstes/music/Chaar Diwaari X @raftaarmusic  - FAREBI (Official Video)  Pyaar Diwaari Arc 3_1080p.mp4",
    accentColor: "#ff3366",
    frequency: "94.5 FM",
    duration: "3:45"
  },
  {
    id: 22,
    title: "Aashiqana",
    artist: "Chaar Diwaari ft. Indian Ocean, Gini",
    movie: "Parvana EP",
    genre: "indie",
    genreLabel: "Fusion Indie",
    src: "asstes/music/Chaar Diwaari ft. Indian Ocean, Gini - Aashiqana  Parvana EP  Def Jam India_1080p.mp4",
    accentColor: "#8a2be2",
    frequency: "94.5 FM",
    duration: "3:15"
  },
  {
    id: 23,
    title: "Iss Tarah",
    artist: "Chaar Diwaari ft. Sonu Nigam",
    movie: "Parvana EP",
    genre: "indie",
    genreLabel: "Soulful Indie",
    src: "asstes/music/Chaar Diwaari ft. Sonu Nigam - Iss Tarah  Parvana EP  Def Jam India_1080p.mp4",
    accentColor: "#00f5d4",
    frequency: "94.5 FM",
    duration: "4:02"
  },
  {
    id: 24,
    title: "Banda Kaam Ka",
    artist: "Chaar Diwaari x Sanjith Hegde",
    movie: "Parvana EP",
    genre: "indie",
    genreLabel: "Funk Indie",
    src: "asstes/music/Chaar Diwaari x Sanjith Hegde - Banda Kaam Ka (Official Video)  Parvana EP  Def Jam India_1080p.mp4",
    accentColor: "#ffb800",
    frequency: "94.5 FM",
    duration: "3:20"
  },
  {
    id: 25,
    title: "Safar",
    artist: "Bayaan, Sherazam",
    movie: "Indie Acoustic",
    genre: "indie",
    genreLabel: "Acoustic Journey",
    src: "asstes/music/Bayaan  Sherazam - Safar_1080p.mp4",
    accentColor: "#ff4d79",
    frequency: "94.5 FM",
    duration: "4:15"
  },
  {
    id: 26,
    title: "Bairan",
    artist: "Banjaare",
    movie: "Animated Love Story",
    genre: "chill",
    genreLabel: "Soulful Chill",
    src: "asstes/music/Bairan – Animated Love Story  Banjaare (Official Video)_1080p.mp4",
    accentColor: "#8a2be2",
    frequency: "106.0 FM",
    duration: "3:50"
  },
  {
    id: 27,
    title: "HASEEN",
    artist: "Talwiinder, NDS, Rippy",
    movie: "Official Visualizer",
    genre: "chill",
    genreLabel: "Synthwave Chill",
    src: "asstes/music/HASEEN - TALWIINDER, NDS, RIPPY (Official Visualizer)_1080p.mp4",
    accentColor: "#ff3366",
    frequency: "106.0 FM",
    duration: "3:10"
  },
  {
    id: 28,
    title: "Jhol (Acoustic)",
    artist: "Maanu, Annural Khalid, Abdullah Siddiqui",
    movie: "Acoustic Session",
    genre: "chill",
    genreLabel: "Lo-Fi Acoustic",
    src: "asstes/music/Maanu - Jhol (Acoustic)  Annural Khalid  Abdullah Siddiqui  Asfand_1080p.mp4",
    accentColor: "#00f5d4",
    frequency: "106.0 FM",
    duration: "3:05"
  },
  {
    id: 29,
    title: "Khat (Lyrical)",
    artist: "Navjot Ahuja",
    movie: "Poetic Soul",
    genre: "chill",
    genreLabel: "Poetic Nostalgia",
    src: "asstes/music/Navjot Ahuja - Khat (Lyrical Video)_1080p.mp4",
    accentColor: "#ffb800",
    frequency: "106.0 FM",
    duration: "3:40"
  },
  {
    id: 30,
    title: "Khat (Official Audio)",
    artist: "Navjot Ahuja",
    movie: "Acoustic Soul",
    genre: "chill",
    genreLabel: "Acoustic Vibe",
    src: "asstes/music/Navjot Ahuja - Khat (Official Audio)_1080p.mp4",
    accentColor: "#ff4d79",
    frequency: "106.0 FM",
    duration: "3:40"
  },
  {
    id: 31,
    title: "Dooron Dooron (Unplugged)",
    artist: "Paresh Pahuja, Shiv Tandan",
    movie: "T-Series Unplugged",
    genre: "chill",
    genreLabel: "Unplugged Vibe",
    src: "asstes/music/Dooron Dooron (Official Video) - Unplugged  Paresh Pahuja  Shiv Tandan  T-Series_1080p.mp4",
    accentColor: "#8a2be2",
    frequency: "106.0 FM",
    duration: "4:08"
  },
  {
    id: 32,
    title: "Dil To Bachcha Hai Ji",
    artist: "Rahat Fateh Ali Khan, Vishal Bhardwaj",
    movie: "Ishqiya",
    genre: "chill",
    genreLabel: "Classic Nostalgia",
    src: "asstes/music/Dil To Bachcha Hai Ji HD 5.1 Sound ll Ishqiya 2010 ll Rahat Fateh Ali Khan ll 4k & 1080p HD ll_1080p.mp4",
    accentColor: "#ffb800",
    frequency: "106.0 FM",
    duration: "4:50"
  },
  {
    id: 33,
    title: "Zindagi Kuch Toh Bata (Reprise)",
    artist: "Rahat Fateh Ali Khan, Rekha Bhardwaj, Pritam",
    movie: "Bajrangi Bhaijaan",
    genre: "chill",
    genreLabel: "Feel Good Vibe",
    src: "asstes/music/Zindagi Kuch Toh Bata (Reprise) Full Song with LYRICS Pritam  Salman Khan  Bajrangi Bhaijaan_1080p.mp4",
    accentColor: "#00f5d4",
    frequency: "106.0 FM",
    duration: "4:23"
  },
  {
    id: 34,
    title: "Teri Teri Yaad",
    artist: "Gyanii Sangeet",
    movie: "Lo-Fi Collective",
    genre: "chill",
    genreLabel: "Lo-Fi Chill",
    src: "asstes/music/TERI TERI YAAD  GYANII SANGEET  FULL VIDEO_1080p.mp4",
    accentColor: "#ff3366",
    frequency: "106.0 FM",
    duration: "3:12"
  },
  {
    id: 35,
    title: "Othaiyadi Pathayila",
    artist: "Dhibu Ninan Thomas, Arunraja",
    movie: "Kanaa",
    genre: "chill",
    genreLabel: "Folk Melody",
    src: "asstes/music/Kanaa - Othaiyadi Pathayila Video  Arunraja Kamaraj  Dhibu Ninan Thomas_1080p.mp4",
    accentColor: "#ffb800",
    frequency: "106.0 FM",
    duration: "4:10"
  },
  {
    id: 36,
    title: "Koodappirannor",
    artist: "Sooraj Santhosh, Ankit Menon",
    movie: "Vaazha 2",
    genre: "chill",
    genreLabel: "Indie Nostalgia",
    src: "asstes/music/Koodappirannor - Video  Vaazha 2  Parvatish PradeepSooraj SanthoshAnkit MenonVipin DasSavin SA_1080p.mp4",
    accentColor: "#8a2be2",
    frequency: "106.0 FM",
    duration: "3:45"
  },
  {
    id: 37,
    title: "12 Years",
    artist: "Lucky Rathore ft. PnkjOfficial",
    movie: "Prod. Maxx Turnn",
    genre: "energy",
    genreLabel: "Desi Hip Hop",
    src: "asstes/music/12 Years - Lucky Rathore ft. @PnkjOfficial   Prod. Maxx Turnn  2025_1080p.mp4",
    accentColor: "#ff3366",
    frequency: "90.5 FM",
    duration: "2:45"
  },
  {
    id: 38,
    title: "Udi Udi",
    artist: "Aneesh Poojari & Sarkar Music",
    movie: "The Collective Tape",
    genre: "energy",
    genreLabel: "Trap & Drill",
    src: "asstes/music/UDI UDI   @Aneesh.Poojari &_ @sarkarmusic.25  The Collective Tape  Official Music Video_1080p.mp4",
    accentColor: "#00f5d4",
    frequency: "90.5 FM",
    duration: "3:10"
  },
  {
    id: 39,
    title: "Darsh Midnight Frequency",
    artist: "Darsh Radio Special",
    movie: "Ambient Lo-Fi Sessions",
    genre: "chill",
    genreLabel: "Ambient Frequency",
    src: "asstes/music/_1080p.mp4",
    accentColor: "#ff99bb",
    frequency: "98.4 FM",
    duration: "3:30"
  }
];

// ==========================================================================
// 2. AUDIO & EQUALIZER CONTROLLER (Web Audio API)
// ==========================================================================
class WebAudioEngine {
  constructor(mediaElement) {
    this.mediaElement = mediaElement;
    this.audioCtx = null;
    this.analyser = null;
    this.sourceNode = null;
    this.isInitialized = false;

    // 5-Band Equalizer Filters
    this.filters = {
      eq60: null,
      eq250: null,
      eq1k: null,
      eq4k: null,
      eq12k: null
    };

    this.presets = {
      bass: [6, 3, -1, 2, 4],
      vocal: [-2, 0, 4, 3, 1],
      acoustic: [3, 1, 0, 2, 3],
      lofi: [-4, 2, 1, -2, -5],
      stage: [4, 2, -1, 3, 5],
      flat: [0, 0, 0, 0, 0]
    };
  }

  init() {
    if (this.isInitialized) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();

      // Analyser Node
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 256;
      this.analyser.smoothingTimeConstant = 0.82;

      // Source Node from Video/Audio
      this.sourceNode = this.audioCtx.createMediaElementSource(this.mediaElement);

      // Create 5 Biquad Filter Nodes
      this.filters.eq60 = this.audioCtx.createBiquadFilter();
      this.filters.eq60.type = "lowshelf";
      this.filters.eq60.frequency.value = 60;
      this.filters.eq60.gain.value = 6;

      this.filters.eq250 = this.audioCtx.createBiquadFilter();
      this.filters.eq250.type = "peaking";
      this.filters.eq250.frequency.value = 250;
      this.filters.eq250.gain.value = 3;

      this.filters.eq1k = this.audioCtx.createBiquadFilter();
      this.filters.eq1k.type = "peaking";
      this.filters.eq1k.frequency.value = 1000;
      this.filters.eq1k.gain.value = -1;

      this.filters.eq4k = this.audioCtx.createBiquadFilter();
      this.filters.eq4k.type = "peaking";
      this.filters.eq4k.frequency.value = 4000;
      this.filters.eq4k.gain.value = 2;

      this.filters.eq12k = this.audioCtx.createBiquadFilter();
      this.filters.eq12k.type = "highshelf";
      this.filters.eq12k.frequency.value = 12000;
      this.filters.eq12k.gain.value = 4;

      // Chain: Source -> EQ60 -> EQ250 -> EQ1k -> EQ4k -> EQ12k -> Analyser -> Destination
      this.sourceNode.connect(this.filters.eq60);
      this.filters.eq60.connect(this.filters.eq250);
      this.filters.eq250.connect(this.filters.eq1k);
      this.filters.eq1k.connect(this.filters.eq4k);
      this.filters.eq4k.connect(this.filters.eq12k);
      this.filters.eq12k.connect(this.analyser);
      this.analyser.connect(this.audioCtx.destination);

      this.isInitialized = true;
    } catch (e) {
      console.warn("Web Audio API not supported or autoplay blocked:", e);
    }
  }

  resume() {
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  setGain(band, gainVal) {
    if (this.filters[band]) {
      this.filters[band].gain.value = parseFloat(gainVal);
    }
  }

  applyPreset(presetName) {
    const values = this.presets[presetName] || this.presets.flat;
    const bands = ["eq60", "eq250", "eq1k", "eq4k", "eq12k"];
    bands.forEach((band, index) => {
      this.setGain(band, values[index]);
      const slider = document.getElementById(band);
      const gainDisplay = document.getElementById("gain" + band.replace("eq", ""));
      if (slider) slider.value = values[index];
      if (gainDisplay) gainDisplay.textContent = (values[index] > 0 ? "+" : "") + values[index] + "dB";
    });
  }
}

// ==========================================================================
// 3. VISUALIZER RENDERER
// ==========================================================================
class CanvasVisualizer {
  constructor(canvas, audioEngine) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.audioEngine = audioEngine;
    this.mode = "bars"; // 'bars' | 'wave' | 'circle'
    this.animationId = null;

    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = this.canvas.parentElement.clientWidth * window.devicePixelRatio;
    this.canvas.height = this.canvas.parentElement.clientHeight * window.devicePixelRatio;
  }

  start() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.render = this.render.bind(this);
    this.render();
  }

  render() {
    this.animationId = requestAnimationFrame(this.render);

    const width = this.canvas.width;
    const height = this.canvas.height;
    this.ctx.clearRect(0, 0, width, height);

    if (!this.audioEngine || !this.audioEngine.analyser) {
      this.renderIdle(width, height);
      return;
    }

    const bufferLength = this.audioEngine.analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    if (this.mode === "wave") {
      this.audioEngine.analyser.getByteTimeDomainData(dataArray);
      this.renderWaveform(dataArray, bufferLength, width, height);
    } else if (this.mode === "circle") {
      this.audioEngine.analyser.getByteFrequencyData(dataArray);
      this.renderCircle(dataArray, bufferLength, width, height);
    } else {
      this.audioEngine.analyser.getByteFrequencyData(dataArray);
      this.renderBars(dataArray, bufferLength, width, height);
    }
  }

  renderIdle(width, height) {
    // Subtle idle wave line
    this.ctx.beginPath();
    this.ctx.strokeStyle = "rgba(255, 51, 102, 0.25)";
    this.ctx.lineWidth = 2 * window.devicePixelRatio;
    const time = Date.now() * 0.002;
    for (let x = 0; x < width; x += 10) {
      const y = height / 2 + Math.sin(x * 0.01 + time) * 15;
      if (x === 0) this.ctx.moveTo(x, y);
      else this.ctx.lineTo(x, y);
    }
    this.ctx.stroke();
  }

  renderBars(dataArray, bufferLength, width, height) {
    const barsCount = 48;
    const step = Math.floor(bufferLength / barsCount);
    const barWidth = (width / barsCount) * 0.65;
    const gap = (width / barsCount) * 0.35;

    for (let i = 0; i < barsCount; i++) {
      const value = dataArray[i * step] || 0;
      const percent = value / 255;
      const barHeight = Math.max(percent * (height * 0.7), 4);
      const x = i * (barWidth + gap) + gap / 2;
      const y = height - barHeight - 10;

      const grad = this.ctx.createLinearGradient(0, y, 0, height);
      grad.addColorStop(0, "#00f5d4");
      grad.addColorStop(0.5, "#ff3366");
      grad.addColorStop(1, "rgba(138, 43, 226, 0.4)");

      this.ctx.fillStyle = grad;
      this.ctx.shadowColor = "rgba(255, 51, 102, 0.5)";
      this.ctx.shadowBlur = 8;
      this.ctx.beginPath();
      this.ctx.roundRect(x, y, barWidth, barHeight, [4, 4, 0, 0]);
      this.ctx.fill();
    }
    this.ctx.shadowBlur = 0;
  }

  renderWaveform(dataArray, bufferLength, width, height) {
    this.ctx.lineWidth = 3 * window.devicePixelRatio;
    this.ctx.strokeStyle = "#00f5d4";
    this.ctx.shadowColor = "rgba(0, 245, 212, 0.8)";
    this.ctx.shadowBlur = 12;

    this.ctx.beginPath();
    const sliceWidth = width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0;
      const y = (v * height) / 2;

      if (i === 0) this.ctx.moveTo(x, y);
      else this.ctx.lineTo(x, y);

      x += sliceWidth;
    }

    this.ctx.stroke();
    this.ctx.shadowBlur = 0;
  }

  renderCircle(dataArray, bufferLength, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 105 * window.devicePixelRatio;
    const bars = 60;
    const step = Math.floor(bufferLength / bars);

    this.ctx.save();
    this.ctx.translate(centerX, centerY);

    for (let i = 0; i < bars; i++) {
      const rad = (Math.PI * 2 / bars) * i;
      const val = dataArray[i * step] || 0;
      const barLen = Math.max((val / 255) * 60 * window.devicePixelRatio, 4);

      const x1 = Math.cos(rad) * radius;
      const y1 = Math.sin(rad) * radius;
      const x2 = Math.cos(rad) * (radius + barLen);
      const y2 = Math.sin(rad) * (radius + barLen);

      this.ctx.strokeStyle = i % 2 === 0 ? "#ff3366" : "#8a2be2";
      this.ctx.lineWidth = 2.5 * window.devicePixelRatio;
      this.ctx.shadowColor = "rgba(255, 51, 102, 0.6)";
      this.ctx.shadowBlur = 6;

      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
    }

    this.ctx.restore();
    this.ctx.shadowBlur = 0;
  }
}

// ==========================================================================
// 4. MAIN PLAYER CONTROLLER
// ==========================================================================
class DarshPlayer {
  constructor() {
    this.tracks = TRACKS;
    this.filteredTracks = [...TRACKS];
    this.currentIndex = 0;
    this.isPlaying = false;
    this.isShuffle = false;
    this.repeatMode = "off"; // 'off' | 'all' | 'one'
    this.currentGenre = "all";
    this.currentView = "radio"; // 'radio' | 'video'
    this.likedTrackIds = new Set(JSON.parse(localStorage.getItem("darsh_liked_tracks") || "[]"));
    this.queue = [];
    this.sleepTimer = null;
    this.sleepRemainingSeconds = 0;

    // DOM Elements
    this.mediaVideo = document.getElementById("mediaVideo");
    this.bgVideo = document.getElementById("bgVideo");
    this.trackListEl = document.getElementById("trackList");
    this.emptyStateEl = document.getElementById("emptyState");
    this.trackCountBadge = document.getElementById("trackCountBadge");
    this.likedCountEl = document.getElementById("likedCount");

    // Stage Elements
    this.stageTrackTitle = document.getElementById("stageTrackTitle");
    this.stageTrackArtist = document.getElementById("stageTrackArtist");
    this.stageTrackGenre = document.getElementById("stageTrackGenre");
    this.lcdFreq = document.getElementById("lcdFreq");
    this.lcdMarquee = document.getElementById("lcdMarquee");
    this.currentFreqBadge = document.getElementById("currentFreqBadge");
    this.vinylDisc = document.getElementById("vinylDisc");
    this.discGlowAura = document.getElementById("discGlowAura");
    this.dynamicGlow = document.getElementById("dynamicGlow");

    // Dock Player Elements
    this.miniTrackTitle = document.getElementById("miniTrackTitle");
    this.miniTrackArtist = document.getElementById("miniTrackArtist");
    this.miniEqBars = document.getElementById("miniEqBars");
    this.playPauseBtn = document.getElementById("playPauseBtn");
    this.playIcon = document.getElementById("playIcon");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.shuffleBtn = document.getElementById("shuffleBtn");
    this.repeatBtn = document.getElementById("repeatBtn");
    this.stageLikeBtn = document.getElementById("stageLikeBtn");
    this.miniLikeBtn = document.getElementById("miniLikeBtn");

    // Progress & Volume
    this.progressBarContainer = document.getElementById("progressBarContainer");
    this.progressBarFill = document.getElementById("progressBarFill");
    this.progressScrubber = document.getElementById("progressScrubber");
    this.progressTooltip = document.getElementById("progressTooltip");
    this.currentTimeEl = document.getElementById("currentTime");
    this.totalDurationEl = document.getElementById("totalDuration");
    this.volumeSlider = document.getElementById("volumeSlider");
    this.volumeFill = document.getElementById("volumeFill");
    this.muteBtn = document.getElementById("muteBtn");
    this.volumeIcon = document.getElementById("volumeIcon");

    // Search & Filter
    this.searchInput = document.getElementById("searchInput");
    this.searchClearBtn = document.getElementById("searchClearBtn");

    // Views
    this.radioView = document.getElementById("radioView");
    this.videoView = document.getElementById("videoView");
    this.viewRadioBtn = document.getElementById("viewRadioBtn");
    this.viewVideoBtn = document.getElementById("viewVideoBtn");
    this.pipBtn = document.getElementById("pipBtn");

    // Audio Engine & Visualizer
    this.audioEngine = new WebAudioEngine(this.mediaVideo);
    this.visualizerCanvas = document.getElementById("visualizerCanvas");
    this.visualizer = new CanvasVisualizer(this.visualizerCanvas, this.audioEngine);

    this.init();
  }

  init() {
    this.renderTracklist();
    this.updateLikedCount();
    this.setupEventListeners();
    this.startDigitalClock();
    this.visualizer.start();

    // Set initial track
    this.loadTrack(0, false);
    this.setVolume(0.85);

    // Initial EQ preset
    this.audioEngine.applyPreset("bass");
  }

  setupEventListeners() {
    // Media events
    this.mediaVideo.addEventListener("timeupdate", () => this.updateProgress());
    this.mediaVideo.addEventListener("loadedmetadata", () => this.updateDuration());
    this.mediaVideo.addEventListener("ended", () => this.onTrackEnded());
    this.mediaVideo.addEventListener("play", () => this.onPlayStateChange(true));
    this.mediaVideo.addEventListener("pause", () => this.onPlayStateChange(false));

    // Play / Pause / Nav
    this.playPauseBtn.addEventListener("click", () => this.togglePlay());
    this.prevBtn.addEventListener("click", () => this.prevTrack());
    this.nextBtn.addEventListener("click", () => this.nextTrack());
    this.shuffleBtn.addEventListener("click", () => this.toggleShuffle());
    this.repeatBtn.addEventListener("click", () => this.toggleRepeat());

    // Likes
    this.stageLikeBtn.addEventListener("click", () => this.toggleLikeCurrent());
    this.miniLikeBtn.addEventListener("click", () => this.toggleLikeCurrent());

    // Progress bar scrubber
    this.progressBarContainer.addEventListener("click", (e) => this.seek(e));
    this.progressBarContainer.addEventListener("mousemove", (e) => this.showProgressTooltip(e));
    this.progressBarContainer.addEventListener("mouseleave", () => {
      this.progressTooltip.style.display = "none";
    });

    // Volume
    this.volumeSlider.addEventListener("input", (e) => this.setVolume(e.target.value));
    this.muteBtn.addEventListener("click", () => this.toggleMute());

    // Search
    this.searchInput.addEventListener("input", (e) => this.handleSearch(e.target.value));
    this.searchClearBtn.addEventListener("click", () => {
      this.searchInput.value = "";
      this.searchClearBtn.style.display = "none";
      this.handleSearch("");
    });

    // Filter Chips
    document.querySelectorAll(".filter-chip").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".filter-chip").forEach((b) => b.classList.remove("active"));
        const target = e.currentTarget;
        target.classList.add("active");
        this.filterByGenre(target.dataset.filter);
      });
    });

    // Station Tuner Pills
    document.querySelectorAll(".tuner-pill").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".tuner-pill").forEach((b) => b.classList.remove("active"));
        const target = e.currentTarget;
        target.classList.add("active");
        const genre = target.dataset.genre;
        const freq = target.dataset.freq;
        this.tuneToStation(genre, freq);
      });
    });

    // Shuffle All Button
    document.getElementById("shuffleAllBtn").addEventListener("click", () => {
      this.isShuffle = true;
      this.shuffleBtn.classList.add("active");
      this.playRandomTrack();
    });

    // Reset search
    document.getElementById("resetSearchBtn").addEventListener("click", () => {
      this.searchInput.value = "";
      this.searchClearBtn.style.display = "none";
      this.filterByGenre("all");
    });

    // View switcher (Radio Visualizer vs Video)
    this.viewRadioBtn.addEventListener("click", () => this.switchView("radio"));
    this.viewVideoBtn.addEventListener("click", () => this.switchView("video"));

    // Picture-in-Picture
    this.pipBtn.addEventListener("click", async () => {
      try {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
        } else if (this.mediaVideo !== document.pictureInPictureElement) {
          await this.mediaVideo.requestPictureInPicture();
        }
      } catch (err) {
        console.error("PIP error:", err);
      }
    });

    // Visualizer mode switcher
    document.querySelectorAll(".viz-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".viz-btn").forEach((b) => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.visualizer.mode = e.currentTarget.dataset.viz;
      });
    });

    // Equalizer UI Drawer
    const eqDrawer = document.getElementById("eqDrawer");
    const toggleEqDrawerBtn = document.getElementById("toggleEqDrawerBtn");
    const closeEqDrawerBtn = document.getElementById("closeEqDrawerBtn");

    toggleEqDrawerBtn.addEventListener("click", () => {
      eqDrawer.style.display = eqDrawer.style.display === "none" ? "flex" : "none";
    });
    closeEqDrawerBtn.addEventListener("click", () => {
      eqDrawer.style.display = "none";
    });

    // EQ Preset Buttons
    document.querySelectorAll(".eq-preset-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".eq-preset-btn").forEach((b) => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        const preset = e.currentTarget.dataset.preset;
        this.audioEngine.applyPreset(preset);
        document.getElementById("currentEqName").textContent = e.currentTarget.textContent;
      });
    });

    // EQ Individual Sliders
    ["60", "250", "1k", "4k", "12k"].forEach((band) => {
      const slider = document.getElementById("eq" + band);
      const gainDisplay = document.getElementById("gain" + band);
      if (slider) {
        slider.addEventListener("input", (e) => {
          const val = e.target.value;
          gainDisplay.textContent = (val > 0 ? "+" : "") + val + "dB";
          this.audioEngine.setGain("eq" + band, val);
        });
      }
    });

    // Sleep Timer
    const sleepTimerBtn = document.getElementById("sleepTimerBtn");
    const sleepMenu = document.getElementById("sleepMenu");
    sleepTimerBtn.addEventListener("click", () => {
      sleepMenu.style.display = sleepMenu.style.display === "none" ? "flex" : "none";
    });
    sleepMenu.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        sleepMenu.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.setSleepTimer(e.currentTarget.dataset.mins);
        sleepMenu.style.display = "none";
      });
    });

    // Playback Speed
    const speedBtn = document.getElementById("speedBtn");
    const speedMenu = document.getElementById("speedMenu");
    speedBtn.addEventListener("click", () => {
      speedMenu.style.display = speedMenu.style.display === "none" ? "flex" : "none";
    });
    speedMenu.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        speedMenu.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        const speed = parseFloat(e.currentTarget.dataset.speed);
        this.mediaVideo.playbackRate = speed;
        document.getElementById("speedDisplay").textContent = speed + "x";
        speedMenu.style.display = "none";
      });
    });

    // Queue Drawer
    const queueDrawerBtn = document.getElementById("queueDrawerBtn");
    const queueDrawer = document.getElementById("queueDrawer");
    const closeQueueDrawerBtn = document.getElementById("closeQueueDrawerBtn");
    queueDrawerBtn.addEventListener("click", () => {
      queueDrawer.style.display = queueDrawer.style.display === "none" ? "flex" : "none";
      this.renderQueueList();
    });
    closeQueueDrawerBtn.addEventListener("click", () => {
      queueDrawer.style.display = "none";
    });

    // Keyboard Shortcuts Modal
    const shortcutsBtn = document.getElementById("shortcutsBtn");
    const shortcutsModal = document.getElementById("shortcutsModal");
    const closeShortcutsModalBtn = document.getElementById("closeShortcutsModalBtn");
    shortcutsBtn.addEventListener("click", () => {
      shortcutsModal.style.display = "flex";
    });
    closeShortcutsModalBtn.addEventListener("click", () => {
      shortcutsModal.style.display = "none";
    });
    shortcutsModal.addEventListener("click", (e) => {
      if (e.target === shortcutsModal) shortcutsModal.style.display = "none";
    });

    // Backdrop Dim Toggle
    document.getElementById("toggleBgBlurBtn").addEventListener("click", () => {
      document.getElementById("ambientBackdrop").classList.toggle("dimmed");
    });

    // Fullscreen Toggle
    document.getElementById("appFullscreenBtn").addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    // Global Hotkeys
    window.addEventListener("keydown", (e) => {
      if (["input", "textarea"].includes(document.activeElement.tagName.toLowerCase())) {
        if (e.key === "Escape") {
          document.activeElement.blur();
        }
        return;
      }

      switch (e.code) {
        case "Space":
          e.preventDefault();
          this.togglePlay();
          break;
        case "ArrowRight":
          e.preventDefault();
          if (e.shiftKey) this.nextTrack();
          else this.mediaVideo.currentTime = Math.min(this.mediaVideo.currentTime + 5, this.mediaVideo.duration);
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (e.shiftKey) this.prevTrack();
          else this.mediaVideo.currentTime = Math.max(this.mediaVideo.currentTime - 5, 0);
          break;
        case "ArrowUp":
          e.preventDefault();
          this.setVolume(Math.min(this.mediaVideo.volume + 0.05, 1));
          break;
        case "ArrowDown":
          e.preventDefault();
          this.setVolume(Math.max(this.mediaVideo.volume - 0.05, 0));
          break;
        case "KeyM":
          this.toggleMute();
          break;
        case "KeyL":
          this.toggleLikeCurrent();
          break;
        case "KeyS":
          this.toggleShuffle();
          break;
        case "KeyF":
          document.getElementById("appFullscreenBtn").click();
          break;
        case "Slash":
          e.preventDefault();
          this.searchInput.focus();
          break;
      }
    });

    // Close menus on outside click
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".sleep-timer-wrap")) sleepMenu.style.display = "none";
      if (!e.target.closest(".speed-control-wrap")) speedMenu.style.display = "none";
    });
  }

  // ==========================================================================
  // PLAYBACK CORE
  // ==========================================================================
  loadTrack(index, autoPlay = true) {
    if (index < 0 || index >= this.tracks.length) return;

    this.currentIndex = index;
    const track = this.tracks[this.currentIndex];

    // Audio Engine Init on first user action
    this.audioEngine.init();

    // Source set
    this.mediaVideo.src = track.src;
    this.mediaVideo.load();

    // Update UI Meta
    this.stageTrackTitle.textContent = track.title;
    this.stageTrackArtist.textContent = track.artist + (track.movie ? ` • ${track.movie}` : "");
    this.stageTrackGenre.textContent = track.genreLabel.toUpperCase();
    this.lcdFreq.textContent = `${track.frequency} MHz`;
    this.currentFreqBadge.textContent = track.frequency;
    this.lcdMarquee.textContent = `NOW BROADCASTING: "${track.title.toUpperCase()}" BY ${track.artist.toUpperCase()} [${track.genreLabel.toUpperCase()}]`;

    this.miniTrackTitle.textContent = track.title;
    this.miniTrackArtist.textContent = track.artist;

    // Accent Glow
    this.updateAccentColors(track.accentColor);

    // Update Like button states
    this.updateLikeButtonUI();

    // Update active row in tracklist
    this.highlightActiveTrack();

    if (autoPlay) {
      this.playTrack();
    }
  }

  async playTrack() {
    this.audioEngine.resume();
    try {
      await this.mediaVideo.play();
      this.isPlaying = true;
    } catch (err) {
      console.warn("Autoplay blocked, waiting for user click", err);
      this.isPlaying = false;
    }
    this.onPlayStateChange(this.isPlaying);
  }

  pauseTrack() {
    this.mediaVideo.pause();
    this.isPlaying = false;
    this.onPlayStateChange(false);
  }

  togglePlay() {
    if (this.mediaVideo.paused) {
      this.playTrack();
    } else {
      this.pauseTrack();
    }
  }

  prevTrack() {
    if (this.mediaVideo.currentTime > 3) {
      this.mediaVideo.currentTime = 0;
      return;
    }
    let prevIndex = this.currentIndex - 1;
    if (prevIndex < 0) prevIndex = this.tracks.length - 1;
    this.loadTrack(prevIndex, true);
  }

  nextTrack() {
    if (this.queue.length > 0) {
      const nextTrack = this.queue.shift();
      const idx = this.tracks.findIndex((t) => t.id === nextTrack.id);
      if (idx !== -1) {
        this.loadTrack(idx, true);
        return;
      }
    }

    if (this.isShuffle) {
      this.playRandomTrack();
      return;
    }

    let nextIndex = this.currentIndex + 1;
    if (nextIndex >= this.tracks.length) {
      if (this.repeatMode === "off") {
        this.pauseTrack();
        return;
      }
      nextIndex = 0;
    }
    this.loadTrack(nextIndex, true);
  }

  playRandomTrack() {
    const randomIndex = Math.floor(Math.random() * this.tracks.length);
    this.loadTrack(randomIndex, true);
  }

  onTrackEnded() {
    if (this.sleepTimer === "track") {
      this.pauseTrack();
      this.setSleepTimer("0");
      return;
    }

    if (this.repeatMode === "one") {
      this.mediaVideo.currentTime = 0;
      this.playTrack();
    } else {
      this.nextTrack();
    }
  }

  onPlayStateChange(isPlaying) {
    if (isPlaying) {
      this.playIcon.classList.remove("fa-play");
      this.playIcon.classList.add("fa-pause");
      this.vinylDisc.classList.add("spinning");
      this.miniEqBars.classList.add("active");
    } else {
      this.playIcon.classList.remove("fa-pause");
      this.playIcon.classList.add("fa-play");
      this.vinylDisc.classList.remove("spinning");
      this.miniEqBars.classList.remove("active");
    }
    this.highlightActiveTrack();
  }

  // ==========================================================================
  // PROGRESS & VOLUME
  // ==========================================================================
  updateProgress() {
    const cur = this.mediaVideo.currentTime || 0;
    const dur = this.mediaVideo.duration || 1;
    const percent = (cur / dur) * 100;

    this.progressBarFill.style.width = `${percent}%`;
    this.progressScrubber.style.left = `${percent}%`;
    this.currentTimeEl.textContent = this.formatTime(cur);
  }

  updateDuration() {
    const dur = this.mediaVideo.duration || 0;
    this.totalDurationEl.textContent = this.formatTime(dur);
  }

  seek(e) {
    const rect = this.progressBarContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    this.mediaVideo.currentTime = ratio * this.mediaVideo.duration;
  }

  showProgressTooltip(e) {
    const rect = this.progressBarContainer.getBoundingClientRect();
    const hoverX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, hoverX / rect.width));
    const hoverTime = ratio * (this.mediaVideo.duration || 0);

    this.progressTooltip.style.display = "block";
    this.progressTooltip.style.left = `${hoverX}px`;
    this.progressTooltip.textContent = this.formatTime(hoverTime);
  }

  setVolume(val) {
    const volume = Math.max(0, Math.min(1, parseFloat(val)));
    this.mediaVideo.volume = volume;
    this.volumeSlider.value = volume;
    this.volumeFill.style.width = `${volume * 100}%`;

    if (volume === 0) {
      this.volumeIcon.className = "fa-solid fa-volume-xmark";
    } else if (volume < 0.5) {
      this.volumeIcon.className = "fa-solid fa-volume-low";
    } else {
      this.volumeIcon.className = "fa-solid fa-volume-high";
    }
  }

  toggleMute() {
    if (this.mediaVideo.volume > 0) {
      this.prevVolume = this.mediaVideo.volume;
      this.setVolume(0);
    } else {
      this.setVolume(this.prevVolume || 0.85);
    }
  }

  // ==========================================================================
  // VIEW & ACCENTS
  // ==========================================================================
  switchView(viewName) {
    this.currentView = viewName;
    if (viewName === "radio") {
      this.radioView.classList.add("active");
      this.videoView.classList.remove("active");
      this.viewRadioBtn.classList.add("active");
      this.viewVideoBtn.classList.remove("active");
    } else {
      this.radioView.classList.remove("active");
      this.videoView.classList.add("active");
      this.viewRadioBtn.classList.remove("active");
      this.viewVideoBtn.classList.add("active");
    }
  }

  updateAccentColors(color) {
    if (!color) return;
    this.discGlowAura.style.background = `radial-gradient(circle, ${color} 0%, rgba(138, 43, 226, 0.2) 60%, transparent 80%)`;
    this.dynamicGlow.style.background = `radial-gradient(circle at 65% 45%, ${color}22, rgba(138, 43, 226, 0.08) 50%, transparent 80%)`;
  }

  // ==========================================================================
  // PLAYLIST RENDERING & FILTERING
  // ==========================================================================
  renderTracklist() {
    this.trackListEl.innerHTML = "";

    if (this.filteredTracks.length === 0) {
      this.emptyStateEl.style.display = "flex";
      this.trackCountBadge.textContent = "0 Tracks";
      return;
    }

    this.emptyStateEl.style.display = "none";
    this.trackCountBadge.textContent = `${this.filteredTracks.length} Tracks`;

    this.filteredTracks.forEach((track, idx) => {
      const isCurrent = this.tracks[this.currentIndex].id === track.id;
      const isLiked = this.likedTrackIds.has(track.id);

      const item = document.createElement("div");
      item.className = `track-item ${isCurrent ? "playing" : ""}`;
      item.dataset.id = track.id;

      item.innerHTML = `
        <span class="track-index">${idx + 1}</span>
        <div class="track-play-status">
          <div class="playing-bars">
            <span></span><span></span><span></span>
          </div>
        </div>

        <div class="track-art-thumb">
          <i class="fa-solid fa-music"></i>
        </div>

        <div class="track-info-col">
          <div class="track-name-row">
            <span class="track-name">${track.title}</span>
            <span class="track-genre-tag">${track.genre}</span>
          </div>
          <div class="track-artist-row">
            <span class="track-artist">${track.artist}</span>
          </div>
        </div>

        <span class="track-duration">${track.duration}</span>

        <div class="track-item-actions">
          <button class="track-act-btn btn-like ${isLiked ? "liked" : ""}" title="Favorite">
            <i class="${isLiked ? "fa-solid" : "fa-regular"} fa-heart"></i>
          </button>
          <button class="track-act-btn btn-add-queue" title="Add to Queue">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      `;

      // Item Click to Play
      item.addEventListener("click", (e) => {
        if (e.target.closest(".track-act-btn")) return;
        const targetTrackIdx = this.tracks.findIndex((t) => t.id === track.id);
        if (targetTrackIdx !== -1) {
          this.loadTrack(targetTrackIdx, true);
        }
      });

      // Like Button in row
      const likeBtn = item.querySelector(".btn-like");
      likeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleLike(track.id);
      });

      // Add to Queue button
      const queueBtn = item.querySelector(".btn-add-queue");
      queueBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.addToQueue(track);
      });

      this.trackListEl.appendChild(item);
    });
  }

  highlightActiveTrack() {
    const currentId = this.tracks[this.currentIndex].id;
    document.querySelectorAll(".track-item").forEach((el) => {
      const match = parseInt(el.dataset.id) === currentId;
      el.classList.toggle("playing", match);
    });
  }

  handleSearch(query) {
    const q = query.trim().toLowerCase();
    this.searchClearBtn.style.display = q ? "block" : "none";

    let pool = this.tracks;
    if (this.currentGenre === "liked") {
      pool = pool.filter((t) => this.likedTrackIds.has(t.id));
    } else if (this.currentGenre !== "all") {
      pool = pool.filter((t) => t.genre === this.currentGenre);
    }

    if (q) {
      this.filteredTracks = pool.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.artist.toLowerCase().includes(q) ||
          (t.movie && t.movie.toLowerCase().includes(q)) ||
          t.genreLabel.toLowerCase().includes(q)
      );
    } else {
      this.filteredTracks = [...pool];
    }

    this.renderTracklist();
  }

  filterByGenre(genre) {
    this.currentGenre = genre;
    this.searchInput.value = "";
    this.searchClearBtn.style.display = "none";

    if (genre === "all") {
      this.filteredTracks = [...this.tracks];
    } else if (genre === "liked") {
      this.filteredTracks = this.tracks.filter((t) => this.likedTrackIds.has(t.id));
    } else {
      this.filteredTracks = this.tracks.filter((t) => t.genre === genre);
    }

    this.renderTracklist();
  }

  tuneToStation(genre, freq) {
    this.filterByGenre(genre);

    // Sync Filter Chips
    document.querySelectorAll(".filter-chip").forEach((b) => {
      b.classList.toggle("active", b.dataset.filter === genre);
    });

    // Update Frequency LCD
    this.lcdFreq.textContent = `${freq} MHz FM`;
    this.currentFreqBadge.textContent = `${freq} FM`;

    // If current song is not in the filtered station, start the first one in station!
    if (this.filteredTracks.length > 0) {
      const isAlreadyInStation = this.filteredTracks.some((t) => t.id === this.tracks[this.currentIndex].id);
      if (!isAlreadyInStation) {
        const firstInStationIdx = this.tracks.findIndex((t) => t.id === this.filteredTracks[0].id);
        if (firstInStationIdx !== -1) {
          this.loadTrack(firstInStationIdx, true);
        }
      }
    }
  }

  // ==========================================================================
  // LIKES & QUEUE
  // ==========================================================================
  toggleLike(trackId) {
    if (this.likedTrackIds.has(trackId)) {
      this.likedTrackIds.delete(trackId);
    } else {
      this.likedTrackIds.add(trackId);
    }

    localStorage.setItem("darsh_liked_tracks", JSON.stringify([...this.likedTrackIds]));
    this.updateLikedCount();
    this.updateLikeButtonUI();
    this.renderTracklist();
  }

  toggleLikeCurrent() {
    const currentTrack = this.tracks[this.currentIndex];
    this.toggleLike(currentTrack.id);
  }

  updateLikedCount() {
    this.likedCountEl.textContent = this.likedTrackIds.size;
  }

  updateLikeButtonUI() {
    const currentTrack = this.tracks[this.currentIndex];
    const isLiked = this.likedTrackIds.has(currentTrack.id);

    if (isLiked) {
      this.stageLikeBtn.classList.add("liked");
      this.stageLikeBtn.querySelector("i").className = "fa-solid fa-heart";
      this.miniLikeBtn.classList.add("liked");
      this.miniLikeBtn.querySelector("i").className = "fa-solid fa-heart";
    } else {
      this.stageLikeBtn.classList.remove("liked");
      this.stageLikeBtn.querySelector("i").className = "fa-regular fa-heart";
      this.miniLikeBtn.classList.remove("liked");
      this.miniLikeBtn.querySelector("i").className = "fa-regular fa-heart";
    }
  }

  addToQueue(track) {
    this.queue.push(track);
    this.renderQueueList();
    this.showToast(`Added "${track.title}" to Up Next queue!`);
  }

  renderQueueList() {
    const list = document.getElementById("queueList");
    if (!list) return;
    list.innerHTML = "";

    if (this.queue.length === 0) {
      list.innerHTML = `<p style="font-size: 11px; color: var(--text-muted); text-align: center; padding: 12px;">Queue is empty</p>`;
      return;
    }

    this.queue.forEach((track, i) => {
      const row = document.createElement("div");
      row.className = "queue-item";
      row.innerHTML = `
        <span style="font-family: var(--font-mono); font-size: 10px; color: var(--text-muted);">${i + 1}</span>
        <div style="flex: 1; min-width: 0;">
          <div class="queue-item-title">${track.title}</div>
          <div class="queue-item-artist">${track.artist}</div>
        </div>
        <button class="track-act-btn remove-queue" style="font-size: 10px;" title="Remove">
          <i class="fa-solid fa-xmark"></i>
        </button>
      `;
      row.querySelector(".remove-queue").addEventListener("click", () => {
        this.queue.splice(i, 1);
        this.renderQueueList();
      });
      list.appendChild(row);
    });
  }

  // ==========================================================================
  // SHUFFLE, REPEAT, SLEEP TIMER & UTILITIES
  // ==========================================================================
  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
    this.shuffleBtn.classList.toggle("active", this.isShuffle);
    this.showToast(this.isShuffle ? "Shuffle Mode ON" : "Shuffle Mode OFF");
  }

  toggleRepeat() {
    if (this.repeatMode === "off") {
      this.repeatMode = "all";
      this.repeatBtn.classList.add("active");
      this.repeatBtn.querySelector("i").className = "fa-solid fa-repeat";
      this.showToast("Repeat Playlist ON");
    } else if (this.repeatMode === "all") {
      this.repeatMode = "one";
      this.repeatBtn.classList.add("active");
      this.repeatBtn.querySelector("i").className = "fa-solid fa-1";
      this.showToast("Repeat Track ON");
    } else {
      this.repeatMode = "off";
      this.repeatBtn.classList.remove("active");
      this.repeatBtn.querySelector("i").className = "fa-solid fa-repeat";
      this.showToast("Repeat OFF");
    }
  }

  setSleepTimer(mins) {
    if (this.sleepTimerInterval) clearInterval(this.sleepTimerInterval);
    const display = document.getElementById("sleepTimerDisplay");

    if (mins === "0") {
      this.sleepTimer = null;
      display.textContent = "Off";
      this.showToast("Sleep timer cancelled");
      return;
    }

    if (mins === "track") {
      this.sleepTimer = "track";
      display.textContent = "End of Track";
      this.showToast("Sleep timer set: End of Track");
      return;
    }

    const totalSeconds = parseInt(mins) * 60;
    this.sleepRemainingSeconds = totalSeconds;
    this.sleepTimer = mins;

    this.sleepTimerInterval = setInterval(() => {
      this.sleepRemainingSeconds--;
      if (this.sleepRemainingSeconds <= 0) {
        clearInterval(this.sleepTimerInterval);
        this.pauseTrack();
        this.setSleepTimer("0");
      } else {
        const m = Math.floor(this.sleepRemainingSeconds / 60);
        const s = this.sleepRemainingSeconds % 60;
        display.textContent = `${m}:${s < 10 ? "0" : ""}${s}`;
      }
    }, 1000);

    this.showToast(`Sleep timer set for ${mins} minutes`);
  }

  startDigitalClock() {
    const clockEl = document.getElementById("digitalClock");
    const update = () => {
      const now = new Date();
      clockEl.textContent = now.toTimeString().split(" ")[0];
    };
    update();
    setInterval(update, 1000);
  }

  formatTime(seconds) {
    const m = Math.floor(seconds / 60) || 0;
    const s = Math.floor(seconds % 60) || 0;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  showToast(msg) {
    let toast = document.getElementById("darshToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "darshToast";
      toast.style.cssText = `
        position: fixed;
        bottom: 96px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: rgba(18, 17, 34, 0.95);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 51, 102, 0.4);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        padding: 8px 18px;
        border-radius: 999px;
        z-index: 1000;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        pointer-events: none;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";

    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(20px)";
    }, 2400);
  }
}

// ==========================================================================
// 5. APPLICATION BOOTSTRAP
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  window.darshRadio = new DarshPlayer();
});
