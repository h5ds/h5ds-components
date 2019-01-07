import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Button extends PureComponent {
  render() {
    return <button>{this.props.children}</button>;
  }
}
