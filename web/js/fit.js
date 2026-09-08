/* Viewport fit — contain-fit of the 1152x700 artboard.
   Scales the .stage to fill the viewport as much as possible WITHOUT cropping:
   scale = min(viewportW/1152, viewportH/700), centered via CSS translate(-50%,-50%).
   At an exactly 1152x700 viewport the scale is 1 (a 1:1 render of the artboard),
   so the pixel-diff baselines stay valid. */
(function () {
  'use strict';

  function fit() {
    var stage = document.querySelector('.stage');
    if (!stage) return;
    var scale = Math.min(window.innerWidth / 1152, window.innerHeight / 700);
    stage.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
  }

  window.addEventListener('resize', fit);
  fit();
})();