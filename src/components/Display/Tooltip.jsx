import React from 'react';
import { Card, Row, Col, Tooltip, Button } from 'antd';
const text = <span>prompt text</span>;
class TooltipDemo extends React.Component {

  render() {
    const btnStyle = {
      width: 53.61
    }
    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="基本">
              <Tooltip title={"Prompt Text"}>
                <span>Tooltip will show when mouse enter.</span>
              </Tooltip>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="箭头指向">
              <Tooltip placement="topLeft" title="Prompt Text">
                <Button>边缘对齐</Button>
              </Tooltip>{' '}
              <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
                <Button>箭头指向中心</Button>
              </Tooltip>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="位置">
              <div>
                <div style={{ marginLeft: 60 }}>
                  <Tooltip placement="topLeft" title={text}>
                    <Button style={btnStyle}>TL</Button>
                  </Tooltip>
                  <Tooltip placement="top" title={text}>
                    <Button style={btnStyle}>Top</Button>
                  </Tooltip>
                  <Tooltip placement="topRight" title={text}>
                    <Button style={btnStyle}>TR</Button>
                  </Tooltip>
                </div>
                <div style={{ width: 60, float: 'left' }}>
                  <Tooltip placement="leftTop" title={text}>
                    <Button style={btnStyle}>LT</Button>
                  </Tooltip>
                  <Tooltip placement="left" title={text}>
                    <Button style={btnStyle}>Left</Button>
                  </Tooltip>
                  <Tooltip placement="leftBottom" title={text}>
                    <Button style={btnStyle}>LB</Button>
                  </Tooltip>
                </div>
                <div style={{ width: 60, marginLeft: 270 }}>
                  <Tooltip placement="rightTop" title={text}>
                    <Button style={btnStyle}>RT</Button>
                  </Tooltip>
                  <Tooltip placement="right" title={text}>
                    <Button style={btnStyle}>Right</Button>
                  </Tooltip>
                  <Tooltip placement="rightBottom" title={text}>
                    <Button style={btnStyle}>RB</Button>
                  </Tooltip>
                </div>
                <div style={{ marginLeft: 60, clear: 'both' }}>
                  <Tooltip placement="bottomLeft" title={text}>
                    <Button style={btnStyle}>BL</Button>
                  </Tooltip>
                  <Tooltip placement="bottom" title={text}>
                    <Button>Bottom</Button>
                  </Tooltip>
                  <Tooltip placement="bottomRight" title={text}>
                    <Button style={btnStyle}>BR</Button>
                  </Tooltip>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default TooltipDemo;
