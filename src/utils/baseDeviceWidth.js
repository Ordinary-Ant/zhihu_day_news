(function () {
  const max = function () {
    const html = document.documentElement,
      root = document.querySelector("#root"),
      cw = html.clientWidth;
    root.style.maxWidth = "750px";
    if (cw >= 750) {
      html.style.fontSize = "75px";
    }
  };
  max();
  window.addEventListener("resize", max);
})();
