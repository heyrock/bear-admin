import React from 'react';
import moment from 'moment';
import { Card, Row, Col, TimePicker, Button } from 'antd';

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledHours() {
  const hours = range(0, 60);
  hours.splice(20, 4);
  return hours;
}

function disabledMinutes(h) {
  if (h === 20) {
    return range(0, 31);
  } else if (h === 23) {
    return range(30, 60);
  }
  return [];
}

class TimePickerDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="基本">
              <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="三种大小">
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />{' '}
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />{' '}
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />{' '}
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="禁用">
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="选择时分">
              <TimePicker defaultValue={moment('12:08', 'HH:mm')} format={'HH:mm'} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="禁止选项">
              <TimePicker
                disabledHours={disabledHours}
                disabledMinutes={disabledMinutes}
                placeholder="Just Disabled"
              />
              {' '}
              <TimePicker
                disabledHours={disabledHours}
                disabledMinutes={disabledMinutes}
                hideDisabledOptions
                placeholder="Hide Directly"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="附加内容">
              <Demo1 />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="12 小时制">
              <TimePicker use12Hours />{' '}
              <TimePicker use12Hours format="h:mm:ss A" />{' '}
              <TimePicker use12Hours format="h:mm a" />
            </Card>
          </Col>
          <Col span={8}>
          </Col>
          <Col span={8}>
          </Col>
        </Row>
      </div >
    )
  }
}


class Demo1 extends React.Component {
  state = { open: false };

  handleOpenChange = (open) => {
    this.setState({ open });
  }

  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <TimePicker
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        addon={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            Ok
          </Button>
        )}
      />
    );
  }
}


export default TimePickerDemo;
