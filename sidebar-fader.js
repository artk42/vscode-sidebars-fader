// sidebar-fader.js
(() => {
  let faded = false;
  // adjust dim level (brightness factor)
  const fadeBrightness = 0.05;
  // choose overlay color for fade (can be rgba or hex)
  const fadeColor = 'rgba(255, 255, 255, 0.4)'; // black overlay, change to 'rgba(255,255,255,0.4)' for light grey

  const STYLE_ID = 'sidebar-fader-styles-v4';

  function ensureStyle() {
    let styleTag = document.getElementById(STYLE_ID);
    if (styleTag) return styleTag;

    styleTag = document.createElement('style');
    styleTag.id = STYLE_ID;
    styleTag.type = 'text/css';

    styleTag.innerHTML = `
.sidebar-faded-root * {
  opacity: 0.05 !important;
  filter: brightness(0.05) saturate(0.3) !important;
  transition: opacity 0.15s linear, filter 0.15s linear;
}
.sidebar-faded-root:hover * {
  opacity: 1 !important;
  filter: none !important;
}
`;
    document.head.appendChild(styleTag);
    return styleTag;
  }

  function fade() {
    if (faded) return;
    const roots = document.querySelectorAll('.part.sidebar, .part.auxiliarybar, .part.activitybar, .part.panel');
    if (!roots || roots.length === 0) return;

    ensureStyle();
    roots.forEach(r => r.classList.add('sidebar-faded-root'));
    faded = true;
  }

  function unfade() {
    if (!faded) return;
    const roots = document.querySelectorAll('.part.sidebar, .part.auxiliarybar, .part.activitybar, .part.panel');
    roots.forEach(r => r.classList.remove('sidebar-faded-root'));
    faded = false;
  }

  document.addEventListener('focusin', (e) => {
    const editor = document.querySelector('.editor-instance');
    if (editor && editor.contains(e.target)) {
      fade();
    } else {
      unfade();
    }
  });

  const editor = document.querySelector('.editor-instance');
  if (editor) fade();
})();