(() => {
  var r = {
      84: (r) => {
        r.exports = alert("this is abc file");
      },
    },
    e = {};
  (function t(i) {
    var s = e[i];
    if (void 0 !== s) return s.exports;
    var o = (e[i] = { exports: {} });
    return r[i](o, o.exports, t), o.exports;
  })(84),
    alert("this is index file");
})();
