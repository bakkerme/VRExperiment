import React from 'react';
import {
  asset,
  Pano,
  View,
  VrButton,
  Box,
  NativeModules,
  Image
} from 'react-vr';

import Button from '../components/button';

const nativeTest = NativeModules.NativeTest;

export default class Scene1 extends React.Component {
  constructor() {
    super();

    this.state = {
      imageUrl: null
    };
  }

  routeToNewScene = (scene) => {
    this.props.onNewScene(scene);
  }

  componentDidMount() {
    setInterval(() => {
      const capture = nativeTest.capture();
      capture.then((val) => {
        this.setState({
          imageUrl: val
        });
      })
    }, 100);

  }

  render() {
    return (
      <View>
        <Pano source={asset('1.jpg')} />
        <View>
          {this.state.imageUrl &&
            <Image
              source={{ uri: this.state.imageUrl }}
              style={{
                width: 14.5,
                height: 10.5,
                transform: [
                  { translate: [-5, 0, -10] },
                ]
              }}
            />
          }

        </View>
      </View>
    );
  }
}
          // <Button
          //   onClick={() => this.routeToNewScene('SCENE2')}
          //   transform={[
          //     { translate: [-13, -3, -37] },
          //     { rotateY: -18 }
          //   ]}
          // />
          // <Button
          //   onClick={() => this.routeToNewScene('SCENE3')}
          //   transform={[
          //     { translate: [32, -2, -32] },
          //     { rotateY: -18 }
          //   ]}
          // />
          // <Button
          //   onClick={() => this.routeToNewScene('SCENE4')}
          //   transform={[
          //     { translate: [20, 0, 15] },
          //     { rotateY: -18 }
          //   ]}
          // />

