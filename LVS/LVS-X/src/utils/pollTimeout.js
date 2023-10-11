export default function pollTimeout(selector, cb, int, exp) {
  setTimeout(function(){if(document.querySelector(selector)) {
    cb();
  }
  else if (exp <= 0) {
    return;
  }
  else {
    exp -= int;
    pollTimeout(selector, cb, int, exp);
  }}, int);
}