  componentDidMount() {
    // document.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    let event = e.nativeEvent.inputEvent;
    if (event.eventType !== 'keydown')
      return

    let code = event.keyCode ? event.keyCode : event.which;
    let mov = .1;

    if (code === 87) {
      this.setState({
        z: this.state.z - mov
      })
    }

    if (code === 68) {
      this.setState({
        x: this.state.x + mov 
      })
    }

    if (code === 65) {
      this.setState({
        x: this.state.x - mov
      })
    }


    if (code === 83) {
      this.setState({
        z: this.state.z + mov
      })
    }
  }
