import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  VrButton,
  AmbientLight,
  Box,
  Scene
} from 'react-vr';

import Scenes from './scenes';

class WelcomeToVR extends React.Component {
  constructor() {
    super();

    this.state = {
      currScene: <Scenes.SCENE1 onNewScene={this.onNewScene} />
    }
  }

  onNewScene = (sceneConstant) => {
    const Scene = Scenes[sceneConstant];

    if(Scene) {
      this.setState({
        currScene: <Scene onNewScene={this.onNewScene} />
      });
    }
  }

  render() {
    return (
      this.state.currScene
    );
  }
};


AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);