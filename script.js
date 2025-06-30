const pageEl = document.querySelector(".browser-window .page")

window.addEventListener('message', (event) => {
  const { image, backgroundColor, frameColor, textColor } = event.data

  if (image) {
    pageEl.style.backgroundImage = `url(${image})`
    pageEl.querySelector(".logo").style.filter = 'brightness(0) invert(1)'
  }
  if (backgroundColor) document.documentElement.style.setProperty("--bg-color", backgroundColor)
  if (frameColor) document.documentElement.style.setProperty("--frame-color", frameColor)
  if (textColor) document.documentElement.style.setProperty("--text-color", textColor)
});
