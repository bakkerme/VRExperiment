import React from 'react';
import {
  asset,
  Pano,
  View,
  VrButton,
  Box,
} from 'react-vr';

import Button from '../components/button';

export default class Scene3 extends React.Component {
  routeToNewScene = (scene) => {
    this.props.onNewScene(scene);
  }

  render() {
    return (
      <View>
        <Pano source={asset('4.jpg')} />
        <View>
          <Button
            onClick={() => this.routeToNewScene('SCENE2')}
            transform={[
              { translate: [37, -3, -47] },
              { rotateY: 60 }
            ]}
          />
          <Button
            onClick={() => this.routeToNewScene('SCENE1')}
            transform={[
              { translate: [-7, -3, -25] },
              { rotateY: 15 }
            ]}
          />
          <Button
            onClick={() => this.routeToNewScene('SCENE3')}
            transform={[
              { translate: [40, -3, -1] },
              { rotateY: 0 }
            ]}
          />
        </View>
      </View>
    );
  }
}