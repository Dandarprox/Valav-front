workbox.core.setCacheNameDetails({ prefix: "Valav" });

self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.supressWarning();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('message', msg => {
  if (msg.data.action === 'skipWaiting') self.skipWaiting();
});
