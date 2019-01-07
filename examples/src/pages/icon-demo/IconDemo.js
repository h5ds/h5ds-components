import React, { Component } from 'react';
import { Icon } from '../../h5ds-components';

const icons = [
  'address-book',
  'address-book-o',
  'address-card',
  'address-card-o',
  'bandcamp',
  'bath',
  'bathtub',
  'drivers-license',
  'drivers-license-o',
  'eercast',
  'envelope-open',
  'envelope-open-o',
  'etsy',
  'free-code-camp',
  'grav',
  'handshake-o',
  'id-badge',
  'id-card',
  'id-card-o',
  'imdb',
  'linode',
  'meetup',
  'microchip',
  'podcast',
  'quora',
  'ravelry',
  's15',
  'shower',
  'snowflake-o',
  'superpowers',
  'telegram',
  'thermometer',
  'thermometer-0',
  'thermometer-1',
  'thermometer-2',
  'thermometer-3',
  'thermometer-4',
  'thermometer-empty',
  'thermometer-full',
  'thermometer-half',
  'thermometer-quarter',
  'thermometer-three-quarters',
  'times-rectangle',
  'times-rectangle-o',
  'user-circle',
  'user-circle-o',
  'user-o',
  'vcard',
  'vcard-o',
  'window-close',
  'window-close-o',
  'window-maximize',
  'window-minimize',
  'window-restore',
  'wpexplorer'
];

export class IconDemo extends Component {
  render() {
    return (
      <div>
        {icons.map(iconType => {
          return (
            <div key={iconType} style={{ display: 'inline-block', width: '80px', height: '80px' }}>
              <Icon type={iconType} style={{ fontSize: 50 }} />
            </div>
          );
        })}
      </div>
    );
  }
}
