import React from 'react';
import { Card, Row, Col, Alert } from 'antd';

class AlertDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="基本">
              <Alert message="成功提示" type="success" />
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="自定义关闭">
              <Alert message="Warning Text" type="warning" closeText="Close Now" />
            </Card>

          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="可关闭的警告提示">
              <Alert message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
                type="warning"
                closable
              />
              <br />
              <Alert message="Error Text"
                description="Error Description Error Description Error Description Error Description Error Description Error Description"
                type="error"
                closable
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="四种样式" extra="共有四种样式 success、info、warning、error">
              <Alert message="Success Text" type="success" /><br />
              <Alert message="Info Text" type="info" /><br />
              <Alert message="Warning Text" type="warning" /><br />
              <Alert message="Error Text" type="error" />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="含有辅助性文字介绍">
              <Alert
                message="Success Text"
                description="Success Description Success Description Success Description"
                type="success"
              /><br />
              <Alert
                message="Info Text"
                description="Info Description Info Description Info Description Info Description"
                type="info"
              /><br />
              <Alert
                message="Warning Text"
                description="Warning Description Warning Description Warning Description Warning Description"
                type="warning"
              /><br />
              <Alert
                message="Error Text"
                description="Error Description Error Description Error Description Error Description"
                type="error"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="图标">
              <Alert message="Success Tips" type="success" showIcon /><br />
              <Alert message="Informational Notes" type="info" showIcon /><br />
              <Alert message="Warning" type="warning" showIcon /><br />
              <Alert message="Error" type="error" showIcon /><br />
              <Alert
                message="success tips"
                description="Detailed description and advices about successful copywriting."
                type="success"
                showIcon
              /><br />
              <Alert
                message="Informational Notes"
                description="Additional description and informations about copywriting."
                type="info"
                showIcon
              /><br />
              <Alert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
              /><br />
              <Alert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="顶部公告">
              <Alert message="Warning text" banner />
              <br />
              <Alert message="Very long warning text warning text text text text text text text" banner closable />
              <br />
              <Alert showIcon={false} message="Warning text without icon" banner />
              <br />
              <Alert type="error" message="Error text" banner />
            </Card>
          </Col>
          <Col span={12}>

          </Col>
        </Row>
      </div >
    )
  }
}


export default AlertDemo;
