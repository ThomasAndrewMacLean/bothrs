/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.core.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
    {
        url: 'bundle.css',
        revision: '3ea151eb524f3679fbb4b3a39f6b1cb3',
    },
    {
        url: 'bundle.js',
        revision: 'ccc770b8735756895453cdcf3eb4b3a6',
    },
    {
        url: 'global.css',
        revision: '1fbb1ec1f7f2e5c0b2b5f04a7b8b267a',
    },
    {
        url: 'icons/atom.png',
        revision: '2d4c60eed4695b080511f6eabde45bac',
    },
    {
        url: 'icons/atom.svg',
        revision: 'aee4b2dc7f599c2322ff4082f65a20f0',
    },
    {
        url: 'icons/inbox.png',
        revision: '7de68d4e5c775d1a9c92c0d5a12a58be',
    },
    {
        url: 'icons/inbox.svg',
        revision: '4f7bc1aa962cd9ab82ca46f88041d50e',
    },
    {
        url: 'icons/message.png',
        revision: 'c66e3a4b7e64f76a4502803e064a1596',
    },
    {
        url: 'icons/message.svg',
        revision: '88ecbec75c028ccbf73b465e412fbb85',
    },
    {
        url: 'icons/nav-bottom-home.svg',
        revision: '2f46a05842ab24f5057229570f95a080',
    },
    {
        url: 'icons/nav-bottom-profile_round.svg',
        revision: 'c42ffd2911b7ca525fed73cb69b6ab36',
    },
    {
        url: 'icons/nav-bottom-stats.svg',
        revision: '23bf7f1d8a4d823d5a934e71d3fec0d4',
    },
    {
        url: 'icons/profile.png',
        revision: '0f84949629f6ecd6545f5ea0764143bb',
    },
    {
        url: 'icons/tips.png',
        revision: 'a814530ee7417552c2a6620eced94b5b',
    },
    {
        url: 'icons/tips.svg',
        revision: '2c4be556ef28fd54970ce7568cb53168',
    },
    {
        url: 'images/android-chrome-192x192.png',
        revision: '4d032411adf4fbafae9b34c757b57b1f',
    },
    {
        url: 'images/android-chrome-512x512.png',
        revision: 'ef064a42fc46b7d91de281c5831bfd13',
    },
    {
        url: 'images/apple-touch-icon.png',
        revision: '86e86dfd277c587d2c62c3a896943ae3',
    },
    {
        url: 'images/favicon.ico',
        revision: 'c27a6a8dd2493b7d3b764acf35fe8904',
    },
    {
        url: 'index.html',
        revision: '3444ad4436d7786270e08812bedb810c',
    },
    {
        url: 'site.webmanifest',
        revision: '6d1c5e27f398e44dc3dd6692aceaaff2',
    },
].concat(self.__precacheManifest || []);
self.addEventListener('fetch', function(event) {});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();
