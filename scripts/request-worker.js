self.onmessage = function (e) {
  var xhr;
  if (e.data.url) {
    xhr = new XMLHttpRequest();
    xhr.open('GET', e.data.url, true);
    xhr.responseType = 'json';
    xhr.onload = function (e) {
      self.postMessage({response: e.target.response});
    };
    xhr.send();
  } else {
    self.postMessage({response: undefined});
  }
};
