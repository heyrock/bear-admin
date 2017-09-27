/** 面包屑 */
import React from 'react';
import { Breadcrumb, Icon } from 'antd';

const BearBeard = ({ location }) => {
  const breads = [];
  location && location.pathname ? breads.push({name: location.pathname}) : '';

  return (
    <div style={{ height: '60px', padding: '0 25px', lineHeight: '60px', marginBottom: '-25px' }}>
      <span style={{ float: 'left' }}>
        <Icon type='home' />
      </span>
      <Breadcrumb>
        {breads.map((item, key) => { return <Breadcrumb.Item key={key}>{item.name && item.name.toUpperCase()}</Breadcrumb.Item>})}
      </Breadcrumb>
    </div>
  )
}

export default BearBeard;
