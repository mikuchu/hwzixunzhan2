'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_6.part.js": "a62eb81c680f9fb6bd866bd55dc830d0",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_39.part.js": "f2ad682e3d42c17a3026e2fb4e2990b8",
"main.dart.js_19.part.js": "f6b40d5985161a8ae7893c2f7bf51ca2",
"manifest.json": "27a6598457ff96a3f3a6028a19be94b0",
"main.dart.js_32.part.js": "976cb709c8b1b5d302c18efaa51e5712",
"main.dart.js_29.part.js": "96f2e4ef5a2e70a2785cc2fba822ba7c",
"main.dart.js_34.part.js": "9bddd279a627de528b4e373c3405090b",
"main.dart.js_2.part.js": "39c5e4e9ae6a31982df8a65d687242de",
"assets/AssetManifest.json": "3eaf65f6d8be532e973a9dd31ab7360e",
"assets/assets/logo.riv": "f0f5709f257a60f4ba6312e4038a2802",
"assets/NOTICES": "c48a87a15512e7e55ac8993976676200",
"assets/packages/firebase_integration/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "2eb4f865acee31d1af9c4001371142e1",
"assets/images/album.jpg": "f56ee8f7688570656412232d7d0f6781",
"assets/images/alb.png": "e2df6fa4b0fad71522e429bfd70aef4d",
"assets/images/W(2).png": "8dfd56ecdfb43b688ec4632f4b0d411e",
"assets/images/Logo.svg": "b4f2cad530c601c725d5bdaa8753bd24",
"assets/images/blank-profile-picture.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/images/Union.svg": "b0874c213bbb229023231b97a6548515",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Aldrich-Regular.ttf": "d95d3c0366bed65728b9968195c0ea11",
"index.html": "369f5ad065f00056d94298a7160db7da",
"/": "369f5ad065f00056d94298a7160db7da",
"main.dart.js_44.part.js": "1dff918a4745eb10877dc1d3189f80e5",
"main.dart.js_40.part.js": "d23624397b73e8c111a2ba3fc1d090ea",
"main.dart.js_21.part.js": "820d851e10bcf39e667a5fdfa5867890",
"main.dart.js_41.part.js": "bf56e8d311ba427706bc986805290422",
"main.dart.js_31.part.js": "5ec3532e818cd14f9aa0b302555ed735",
"main.dart.js_16.part.js": "eb5f52fa66e6a6ee61bf4fa73dd414c1",
"main.dart.js_42.part.js": "2d5993bd62bf566740f272efc9a82cc8",
"main.dart.js_12.part.js": "b32efbcc64c72b9fe3019c3a1b852ca3",
"version.json": "1d115db029c619818c06cb0f0d1f1e10",
"README.md": "1f3017e30cfbbcc1ce6bb337640f42c3",
"main.dart.js_20.part.js": "7c9046313791ce630693980a8a4de5ea",
"main.dart.js_47.part.js": "11eda87b633e78444221a7692f23c966",
"main.dart.js_11.part.js": "7c5884098e7f930f62a991c2f6d0c5d5",
"main.dart.js_46.part.js": "08731ce2081027a6ff2fe4f285ccda0b",
"CNAME": "6dc7d1a64c846dd67fe54d6b9992109c",
"main.dart.js_26.part.js": "211616a33b17a121a00f2b9b63d3c589",
"main.dart.js_36.part.js": "7b3605ae82cdce55eea949c1fd53974a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_8.part.js": "9e912a249adf0f0fee73085db1d7f923",
"main.dart.js_49.part.js": "eeb4cc9cbe35c0f5b325dcc1761a91dc",
"main.dart.js_14.part.js": "be7bb2c698c4cfeab0de455f222c5990",
"main.dart.js_10.part.js": "a4453cbe6b64678b47231fe8a6900640",
"main.dart.js_3.part.js": "fc9f0a7dfd79bcf7ac8d20a3a36609ef",
"main.dart.js_33.part.js": "e78bf667035a3a857364a8685b33ee60",
"main.dart.js_43.part.js": "ca9741bacdc89984664c24e783fbfaaf",
"main.dart.js_1.part.js": "4ad9a5bc1472c3f63584b998b032e45e",
"main.dart.js_17.part.js": "037e32145cbc56eaaebecd348a420879",
"LICENSE": "fb5d051e53001fdff7fec0f368f47190",
"main.dart.js_15.part.js": "adbf35a74ee92538fbade327681f344e",
"main.dart.js": "fc9534dc2e4bd291c122642cdc4b1b7c",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js_7.part.js": "4f63a28e94d74c6ac35b87f9d025a72b",
"main.dart.js_22.part.js": "2ad1c2807c2ae5c473302827a0df6fce",
"main.dart.js_25.part.js": "5a7b290d94c13670c1f95dd7ac0cea08",
"main.dart.js_18.part.js": "5f32ee8ad0b6eacbe859310a21ccb265",
"main.dart.js_48.part.js": "f09046821fae85dd008045a9683ea0af",
"main.dart.js_45.part.js": "2f22ca1836e1acf27207d6340127eb26",
"main.dart.js_38.part.js": "1c8cd7e7d468da6acd5c9128007ed682",
"main.dart.js_35.part.js": "0df2797499cc3eba6087db6bba693917",
"main.dart.js_9.part.js": "14d5b316ef769a86b1600fc2a217b4bf",
"main.dart.js_28.part.js": "53da7931d6a884d73fa798b2a52c3551"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
