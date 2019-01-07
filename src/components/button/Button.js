import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Button extends PureComponent {
  static propTypes = {
    htmlType: PropTypes.oneOf(['button', 'submit', 'reset'])
  };

  static defaultProps = {
    htmlType: 'button'
  };

  render() {
    return <button>{this.props.children}</button>;
  }
}
