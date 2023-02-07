var query = window.location.search.substring(1);
var params = new URLSearchParams(query);
var callback = params.get("callback");

if (callback) {
  eval(decodeURIComponent(callback));
}
