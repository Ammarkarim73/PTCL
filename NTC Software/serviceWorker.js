const catPhoto = "PTCL-NTC"
const assets = [
  "./ptcl logo.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(catPhoto).then(cache => {
      return cache.addAll(assets);
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
});

var checkResponse = function (request) {
  return new Promise(function (fulfill, reject) {
    fetch(request).then(function (response) {
      if (response.status !== 404) {
        fulfill(response);
      } else {
        reject();
      }
    }, reject);
  });
};

var addToCache = async function (request) {
  const cache = await caches.open("pwabuilder-offline");
  const response = await fetch(request);
  console.log("[PWA Builder] add page to offline" + response.url);
  return await cache.put(request, response);
};

var returnFromCache = async function (request) {
  const cache = await caches.open("pwabuilder-offline");
  const matching = await cache.match(request);
  if (!matching || matching.status == 404) {
    return cache.match("offline.html");
  } else {
    return matching;
  }
};
