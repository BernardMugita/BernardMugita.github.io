'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "9a6583fb47459244c47ae71eb43706cc",
"assets/assets/images/barcode.png": "4d76f0095e8840b540b1ab80f41b1d66",
"assets/assets/images/node.png": "621c6e6b75795015e5f0f565d9015643",
"assets/assets/images/express.png": "4ee2ac245d19ad9feffc6eb00e3ad02a",
"assets/assets/images/python.png": "26f175711795bccc46c53bbd5e724bac",
"assets/assets/images/JavaScript.png": "42c9c672f97d9c6990ad4489220ca222",
"assets/assets/images/mongo.png": "6a21394db89b124a1cd5efb2daa85b70",
"assets/assets/images/mugita_half.png": "68b5d478a7f70c6b57bf026d90e0fc5c",
"assets/assets/images/fastapi.png": "1fcebe539c199b4f419ea12d7d196d20",
"assets/assets/images/brush-stroke.png": "1b19a82bb83c913d88531e27532ebe52",
"assets/assets/images/label.png": "c7c4b70bc201161f974162fa3453a1df",
"assets/assets/images/flutter.png": "e613d89e4857bf4f695c510d9deeb4b1",
"assets/assets/images/broker-mobile.png": "ed3790a63a376f3c17126f89987c12c9",
"assets/assets/images/white-jaister.png": "82fe664b9fc2a67c4a26556a397e48fb",
"assets/assets/images/ability.png": "ce66a38605f28a12d6d1e4713735da6a",
"assets/assets/images/macbook-air-m2-still.png": "f964ad0ebc76155a844c1e070698d88c",
"assets/assets/images/barcode-white-long.png": "c50ce7c90360e05a0979236d4595ebdf",
"assets/assets/images/sql.png": "75607d9c22ea672614da259fc351559c",
"assets/assets/images/samsung-galaxy-still-2.png": "0a07ae981ae557c055de6b7dac549811",
"assets/assets/images/iphone-15-pro.png": "90ae894fc2ce7376f1526494f05b0ac4",
"assets/assets/images/samsung-galaxy-still.png": "ab95c89aedebe0fb83fbc455446488d3",
"assets/assets/images/react.png": "4d968f3f30c458e9ab907ead91cf9c46",
"assets/assets/images/html.png": "cbabeaa55d42936ae9f7e3d7d3172096",
"assets/assets/images/sqla.png": "13d040b67ab832dc2a07749470f20363",
"assets/assets/images/bg.png": "0724d0607efd4d1f24ff1e9d79226b6a",
"assets/assets/images/jk-content.jpg": "97c2c55dd3f7e63e2a94aea41c109499",
"assets/assets/images/portrait.png": "a5e5b8b2096a33117418e7a3b5d1a75f",
"assets/assets/images/sequelize.png": "e4b09c6b5e1f6499465e8a3da95ecef9",
"assets/assets/images/css.png": "b8dbb073244871d19c760d716158abb1",
"assets/assets/images/broker-desktop.png": "3c5d46ded5c472eeb025e0993337bcb5",
"assets/assets/images/finalyze.png": "0dd9b1ba677ccdf1fa933fb4020be76a",
"assets/assets/images/dowell.png": "6e7a2acead163d7bc257d57f593e8b4a",
"assets/assets/images/meal-planner.png": "75876f0b791dd68ce08333fedaf34ef8",
"assets/assets/images/angular.png": "5db50d72e64e5fb5b94941f9fc72f4d6",
"assets/assets/images/barcode-white.png": "68876ce99613f589859c2a596163615c",
"assets/assets/images/sqla-white.png": "b9e71ac746af0901611afc694d728748",
"assets/assets/3d/kibanda.fbx": "cf6c8c46f217acb4533dd421b62c47dc",
"assets/FontManifest.json": "03935bf329bb2304c285e645fe90fd40",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cf7b84ce284f13723083674e5d9191d8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/flutter_3d_controller/assets/model_viewer_template.html": "a9989c356a88d3bb1f11c710ff2923de",
"assets/packages/flutter_3d_controller/assets/model_viewer.min.js": "11f3833db561a92ac9100cd43d28899b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "95ae47f84a85158a6335f6ff0cb2aae7",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "27ab39c25585c6cc59a12c92e76ae881",
"assets/fonts/DynaPuff-VariableFont_wdth,wght.ttf": "9486565e4af43d5b8f8af8f86f44a799",
"assets/fonts/Satisfy-Regular.ttf": "aaa5880c7a5f7e479e31a4412452d8a9",
"assets/fonts/Kablammo-Regular-VariableFont_MORF.ttf": "b49a7ccb734012980246952936d81330",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/fonts/Raleway-Italic-VariableFont_wght.ttf": "a454a97a31574945baa438773b6738a0",
"assets/fonts/Raleway-VariableFont_wght.ttf": "029b34594de6218e9aaa8b95854f30fe",
"assets/fonts/DancingScript-VariableFont_wght.ttf": "d58bb592345e95e81157b07c2db7bc00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "3b060db589aeb25c29f0870691267c44",
"assets/NOTICES": "4ca415a4a1c6b45d3684f30bc7c9e70d",
"assets/AssetManifest.bin": "ede480449f4c7495f547c35df4d9655e",
"assets/AssetManifest.bin.json": "d2a67d519033a2164dd77edec42e04a4",
"flutter_bootstrap.js": "8127dcff6b54edb9482bcbb4a67d70f0",
"index.html": "bf38f5a58fd9ae4b7b1ccb313c894bad",
"/": "bf38f5a58fd9ae4b7b1ccb313c894bad",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/logo.png": "303e22e36c39c0582648b86f32ef7da9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
