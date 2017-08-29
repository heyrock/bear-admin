import React from 'react';
import { Button, Card, Row, Col, Switch, Icon } from 'antd';

class SwitchDemo extends React.Component {
  state = {
    disabled: true,
  }
  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={6}>
            <Card noHovering title="基本">
              <Switch defaultChecked={false} />
            </Card>
          </Col>
          <Col span={6}>
            <Card noHovering title="不可用">
              <Switch disabled={this.state.disabled} />
              <br />
              <Button type="primary" onClick={this.toggle}>Toggle disabled</Button>
            </Card>
          </Col>
          <Col span={6}>
            <Card noHovering title="文字和图标">
              <Switch defaultChecked={true} checkedChildren="开" unCheckedChildren="关" />
              <br /><br />
              <Switch checkedChildren="1" unCheckedChildren="0" />
              <br /><br />
              <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
            </Card>
          </Col>
          <Col span={6}>
            <Card noHovering title="两种大小">
              <Switch />
              <br />
              <Switch size="small" />
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default SwitchDemo;
