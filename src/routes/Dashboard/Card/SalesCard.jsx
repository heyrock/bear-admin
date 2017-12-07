import React from 'react';
import classnames from 'classnames';
import { Row, Col, Card } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Card.less';

class SalesCard extends React.Component {

  render() {
    const { salescard } = this.props;
    
    return (
      <div>
        <Row>
          <Col span={24}>
            <Card bordered={false} bodyStyle={{
              padding: '24px 36px 24px 0',
            }}>
              <div className='sales'>
                <div className='title'>销售统计</div>
                <ResponsiveContainer minHeight={360}>
                  <LineChart data={salescard}>
                    <Legend verticalAlign="top"
                      content={prop => {
                        const { payload } = prop
                        return (<ul className={classnames({ ['legend']: true, clearfix: true })}>
                          {payload.map((item, key) => <li key={key}><span className={'radiusdot'} style={{ background: item.color }} />{item.value}</li>)}
                        </ul>)
                      }}
                    />
                    <XAxis dataKey="name" axisLine={{ stroke: '#e5e5e5', strokeWidth: 1 }} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <CartesianGrid vertical={false} stroke={'#e5e5e5'} strokeDasharray="3 3" />
                    <Tooltip
                      wrapperStyle={{ border: 'none', boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)' }}
                      content={content => {
                        const list = content.payload.map((item, key) => <li key={key} className='tipitem'><span className='radiusdot' style={{ background: item.color }} />{`${item.name}:${item.value}`}</li>)
                        return <div className='tooltip'><p className='tiptitle'>{content.label}</p><ul>{list}</ul></div>
                      }}
                    />
                    <Line type="monotone" dataKey="衬衫" stroke='#faaf76' strokeWidth={3} dot={{ fill: '#d897eb' }} activeDot={{ r: 5, strokeWidth: 0 }} />
                    <Line type="monotone" dataKey="T恤" stroke='#76cdd3' strokeWidth={3} dot={{ fill: '#f69899' }} activeDot={{ r: 5, strokeWidth: 0 }} />
                    <Line type="monotone" dataKey="卫衣" stroke='#f79992' strokeWidth={3} dot={{ fill: '#64ea91' }} activeDot={{ r: 5, strokeWidth: 0 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

SalesCard.propTypes = {};

export default SalesCard;
