/**
 * DARSH RADIO — High Performance Offline Service Worker (v6)
 * Features:
 * - Full offline app caching (App shell, styles, scripts, fonts, images)
 * - HTTP Range request handler for offline MP4/Audio playback in Safari, Chrome & Firefox
 * - Pre-caches & dynamically caches all 39 music tracks for 100% offline playback
 */

const STATIC_CACHE = 'darsh-static-v6';
const MEDIA_CACHE = 'darsh-media-v6';

const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './styles.css',
  './app.js',
  './manifest.json',
  './make_a_loop_video_of_this_imag.mp4',
  './asstes/dont_move_focus_from_the_boy_i.mp4',
  './asstes/105059-the-spider-man-into-spider-verse-png-download-free.png',
  './asstes/css/style.css'
];

const MUSIC_TRACKS = [
  './asstes/music/ROCKSTAR Kun Faya Kun (Full Video Song)  Ranbir Kapoor  A.R. Rahman, Javed Ali, Mohit Chauhan_1080p.mp4',
  './asstes/music/Teri Deewani - Kailash Kher  Official Video  Kailasa  Paresh  Naresh_480p.mp4',
  './asstes/music/Bulleya  Full Song  Sultan  Salman Khan, Anushka Sharma  Papon  Vishal & Shekhar  Irshad Kamil_1080p.mp4',
  './asstes/music/O Rangrez Full Video - Bhaag Milkha BhaagFarhan, SonamShreya Ghoshal, Javed Bashir_1080p.mp4',
  './asstes/music/Jugni Bulle Shah Tochi Raina - with Lyrics_1080p.mp4',
  './asstes/music/Aaj Se Teri  Padman  Akshay Kumar & Radhika Apte  Arijit Singh  Amit Trivedi_1080p.mp4',
  './asstes/music/DARKHAAST Full Video Song   SHIVAAY  Arijit Singh & Sunidhi Chauhan  Ajay Devgn  T-Series_1080p.mp4',
  './asstes/music/LYRICAL Kaise Hua  Kabir Singh  Shahid K, Kiara A, Sandeep V  Vishal Mishra, Manoj Muntashir_1080p.mp4',
  './asstes/music/Raabta (Kehte Hain Khuda) Full Song With Lyrics  Agent Vinod  Saif Ali Khan, Kareena Kapoor,Pritam_1080p.mp4',
  './asstes/music/Tu Chahiye FULL VIDEO Song - Atif Aslam Pritam  Bajrangi Bhaijaan  Salman Khan, Kareena Kapoor_1080p.mp4',
  './asstes/music/O Saathi Video Song  Baaghi 2  Tiger Shroff  Disha Patani  Arko  Ahmed Khan  Sajid Nadiadwala_1080p.mp4',
  './asstes/music/Yeh Fitoor Mera - Full Video  Fitoor  Aditya Roy Kapur, Katrina Kaif  Arijit Singh  Amit Trivedi_1080p.mp4',
  './asstes/music/Deewaana Deewaana (Full Video) Tere Ishk Mein  Dhanush, Kriti  AR Rahman  Aanand LR  Bhushan K_1080p.mp4',
  './asstes/music/Tenu Sang Rakhna - Full Song Audio  Jigra  Alia Bhatt  Vedang Raina  Arijit Singh,Achint,Anumita_1080p.mp4',
  './asstes/music/Finding Her (Jana Mere Sawalon Ka Manzar Tu)  Kushagra  Vanshika  Bharath  Karan Maini UR Debut_1080p.mp4',
  './asstes/music/Finding Her (Female Version)  Tanishka Bahl  Kushagra  Bharath  Saaheal  UR Debut  New Songs_1080p.mp4',
  './asstes/music/Ishqa Ve - Zeeshan Ali  Yuvraj Tung  Seerat Mast  Sandeep Aulakh  Latest Punjabi Songs 2025_1080p.mp4',
  './asstes/music/Chaar Diwaari - Jhaag (Official Video)  Def Jam India_1080p.mp4',
  './asstes/music/Chaar Diwaari - MERA SAMAN KAHAN HAI (Official Video)  TERI MAIYAT KE GAANE EP_1080p.mp4',
  './asstes/music/Chaar Diwaari - Thehra (Official Video)  Pyaar Diwaari Arc 1  Def Jam India_1080p.mp4',
  './asstes/music/Chaar Diwaari X @raftaarmusic  - FAREBI (Official Video)  Pyaar Diwaari Arc 3_1080p.mp4',
  './asstes/music/Chaar Diwaari ft. Indian Ocean, Gini - Aashiqana  Parvana EP  Def Jam India_1080p.mp4',
  './asstes/music/Chaar Diwaari ft. Sonu Nigam - Iss Tarah  Parvana EP  Def Jam India_1080p.mp4',
  './asstes/music/Chaar Diwaari x Sanjith Hegde - Banda Kaam Ka (Official Video)  Parvana EP  Def Jam India_1080p.mp4',
  './asstes/music/Bayaan  Sherazam - Safar_1080p.mp4',
  './asstes/music/Bairan – Animated Love Story  Banjaare (Official Video)_1080p.mp4',
  './asstes/music/HASEEN - TALWIINDER, NDS, RIPPY (Official Visualizer)_1080p.mp4',
  './asstes/music/Maanu - Jhol (Acoustic)  Annural Khalid  Abdullah Siddiqui  Asfand_1080p.mp4',
  './asstes/music/Navjot Ahuja - Khat (Lyrical Video)_1080p.mp4',
  './asstes/music/Navjot Ahuja - Khat (Official Audio)_1080p.mp4',
  './asstes/music/Dooron Dooron (Official Video) - Unplugged  Paresh Pahuja  Shiv Tandan  T-Series_1080p.mp4',
  './asstes/music/Dil To Bachcha Hai Ji HD 5.1 Sound ll Ishqiya 2010 ll Rahat Fateh Ali Khan ll 4k & 1080p HD ll_1080p.mp4',
  './asstes/music/Zindagi Kuch Toh Bata (Reprise) Full Song with LYRICS Pritam  Salman Khan  Bajrangi Bhaijaan_1080p.mp4',
  './asstes/music/TERI TERI YAAD  GYANII SANGEET  FULL VIDEO_1080p.mp4',
  './asstes/music/Kanaa - Othaiyadi Pathayila Video  Arunraja Kamaraj  Dhibu Ninan Thomas_1080p.mp4',
  './asstes/music/Koodappirannor - Video  Vaazha 2  Parvatish PradeepSooraj SanthoshAnkit MenonVipin DasSavin SA_1080p.mp4',
  './asstes/music/12 Years - Lucky Rathore ft. @PnkjOfficial   Prod. Maxx Turnn  2025_1080p.mp4',
  './asstes/music/UDI UDI   @Aneesh.Poojari &_ @sarkarmusic.25  The Collective Tape  Official Music Video_1080p.mp4',
  './asstes/music/_1080p.mp4'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      // 1. Cache App Shell Files
      const staticCache = await caches.open(STATIC_CACHE);
      for (const asset of STATIC_ASSETS) {
        try {
          const res = await fetch(asset);
          if (res && (res.ok || res.type === 'opaque')) {
            await staticCache.put(asset, res);
          }
        } catch (err) {
          console.warn('[SW] Pre-cache static skipped:', asset, err);
        }
      }

      // 2. Pre-cache Music Tracks in background
      const mediaCache = await caches.open(MEDIA_CACHE);
      for (const track of MUSIC_TRACKS) {
        try {
          const existing = await mediaCache.match(track);
          if (!existing) {
            const res = await fetch(track);
            if (res && (res.ok || res.type === 'opaque')) {
              await mediaCache.put(track, res);
            }
          }
        } catch (err) {
          console.warn('[SW] Pre-cache media skipped:', track, err);
        }
      }
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== STATIC_CACHE && key !== MEDIA_CACHE)
            .map((key) => caches.delete(key))
        );
      })
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // If request has Range header or is a media file (.mp4, .webm, audio/video), handle Range slicing
  const isMedia =
    event.request.headers.get('range') ||
    url.pathname.endsWith('.mp4') ||
    url.pathname.endsWith('.webm') ||
    url.pathname.endsWith('.mp3') ||
    url.pathname.includes('/asstes/music/');

  if (isMedia) {
    event.respondWith(handleRangeRequest(event.request));
    return;
  }

  // App Shell & Static Assets Strategy: Cache-First with Background Update
  event.respondWith(
    (async () => {
      const cached = await caches.match(event.request);
      if (cached) {
        // Fetch background update when online
        fetch(event.request)
          .then(async (fresh) => {
            if (fresh && (fresh.status === 200 || fresh.type === 'opaque')) {
              const cache = await caches.open(STATIC_CACHE);
              await cache.put(event.request, fresh);
            }
          })
          .catch(() => {});
        return cached;
      }

      try {
        const networkResponse = await fetch(event.request);
        if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
          const cache = await caches.open(STATIC_CACHE);
          cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      } catch (err) {
        if (event.request.mode === 'navigate') {
          const fallback = await caches.match('./index.html');
          if (fallback) return fallback;
          const rootFallback = await caches.match('./');
          if (rootFallback) return rootFallback;
        }
        return new Response('Network error occurred', {
          status: 408,
          headers: { 'Content-Type': 'text/plain' }
        });
      }
    })()
  );
});

