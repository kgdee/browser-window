

window.addEventListener('message', (event) => {
  if (event.origin !== 'https://kgdee.github.io') return

  const { variableName, value } = event.data

  document.documentElement.style.setProperty(variableName, value)
});