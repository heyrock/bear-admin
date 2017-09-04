import React from 'react';
import { Card, Row, Col, Collapse } from 'antd';
const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class CollapseDemo extends React.Component {

  render() {
    const customPanelStyle = {
      background: '#f7f7f7',
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
    };

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="基本">
              <Collapse>
                <Panel header="面板标题 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="面板标题 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="面板标题 3" key="3" disabled>
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="手风琴">
              <Collapse accordion>
                <Panel header={'面板标题 1'} key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header={'面板标题 2'} key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header={'面板标题 3'} key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="面板嵌套">
              <Collapse>
                <Panel header={'面板标题 1'} key="1">
                  <Collapse defaultActiveKey="1">
                    <Panel header={'This is panel nest panel'} key="1">
                      <p>{text}</p>
                    </Panel>
                  </Collapse>
                </Panel>
                <Panel header={'面板标题 2'} key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header={'面板标题 3'} key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="简洁风格">
              <Collapse bordered={false}>
                <Panel header="面板标题 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="面板标题 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="面板标题 3" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card noHovering title="自定义风格">
              <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="面板标题 1" key="1" style={customPanelStyle}>
                  <p>{text}</p>
                </Panel>
                <Panel header="面板标题 2" key="2" style={customPanelStyle}>
                  <p>{text}</p>
                </Panel>
                <Panel header="面板标题 3" key="3" style={customPanelStyle}>
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default CollapseDemo;
