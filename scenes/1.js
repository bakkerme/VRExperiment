import React from 'react';
import {
  asset,
  Pano,
  View,
  VrButton,
  Box,
} from 'react-vr';

import Button from '../components/button';

export default class Scene1 extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  routeToNewScene = (scene) => {
    this.props.onNewScene(scene);
  }

  render() {
    return (
      <View>
        <Pano
          source={asset('1.jpg')}
        />
        <View>
          <Button
            onClick={() => this.routeToNewScene('SCENE2')}
            transform={[
              { translate: [-13, -3, -37] },
              { rotateY: -18 }
            ]}
          />
          <Button
            onClick={() => this.routeToNewScene('SCENE3')}
            transform={[
              { translate: [32, -2, -32] },
              { rotateY: -18 }
            ]}
          />
          <Button
            onClick={() => this.routeToNewScene('SCENE4')}
            transform={[
              { translate: [20, 0, 15] },
              { rotateY: -18 }
            ]}
          />
        </View>
      </View>
    );
  }
}