/**
 * Handle Range requests for audio and video media files
 * Slices stored ArrayBuffer to return HTTP 206 Partial Content
 */
async function handleRangeRequest(request) {
  const mediaCache = await caches.open(MEDIA_CACHE);
  const staticCache = await caches.open(STATIC_CACHE);
  const url = request.url;

  let cachedResponse = (await mediaCache.match(url)) || (await staticCache.match(url));

  // If not cached yet, try fetching clean full file from network and cache it
  if (!cachedResponse) {
    try {
      // Fetch the full file without Range headers so we get status 200 OK
      const cleanResponse = await fetch(url);
      if (cleanResponse && (cleanResponse.status === 200 || cleanResponse.type === 'opaque')) {
        await mediaCache.put(url, cleanResponse.clone());
        cachedResponse = cleanResponse;
      } else {
        // Direct stream passthrough if available
        return await fetch(request);
      }
    } catch (err) {
      if (!cachedResponse) {
        return new Response('Media offline', {
          status: 503,
          statusText: 'Offline',
          headers: { 'Content-Type': 'text/plain' }
        });
      }
    }
  }

  const rangeHeader = request.headers.get('range');
  const arrayBuffer = await cachedResponse.arrayBuffer();

  if (!rangeHeader) {
    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': cachedResponse.headers.get('Content-Type') || 'video/mp4',
        'Content-Length': arrayBuffer.byteLength.toString(),
        'Accept-Ranges': 'bytes'
      }
    });
  }

  const bytesMatch = rangeHeader.match(/bytes=(\d+)-(\d*)/);
  if (!bytesMatch) {
    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': cachedResponse.headers.get('Content-Type') || 'video/mp4',
        'Content-Length': arrayBuffer.byteLength.toString(),
        'Accept-Ranges': 'bytes'
      }
    });
  }

  const start = parseInt(bytesMatch[1], 10) || 0;
  const end = bytesMatch[2] ? parseInt(bytesMatch[2], 10) : arrayBuffer.byteLength - 1;
  const clampedEnd = Math.min(end, arrayBuffer.byteLength - 1);
  const slicedBuffer = arrayBuffer.slice(start, clampedEnd + 1);

  return new Response(slicedBuffer, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Type': cachedResponse.headers.get('Content-Type') || 'video/mp4',
      'Content-Range': `bytes ${start}-${clampedEnd}/${arrayBuffer.byteLength}`,
      'Content-Length': slicedBuffer.byteLength.toString(),
      'Accept-Ranges': 'bytes'
    }
  });
}
