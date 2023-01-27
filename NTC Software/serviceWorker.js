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

var addToCache = function (request) {
  return caches.open("pwabuilder-offline").then(function (cache) {
    return fetch(request).then(function (response) {
      console.log("[PWA Builder] add page to offline" + response.url);
      return cache.put(request, response);
    });
  });
};

var returnFromCache = function (request) {
  return caches.open("pwabuilder-offline").then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status == 404) {
        return cache.match("offline.html");
      } else {
        return matching;
      }
    });
  });
};
