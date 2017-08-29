import React from 'react';
import moment from 'moment';
import { Card, Row, Col, DatePicker, Radio } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

class DatePickerDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="基本">
              <DatePicker />
              <br /><br />
              <MonthPicker placeholder="选择月份" />
              <br /><br />
              <RangePicker />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="日期格式" extra="使用 format 属性，可以自定义日期显示格式">
              <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
              <br /><br />
              <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
              <br /><br />
              <RangePicker
                defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                format={dateFormat}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="禁用">
              <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
              <br /><br />
              <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
              <br /><br />
              <RangePicker
                defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
                disabled
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="日期时间选择">
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="选择时间"
              />
              <br /><br />
              <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                placeholder={['开始时间', '结束时间']}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="不可选择日期和时间">
              <Demo1 />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="额外的页脚">
              <DatePicker renderExtraFooter={() => '额外的页脚'} />{' '}
              <DatePicker renderExtraFooter={() => '额外的页脚'} showTime />
              <br /><br />
              <RangePicker renderExtraFooter={() => '额外的页脚'} />
              <br /><br />
              <RangePicker renderExtraFooter={() => '额外的页脚'} showTime />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="三种大小">
              <Demo2 />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="自定义日期范围选择">
              <Demo3 />
            </Card>
          </Col>
          <Col span={8}>
          </Col>
        </Row>
      </div >
    )
  }
}

class Demo1 extends React.Component {
  range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
  disabledDate = (current) => {
    // Can not select days before today and today
    return current && current.valueOf() < Date.now();
  }

  disabledDateTime = () => {
    return {
      disabledHours: () => this.range(0, 24).splice(4, 20),
      disabledMinutes: () => this.range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }

  disabledRangeTime = (_, type) => {
    if (type === 'start') {
      return {
        disabledHours: () => this.range(0, 60).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }
    return {
      disabledHours: () => this.range(0, 60).splice(20, 4),
      disabledMinutes: () => this.range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  }
  render() {
    return (
      <div>
        <DatePicker
          format="YYYY-MM-DD HH:mm:ss"
          disabledDate={this.disabledDate}
          disabledTime={this.disabledDateTime}
          showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
        />
        <br /><br />
        <MonthPicker disabledDate={this.disabledDate} placeholder="选择月份" />
        <br /><br />
        <RangePicker
          disabledDate={this.disabledDate}
          disabledTime={this.disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
          }}
          format="YYYY-MM-DD HH:mm:ss"
        />
      </div>
    )
  }
}

class Demo2 extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <DatePicker size={size} />
        <br /><br />
        <MonthPicker size={size} />
        <br /><br />
        <RangePicker size={size} />
      </div>
    );
  }
}

class Demo3 extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  onStartChange = (value) => {
    this.onChange('startValue', value);
  }

  onEndChange = (value) => {
    this.onChange('endValue', value);
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div>
        <DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
        {' '}
        <DatePicker
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
      </div>
    );
  }
}

export default DatePickerDemo;
