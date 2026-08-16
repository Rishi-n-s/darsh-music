/**
 * DARSH RADIO — Offline Service Worker
 * Features:
 * - Full offline app caching (App shell, styles, scripts, fonts, images)
 * - HTTP Range request handler for offline MP4 video playback in Safari & Chrome
 * - Dynamic caching for all played music tracks
 */

const CACHE_NAME = 'darsh-radio-v2';
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './styles.css',
  './app.js',
  './manifest.json',
  './make_a_loop_video_of_this_imag.mp4',
  './asstes/105059-the-spider-man-into-spider-verse-png-download-free.png',
  './asstes/css/style.css'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then((keys) => {
        return Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        );
      })
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // If request has Range header (video streams), handle partial content
  if (event.request.headers.get('range')) {
    event.respondWith(handleRangeRequest(event.request));
    return;
  }

  // Cache-first strategy with background revalidation
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch fresh copy in background if online
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
            }
          })
          .catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
            return networkResponse;
          }
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
          return networkResponse;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});

async function handleRangeRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  let response = await cache.match(request.url);

  if (!response) {
    try {
      response = await fetch(request);
      // If we got a full 200 response, cache it for offline next time
      if (response.status === 200) {
        const clone = response.clone();
        cache.put(request.url, clone);
      }
      return response;
    } catch (e) {
      // If network failed, attempt to fetch without range from cache
      response = await cache.match(request.url);
      if (!response) {
        return new Response('Media offline', { status: 503, statusText: 'Offline' });
      }
    }
  }

  const rangeHeader = request.headers.get('range');
  const arrayBuffer = await response.arrayBuffer();
  const bytes = rangeHeader.replace(/bytes=/, '').split('-');
  const start = parseInt(bytes[0], 10) || 0;
  const end = bytes[1] ? parseInt(bytes[1], 10) : arrayBuffer.byteLength - 1;

  const slicedBuffer = arrayBuffer.slice(start, end + 1);

  return new Response(slicedBuffer, {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Type': response.headers.get('Content-Type') || 'video/mp4',
      'Content-Range': `bytes ${start}-${end}/${arrayBuffer.byteLength}`,
      'Content-Length': slicedBuffer.byteLength,
      'Accept-Ranges': 'bytes'
    }
  });
}
