export default class GazeRaycaster {
  getType() {
    return "gaze-raycaster";
  }

  getRayOrigin(cam) {
    return [0, 0, 0];
  }

  getRayDirection(cam) {
    return [0, 0, -1];
  }

  drawsCursor() {
    return true;
  }
}