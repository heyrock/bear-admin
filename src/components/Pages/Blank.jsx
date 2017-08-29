import React from 'react';

class Blank extends React.Component {

  render() {
    const style = {
      background: '#fff',
      padding: '24px',
      boxShadow: '4px 4px 20px 0 rgba(0,0,0,.01)',
      minHeight: 'calc(100vh - 190px)'
    }
    return (
      <div style={style}>
        空白页面
      </div>
    );
  }
}

export default Blank;
