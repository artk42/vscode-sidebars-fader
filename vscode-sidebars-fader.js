// VSCode Sidebars Fader

(() => {
  let faded = false;
  // adjust dim level (brightness factor)
  const fadeBrightness = 0.05;
  // choose overlay color for fade (can be rgba or hex)
  // const fadeColor = 'rgba(200, 200, 200, 0.7)';
  const fadeColor = 'rgba(255, 255, 255, 0.7)';
  // mode toggle
  const blackout = false; // true = black/strong blackout, false = color fill variant

  const STYLE_ID = 'sidebar-fader-styles-v5';

  function ensureStyle() {
    let styleTag = document.getElementById(STYLE_ID);
    if (styleTag) return styleTag;

    styleTag = document.createElement('style');
    styleTag.id = STYLE_ID;
    styleTag.type = 'text/css';

    if (blackout) {
      styleTag.innerHTML = `
/* Blackout mode: container-level filter + child opacity */
.sidebar-faded-root {
  filter: brightness(${fadeBrightness}) saturate(0.3);
  transition: filter 0.25s ease;
}
.sidebar-faded-root * {
  opacity: 0.3 !important;
  transition: opacity 0.25s ease;
}
.sidebar-faded-root:hover {
  filter: none !important;
}
.sidebar-faded-root:hover * {
  opacity: 1 !important;
}
`;
    } else {
      styleTag.innerHTML = `
/* Color fill mode: use background overlay */
.sidebar-faded-root {
  background-color: ${fadeColor} !important;
  transition: background-color 0.25s ease;
}
.sidebar-faded-root * {
  opacity: 0.4 !important;
  transition: opacity 0.25s ease;
}
.sidebar-faded-root:hover {
  background-color: transparent !important;
}
.sidebar-faded-root:hover * {
  opacity: 1 !important;
}
`;
    }

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