// server_fixed.js
// Replace only the URL parsing line in your server.js

const http = require("http");

// Example patch:
// OLD:
// const u = url.parse(req.url), p = u.pathname;

// NEW:
function parseRequest(req){
  const u = new URL(req.url, `http://${req.headers.host}`);
  return {
    pathname: u.pathname,
    query: Object.fromEntries(u.searchParams)
  };
}

// Copy this logic into your existing server.js where url.parse() was used.
