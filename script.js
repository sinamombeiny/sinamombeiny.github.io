(() => {
  const startAnimation = () => {
    console.log("Animation started");
  };

  const init = () => {
    const body = document.body;
    body.classList.remove("is-loading");
    startAnimation();
  };

  if (!document.body.classList.contains("is-loading")) {
    document.body.classList.add("is-loading");
  }

  window.addEventListener("load", init);
})();
