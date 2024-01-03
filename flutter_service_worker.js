'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "36282339da4efa20ddf574fa012c1e89",
"assets/AssetManifest.json": "cf1cddf62df2763e39eefde8043a05f0",
"assets/assets/fonts/fieldwork-geo-thin.ttf": "550bd82870d9ae0d80f2665be67c47b2",
"assets/assets/icons/arrow_left.png": "f0673379c45c8370c685f72dcb334a78",
"assets/assets/images/account_circle.svg": "b67bdd66644974f6bd911e50bd095e1d",
"assets/assets/images/account_successfull_tick.png": "a9e8fc01a880f48a1d6086c3a1321a8d",
"assets/assets/images/address.svg": "442ff5f43fa55c6a0f3d32c80862a129",
"assets/assets/images/address_icon.png": "cbd836226c4f1783cbf0f9adba776de0",
"assets/assets/images/admin_icon.svg": "3ab9a2a68488307adba04c95543fc3c0",
"assets/assets/images/archive.svg": "45297f024d85530c4bce8350f2f02fe7",
"assets/assets/images/arrow.svg": "dbf58bf3baad1285b42479586c1dba98",
"assets/assets/images/back.png": "b876ab7b12b0ea6cf7e9619637479ab1",
"assets/assets/images/bold_back.png": "f0673379c45c8370c685f72dcb334a78",
"assets/assets/images/book_reader.svg": "b268a9690bafb6d859947e5d3734e9bd",
"assets/assets/images/call.svg": "761118156108f9c3b92d0530c420cf46",
"assets/assets/images/camera.svg": "9fff71dce13ab2a3d39c21922f8ef9f0",
"assets/assets/images/cancel.svg": "0c3e43ec38b8d0565ff6f47ebcfc2f52",
"assets/assets/images/close_circle.svg": "74dec834a97f76a6772f9d3943c498c2",
"assets/assets/images/contact_icon.png": "1e7a8a9c78457b6724f9a68877aea9c5",
"assets/assets/images/cross.svg": "8e1c6ea10fe28d65af3f90fb7e8f4fce",
"assets/assets/images/edit.svg": "318fc77b5ef79ce93d7b87588d6990fa",
"assets/assets/images/educator_icon.png": "f81f9a84e359fff2a21e8ead1f38f95f",
"assets/assets/images/email.svg": "e2ce54d38c2ddebfbabeddf7df15d120",
"assets/assets/images/email_icon.png": "9f67079bdc4b591aa059aabb054e4117",
"assets/assets/images/eye_icon.png": "763348e6a6540acd0a0b0c813570f6f2",
"assets/assets/images/family_icon.png": "96bc0d771a37e6bf9097fdf0dbf9ba46",
"assets/assets/images/filter.svg": "53e30581f7b391d57e222c2364c15924",
"assets/assets/images/gold_level.png": "703601790e9897823a27c9655a47968f",
"assets/assets/images/green_tick.svg": "837e6b2847926da4d24d4cf7f6221221",
"assets/assets/images/hamburger.svg": "91ba6ce36a3348409a0c1d84babd1f56",
"assets/assets/images/individual_icon.png": "2ea9c597a77bf446f9aabc9922c0c87b",
"assets/assets/images/invite_icon.svg": "3cf6cd61e3600fee8c5a35d14fc368f4",
"assets/assets/images/Join.png": "5906a35faba993632ab9119c52ec8f3b",
"assets/assets/images/login_back.png": "2b3711a31e24dc01b3c11b4c115bb6fd",
"assets/assets/images/login_background.png": "29633eb96dcb2ccd6f3d038fb5c58fc6",
"assets/assets/images/logout.svg": "1465d41c6558875592cc7024835a8c4a",
"assets/assets/images/menu.svg": "9a963b7c4d19311436e1df850c6ad4df",
"assets/assets/images/newsletter_icon.png": "42d7ff829cc5b722ad5592a65190190d",
"assets/assets/images/organization.svg": "8a08cef6c6219bd35ad9b98b9ab6a165",
"assets/assets/images/org_icon.png": "85e7d9a035cc31d245085617c548c482",
"assets/assets/images/password_icon.png": "d0d77b1d4ab36d9600b0a336f97c06c1",
"assets/assets/images/pen.svg": "94addaa32c6b064468057f6d49091514",
"assets/assets/images/pencil.png": "accd31649b8e84b03d548e2a0402133e",
"assets/assets/images/people.svg": "1adaff18aff0b7185fad0d8ca83860a7",
"assets/assets/images/person_add.svg": "8b6ddee416b430a7574a7cf7b0803d76",
"assets/assets/images/platinum_level.svg": "bbba19dc86ed4fa9b65d1dd9372b0987",
"assets/assets/images/profile_icon.svg": "d7828a53d56804512369afc729f80902",
"assets/assets/images/red_cross.svg": "18eb5860fe76bea4fea97eb0188ee877",
"assets/assets/images/report.svg": "e2df9b346073589424b69c70811288ef",
"assets/assets/images/search.svg": "91241284f32f364c7a3280d7fa29a963",
"assets/assets/images/settings.svg": "9084c7a851c3a5a0a8cb0af980477731",
"assets/assets/images/silver_level.svg": "f4f35ea9791364f0529a6bfae087ee8c",
"assets/assets/images/title_icon.png": "0c1741deb7d4a0d5cfed0b36cf69039a",
"assets/assets/images/unlockpin_icon.png": "b170fb4cbd3259b6fa7aeb67e758dd23",
"assets/assets/images/user.svg": "02537f867f13d6d09ab8e05a4c7b40ff",
"assets/assets/images/user_graduate.svg": "9bb4f386d7129aef93d5bcf1dcc7d372",
"assets/assets/images/user_icon.png": "eb56b493d3e70801ef2ebd8506e23fb6",
"assets/assets/images/warranties.svg": "5c45f327eedde10c3dca78cb6fa4f916",
"assets/FontManifest.json": "3c6efc7be66fd4fb192c4484a869df06",
"assets/fonts/MaterialIcons-Regular.otf": "543ce1b66a096cbeabd4dbfe6da2c949",
"assets/NOTICES": "a9f020adbda17ec2a6630b931b5f00e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "750965ccf56d7b80976d85d2062b0009",
"/": "750965ccf56d7b80976d85d2062b0009",
"main.dart.js": "f2439e33b339c2a9bce751aab388de06",
"manifest.json": "15e7d56a981018ffa00d48e5d8d638f6",
"version.json": "cb169c38964608c7b88baf52097a3d04"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
