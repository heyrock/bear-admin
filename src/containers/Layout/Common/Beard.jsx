/** 面包屑 */
import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class BearBeard extends Component {
  render() {
    return (
      <div style={{ height: '60px', padding: '0 25px', lineHeight: '60px', marginBottom: '-25px' }}>
        <Breadcrumb {...this.props} />
      </div>
    );
  }
}

export default BearBeard;
