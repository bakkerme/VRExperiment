import React, {PropTypes} from 'react';
import {
  VrButton,
  Box,
} from 'react-vr';

export default class Button extends React.Component {
  static propTypes = {
     transform: PropTypes.array,
     onClick: PropTypes.func
  }

  render() {
    return (
      <VrButton
        onClick={this.props.onClick}
        cursorVisibilitySlop={{ top: 3, bottom: 3, left: 3, right: 3 }}
        hitSlop={{ top: 3, bottom: 3, left: 3, right: 3 }}
        style={
          {
            width: 1,
            height: 1,
            transform: this.props.transform,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }
        }
      >
        <Box
          dimWidth={2}
          dimDepth={2}
          dimHeight={2}
          style={
            {
              color: 'green',
            }
          }
          wireframe
        />
      </VrButton>
    );
  }
}