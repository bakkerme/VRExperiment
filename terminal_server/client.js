// import xterm from 'xterm/dist/xterm.css'
import Terminal from 'xterm';
require('xterm/lib/addons/attach/attach');

export default class TerminalReciever {
  term;
  protocol;
  socketURL;
  socket;
  pid;
  charWidth;
  charHeight;
  terminalContainer;

  constructor() {
    this.terminalContainer = document.getElementById('terminal-container');
  }

  setTerminalSize() {
    const cols = parseInt(colsElement.value, 10),
      rows = parseInt(rowsElement.value, 10),
      width = (cols * this.charWidth).toString() + 'px',
      height = (rows * this.charHeight).toString() + 'px';

    this.terminalContainer.style.width = width;
    this.terminalContainer.style.height = height;
    this.term.resize(cols, rows);
  }

  createTerminal() {
    // Clean terminal
    while (this.terminalContainer.children.length) {
      this.terminalContainer.removeChild(this.terminalContainer.children[0]);
    }
    this.term = new Terminal();
    this.term.on('resize', function (size) {
      if (!this.pid) {
        return;
      }
      const cols = size.cols,
        rows = size.rows,
        url = '/terminals/' + this.pid + '/size?cols=' + cols + '&rows=' + rows;

      fetch(url, { method: 'POST' });
    });
    this.protocol = (location.protocol === 'https:') ? 'wss://' : 'ws://';
    this.socketURL = this.protocol + location.hostname + ':3000' + '/terminals/';

    this.term.open(this.terminalContainer, true);
    // this.term.fit();

    // const initialGeometry = this.term.proposeGeometry(),
    //   cols = initialGeometry.cols,
    //   rows = initialGeometry.rows;

    // colsElement.value = cols;
    // rowsElement.value = rows;

    const cols = 120;
    const rows = 80;

    fetch('http://localhost:3000/terminals?cols=' + cols + '&rows=' + rows, { method: 'POST' })
      .then(function (res) {
        this.charWidth = Math.ceil(this.term.element.offsetWidth / cols);
        this.charHeight = Math.ceil(this.term.element.offsetHeight / rows);

        res.text().then(function (pid) {
          this.pid = pid;
          window.pid = this.pid;
          this.socketURL += this.pid;
          this.socket = new WebSocket(this.socketURL);
          this.socket.onopen = this.runRealTerminal.bind(this);
        }.bind(this));
      }.bind(this));
  }

  runRealTerminal () {
    this.term.attach(this.socket);
    this.term._initialized = true;
  }
}



