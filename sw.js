if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>c(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),i)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/192.png",revision:"9bae114806230d82d4f098452088bb91"},{url:"/404.svg",revision:"4fc49eb0df0f3f1c2a98c80f2aa1a52f"},{url:"/512.png",revision:"92b778e2e356b4765cad396d7bcf0166"},{url:"/CNAME",revision:"c8d366f1610ac175e9055f455bc7b318"},{url:"/_next/static/E2w3pxDJW_qempooZNByN/_buildManifest.js",revision:"a99821e9348cdf58decbfbb37ae28193"},{url:"/_next/static/E2w3pxDJW_qempooZNByN/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/163-c684129a36eb855a.js",revision:"c684129a36eb855a"},{url:"/_next/static/chunks/1a48c3c1-eca8f271455f3aaa.js",revision:"eca8f271455f3aaa"},{url:"/_next/static/chunks/1bfc9850-b3335b36a3ad05ed.js",revision:"b3335b36a3ad05ed"},{url:"/_next/static/chunks/252f366e-98ea6c1e5f4c0bcf.js",revision:"98ea6c1e5f4c0bcf"},{url:"/_next/static/chunks/289-478f1f0aa19b5895.js",revision:"478f1f0aa19b5895"},{url:"/_next/static/chunks/329-6efc812b1373ac44.js",revision:"6efc812b1373ac44"},{url:"/_next/static/chunks/342.a413362121627197.js",revision:"a413362121627197"},{url:"/_next/static/chunks/350-c5b038a64a7cf7fe.js",revision:"c5b038a64a7cf7fe"},{url:"/_next/static/chunks/406.5591b6f8a2646ddc.js",revision:"5591b6f8a2646ddc"},{url:"/_next/static/chunks/680.0e32bd36ee903e73.js",revision:"0e32bd36ee903e73"},{url:"/_next/static/chunks/72fdc299.ae54b4bfb42017ec.js",revision:"ae54b4bfb42017ec"},{url:"/_next/static/chunks/7f0c75c1-2312bc4b6f945b07.js",revision:"2312bc4b6f945b07"},{url:"/_next/static/chunks/837.a83628ba3db219e7.js",revision:"a83628ba3db219e7"},{url:"/_next/static/chunks/95b64a6e-87fe00a683e74111.js",revision:"87fe00a683e74111"},{url:"/_next/static/chunks/ae51ba48.075bd16c039e9038.js",revision:"075bd16c039e9038"},{url:"/_next/static/chunks/bd1a647f.60132d6fbf3900ab.js",revision:"60132d6fbf3900ab"},{url:"/_next/static/chunks/d0c16330.545315c876080f2e.js",revision:"545315c876080f2e"},{url:"/_next/static/chunks/d64684d8-5b19c4aed46e74e2.js",revision:"5b19c4aed46e74e2"},{url:"/_next/static/chunks/d7eeaac4-16f60f056a4a8cd2.js",revision:"16f60f056a4a8cd2"},{url:"/_next/static/chunks/de71a805-f1c92c238836c337.js",revision:"f1c92c238836c337"},{url:"/_next/static/chunks/framework-111397ef944354a4.js",revision:"111397ef944354a4"},{url:"/_next/static/chunks/main-84bc79fbdcb23a2c.js",revision:"84bc79fbdcb23a2c"},{url:"/_next/static/chunks/pages/404-59365ac13ff884c6.js",revision:"59365ac13ff884c6"},{url:"/_next/static/chunks/pages/Editor-3c9040a6bb885f49.js",revision:"3c9040a6bb885f49"},{url:"/_next/static/chunks/pages/Widget-2de49914b50cc69a.js",revision:"2de49914b50cc69a"},{url:"/_next/static/chunks/pages/_app-68526fc506214b38.js",revision:"68526fc506214b38"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/index-14ca642437e9203b.js",revision:"14ca642437e9203b"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-554d9bbf54d317ea.js",revision:"554d9bbf54d317ea"},{url:"/_next/static/css/61df390b1644371a.css",revision:"61df390b1644371a"},{url:"/favicon.ico",revision:"6864e7778805bb89123fe3fc7187ae4d"},{url:"/jsoncrack-screenshot.webp",revision:"b5c07bfaf044bc835e2d979082848364"},{url:"/jsoncrack.png",revision:"79dd8386592fe2a1b489b617963933ee"},{url:"/jsonvisio-screenshot.webp",revision:"796131c9bbe3b08b6ba2f9cd6d21eff6"},{url:"/manifest.json",revision:"38783e9073e1b3dc4838585ff57ab883"},{url:"/robots.txt",revision:"889cb00f522a611bc710e481c32a87c2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
