// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import { VRInstance } from 'react-vr-web';

import GazeRaycaster from './gaze-raycaster';

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'WelcomeToVR', parent, {
    // Add custom options here
    raycasters: [new GazeRaycaster()],
    cursorVisibility: 'visible',
    ...options,
  });
  vr.render = function () {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = { init };
