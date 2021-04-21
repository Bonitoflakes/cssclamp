 function windowresize() {
    let width = document.documentElement.clientWidth;
    // font-size: clamp(1.1rem, 0.7153rem + 1.6368vw, 2rem);
    let fontsize = `min: 11px /n inbetween : ${
      7.153 + (1.6368 * width) / 100
    }px /n max:20px`;
    console.log(fontsize);
  }
  let timeout = false;
  window.addEventListener("resize", () => {
    clearTimeout(timeout);
    timeout = setTimeout(getcomputedStyle, 1000);
  });
  // window.addEventListener("resize", windowresize);

  async function getcomputedStyle() {
    await windowresize();
    const reacttext = document.querySelector(".navbar-logo__text");
    let compStyles = window.getComputedStyle(reacttext).fontSize;
    console.log(compStyles);
  }
