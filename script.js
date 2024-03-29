const browserContent = document.querySelector(".browser-window .content")

window.addEventListener('message', (event) => {
  const { image, backgroundColor, frameColor, textColor } = event.data

  if (image) {
    browserContent.style.backgroundImage = `url(${image})`
    browserContent.querySelector(".logo").style.filter = 'brightness(0) invert(1)'
  }
  if (backgroundColor) document.documentElement.style.setProperty("--background-color", backgroundColor)
  if (frameColor) document.documentElement.style.setProperty("--frame-color", frameColor)
  if (textColor) document.documentElement.style.setProperty("--text-color", textColor)
});