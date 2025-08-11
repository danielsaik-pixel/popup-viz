(function () {
  const overlay = () => document.getElementById('overlay');
  const closeBtn = () => document.getElementById('closeBtn');
  const infoBadge = () => document.getElementById('infoBadge');

  function showOverlay() { overlay().style.display = 'flex'; }
  function hideOverlay() { overlay().style.display = 'none'; }

  // Zamknij po kliknięciu przycisku
  window.addEventListener('load', () => {
    closeBtn().addEventListener('click', hideOverlay);
    infoBadge().addEventListener('click', showOverlay);

    // Pokaż automatycznie przy pierwszym otwarciu (w obrębie tego iframe)
    showOverlay();
  });
})();
