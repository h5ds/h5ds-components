import './style.less';

import React, { PureComponent } from 'react';

export class Artword extends PureComponent {
  render() {
    const { type, colors = ['#000'], style = {} } = this.props;
    const cName = ['h5ds-artword', 'h5ds-artword-' + type];

    const upStyle = {};
    const downStyle = {};
    let otherDom = null;
    switch (type) {
      case 'border':
        upStyle.color = colors[0];
        upStyle.WebkitTextFillColor = `10px ${colors[0]}`;
        downStyle.WebkitTextStroke = `10px ${colors[1]}`;
        break;
      case '3d':
        upStyle.color = colors[0];
        upStyle.WebkitTextFillColor = `10px ${colors[0]}`;
        downStyle.textShadow = `0px 1px 0px ${colors[1]}, 0px 2px 0px ${colors[1]}, 0px 3px 0px ${
          colors[1]
        }, 0px 4px 0px ${colors[1]}, 0px 5px 0px ${colors[1]}, 0px 6px 0px ${colors[1]}, 0px 7px 0px ${
          colors[1]
        }, 0px 8px 7px ${colors[1]}`;
        break;
      case 'kaTong':
        upStyle.color = colors[0];
        upStyle.background = `url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAAHklEQVQImWNkYGBgYGD4//8/A5wF5SBYyAr+//8PAPOCFO0Q2zq7AAAAAElFTkSuQmCC) repeat`;
        upStyle.textShadow = `5px -5px ${colors[0]}, 4px -4px white`;
        upStyle.WebkitTextFillColor = `transparent`;
        upStyle.WebkitBackgroundClip = `text`;
        downStyle.opacity = 0;
        break;
      case 'jiaXin':
        upStyle.color = colors[0];
        upStyle.WebkitTextFillColor = `10px ${colors[0]}`;
        downStyle.WebkitTextStroke = `10px ${colors[1]}`;
        otherDom = (
          <div
            style={{
              zIndex: 99,
              WebkitTextStroke: `14px ${colors[0]}`
            }}
            className="h5ds-artword-up"
          >
            {this.props.children}
          </div>
        );
        break;
      case 'yinYing':
        upStyle.color = colors[0];
        upStyle.textShadow = `0px 5px 5px ${colors[1]}`;
        downStyle.opacity = 0;
        break;
      case 'niHong':
        upStyle.WebkitTextStroke = `1px ${colors[0]}`;
        upStyle.color = 'transparent';
        downStyle.color = 'transparent';
        downStyle.textShadow = `0px 0px 10px ${colors[0]}`;
        break;
      case 'cuoJue':
        upStyle.left = 0;
        upStyle.WebkitBackgroundClip = 'text';
        upStyle.WebkitTextFillColor = 'transparent';
        upStyle.backgroundImage = `linear-gradient(0deg, ${colors[1]} 50%, rgba(255, 255, 255, 0) 50%)`;
        downStyle.left = -2;
        downStyle.WebkitBackgroundClip = 'text';
        downStyle.WebkitTextFillColor = 'transparent';
        downStyle.backgroundImage = `linear-gradient(0deg, ${colors[2]} 100%, rgba(255, 255, 255, 0) 50%)`;
        otherDom = (
          <div
            style={{
              zIndex: 201,
              left: 2,
              color: colors[0]
            }}
            className="h5ds-artword-up"
          >
            {this.props.children}
          </div>
        );
        break;
      case 'jianBian':
        upStyle.left = 0;
        upStyle.WebkitBackgroundClip = 'text';
        upStyle.WebkitTextFillColor = 'transparent';
        upStyle.backgroundImage = `linear-gradient(0deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`;
        downStyle.opacity = 0;
        break;
      case 'qieGe':
        upStyle.WebkitBackgroundClip = 'text';
        upStyle.WebkitTextFillColor = 'transparent';
        upStyle.backgroundImage = `linear-gradient(0deg, ${colors[0]} 50%, rgba(255, 255, 255, 0) 50%)`;
        downStyle.WebkitBackgroundClip = 'text';
        downStyle.WebkitTextFillColor = 'transparent';
        downStyle.backgroundImage = `linear-gradient(0deg, ${colors[1]} 100%, rgba(255, 255, 255, 0) 50%)`;
        break;
      case 'fire':
        upStyle.color = colors[0];
        downStyle.opacity = 0;
        break;
      case 'snow':
        upStyle.WebkitTextFillColor = colors[0];
        downStyle.color = '#fff';
        downStyle.textShadow = `${colors[1]} 0px 4px 4px`;
        downStyle.WebkitTextStroke = `3px ${colors[1]}`;
        otherDom = (
          <div
            style={{
              zIndex: 201,
              background: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAeCAYAAAARgF8NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOEJGMEM5MDMwRUYxMUU5OUU1QkJFMjJGQjU2M0JBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOEJGMEM5MTMwRUYxMUU5OUU1QkJFMjJGQjU2M0JBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM4QkYwQzhFMzBFRjExRTk5RTVCQkUyMkZCNTYzQkEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM4QkYwQzhGMzBFRjExRTk5RTVCQkUyMkZCNTYzQkEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PM6S9AAAAFlJREFUeNpi/P///1cGBgYuIP4FxGwMEABjf2MEKvjPgAcwMRAAowqGm4JveOTBCQbEwJVoGCl3AwtSImVAS7QQO9DSLIzDSLIVDOg6aRfU/9EDjXJHAgQYAOqPGQ3i3HYXAAAAAElFTkSuQmCC) repeat-x`,
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text'
            }}
            className="h5ds-artword-up"
          >
            {this.props.children}
          </div>
        );
        break;
      case 'louKong':
        upStyle.top = -4;
        upStyle.left = 4;
        upStyle.WebkitTextStroke = `1px ${colors[1]}`;
        upStyle.WebkitTextFillColor = `transparent`;
        downStyle.color = colors[0];
        break;
    }
    return (
      <div style={style} className={cName.join(' ')}>
        <div style={upStyle} className="h5ds-artword-up">
          {this.props.children}
        </div>
        <div style={downStyle} className="h5ds-artword-down">
          {this.props.children}
        </div>
        {otherDom}
      </div>
    );
  }
}
