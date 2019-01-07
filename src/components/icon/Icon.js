import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Icon extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    spin: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultProps = {
    spin: false,
    style: {}
  };

  render() {
    const { type, spin, style } = this.props;
    let iconClass = `fa fa-${type}`;
    if (spin) {
      iconClass = `fa-spin ${iconClass}`;
    }
    return <i className={iconClass} style={style} />;
  }
}
