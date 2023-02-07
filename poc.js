var query = window.location.search.substring(1);
var code = decodeURIComponent(query.split("code=")[1]);
if (code) {
  eval(code);
}