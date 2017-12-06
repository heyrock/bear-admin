/** 面包屑 */
import React from 'react';
import { Breadcrumb, Icon } from 'antd';

const BearBeard = ({ location }) => {
  const breads = [];
  location && location.pathname ? breads.push({name: location.pathname}) : '';

  return (
    <div style={{ padding: '10px 25px 0px 25px', letterSpacing: '3px' }}>
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
