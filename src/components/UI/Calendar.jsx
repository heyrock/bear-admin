import React from 'react';
import { Card, Row, Col, Calendar, Alert, LocaleProvider } from 'antd';
import moment from 'moment';
import enUS from 'antd/lib/locale-provider/en_US';
import './Calendar.less';

class CalendarDemo extends React.Component {
  state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  }
  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  }
  onPanelChange = (value) => {
    this.setState({ value });
  }

  getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: '进行中的备忘事件' },
          { type: 'normal', content: '正常的备忘事件' },
        ]; break;
      case 10:
        listData = [
          { type: 'warning', content: '进行中的备忘事件' },
          { type: 'normal', content: '正常的备忘事件' },
          { type: 'error', content: '已过期的备忘事件' },
        ]; break;
      case 15:
        listData = [
          { type: 'warning', content: '进行中的备忘事件' },
          { type: 'normal', content: '正常的备忘事件事件事件事件' },
          { type: 'error', content: '已过期的备忘事件' },
          { type: 'error', content: '已过期的备忘事件' },
          { type: 'error', content: '已过期的备忘事件' },
          { type: 'error', content: '已过期的备忘事件' },
        ]; break;
      default:
    }
    return listData || [];
  }

  dateCellRender = (value) => {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {
          listData.map(item => (
            <li key={item.content}>
              <span className={`event-${item.type}`}>●</span>
              {item.content}
            </li>
          ))
        }
      </ul>
    );
  }

  getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  }

  monthCellRender = (value) => {
    const num = this.getMonthData(value);
    return num ? <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div> : null;
  }
  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card noHovering title="基本" extra="一个通用的日历面板，支持年/月切换">
              <Calendar />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card noHovering title="通知事项日历" extra="一个复杂的应用示例，用 dateCellRender 和 monthCellRender 函数来自定义需要渲染的数据">
              <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card noHovering title="选择功能" extra="一个通用的日历面板，支持年/月切换">
              <Alert message={`你选择的时间是： ${selectedValue && selectedValue.format('YYYY年MM月DD日')}`} />
              <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="卡片模式-中文">
              <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar fullscreen={false} />
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="卡片模式-English">
              <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <LocaleProvider locale={enUS}>
                  <EnglishCalen />
                </LocaleProvider>
              </div>
            </Card>
          </Col>
          <Col span={8}>
          </Col>
        </Row>
      </div >
    )
  }
}

const EnglishCalen = () => (
  <div>
    <Calendar fullscreen={false} />
  </div>
);


export default CalendarDemo;
