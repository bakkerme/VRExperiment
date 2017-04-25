import React from 'react';
import {
  asset,
  Pano,
  View,
  VrButton,
  Box,
} from 'react-vr';

import Button from '../components/button';

export default class Scene2 extends React.Component {
  routeToNewScene = (scene) => {
    this.props.onNewScene(scene);
  }

  render() {
    return (
      <View>
        <Pano source={asset('2.jpg')} />
        <View>
          <Button
            onClick={() => this.routeToNewScene('SCENE1')}
            transform={[
              { translate: [0, -3, -46] },
              { rotateY: 60 }
            ]}
          />
          <Button
            onClick={() => this.routeToNewScene('SCENE3')}
            transform={[
              { translate: [-35, -3, -15] },
              { rotateY: 60 }
            ]}
          />
          <Button
            onClick={() => this.routeToNewScene('SCENE4')}
            transform={[
              { translate: [-15, -3, -50] },
              { rotateY: 60 }
            ]}
          />
        </View>
      </View>
    );
  }
}