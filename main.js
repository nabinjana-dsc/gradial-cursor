document.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--x", e.clientX);
    document.documentElement.style.setProperty("--y", e.clientY);
  });
  