window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".skill-fill");

  bars.forEach(bar => {
    const width = bar.getAttribute("style").match(/\d+/)[0];
    setTimeout(() => {
      bar.style.width = width + "%";
    }, 500);
  });
});