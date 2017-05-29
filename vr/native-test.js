import { Module } from 'react-vr-web';
import domtoimage from 'dom-to-image';

export default class NativeTest extends Module {
  node = null;
  _rnctx = null

  constructor() {
    super('NativeTest');
    this.node = document.getElementById('terminal-container');
  }

  $capture(success) {
    domtoimage.toPng(this.node).then((val) => {
      this._rnctx.invokeCallback(success, [val]);
    });
  }
}