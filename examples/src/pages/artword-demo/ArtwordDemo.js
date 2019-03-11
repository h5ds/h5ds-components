import React, { Component } from 'react';

import { Artword } from '../../h5ds-components';

export class ArtwordDemo extends Component {
  render() {
    const types = [
      { type: '3d', name: '3D', colors: ['#ffab00', '#67490d'] },
      { type: 'kaTong', name: '卡通', colors: ['#4e1515'] },
      { type: 'jiaXin', name: '夹心', colors: ['#bf2929', '#fff'] },
      { type: 'yinYing', name: '阴影', colors: ['#3c9df3', '#12e686'] },
      { type: 'niHong', name: '霓虹', colors: ['#f33c3c'] },
      { type: 'border', name: '边框', colors: ['#fff', '#3c5ef3'] },
      { type: 'cuoJue', name: '错觉', colors: ['#000', '#ff1dff', '#4affff'] },
      { type: 'jianBian', name: '渐变', colors: ['#fff', '#1d24ff', '#00efff'] },
      { type: 'qieGe', name: '切割', colors: ['#9075ff', '#e227b1'] },
      { type: 'fire', name: '火焰', colors: ['#F00'] },
      { type: 'snow', name: '冰雪', colors: ['#9dffff', '#98e7ff'] },
      { type: 'louKong', name: '镂空', colors: ['#ff7c7c', '#de0000'] },
    ];
    return (
      <div>
        {types.map(d => {
          return (
            <div style={{ margin: 20 }} key={d.type}>
              <Artword {...d} style={{ fontSize: 42, fontWeight: 'bolder' }}>
                {d.name}艺术字效果
              </Artword>
            </div>
          );
        })}
      </div>
    );
  }
}
