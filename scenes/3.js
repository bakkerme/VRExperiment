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
        <Pano source={asset('3.jpg')} />
        <View>
          <Button
            onClick={() => this.routeToNewScene('SCENE2')}
            transform={[
              { translate: [22, -3, -38] },
              { rotateY: 60 }
            ]}
          />
          <Button
            onClick={() => this.routeToNewScene('SCENE1')}
            transform={[
              { translate: [-25, -3, -41] },
              { rotateY: 60 }
            ]}
          />
          <Button
            onClick={() => this.routeToNewScene('SCENE4')}
            transform={[
              { translate: [-32, -3, -24] },
              { rotateY: 50 }
            ]}
          />
        </View>
      </View>
    );
  }
}