

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './FullModal.less';

export class FullModal extends Component {
  static propTypes = {
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    visible: PropTypes.bool,
    title: PropTypes.string,
    extra: PropTypes.element
  };

  constructor(props) {
    super(props);
    this.hostEl = document.createElement('div');
    document.body.appendChild(this.hostEl);
  }

  handleCloseClick = () => {
    this.props.onCancel();
  };

  componentWillUnmount() {
    document.body.removeChild(this.hostEl);
  }
  render() {
    const { show, title, className } = this.props;
    const cls = ['h5ds-modal'];
    if (show) {
      cls.push('h5ds-modal-show');
    }
    if (title) {
      cls.push('h5ds-modal-hastitle');
    }
    if (className) {
      cls.push(className);
    }
    return ReactDOM.createPortal(
      <div className={cls.join(' ')}>
        <a className="h5ds-modal-close" onClick={this.handleCloseClick}>
          &times;
        </a>
        {title ? (
          <div className="h5ds-modal-title">
            <span className="h5ds-modal-title-icon" />
            <h3>{title}</h3>
          </div>
        ) : null}
        <div className="h5ds-modal-content">{show ? this.props.children : null}</div>
      </div>,
      this.container
    );
  }
}
