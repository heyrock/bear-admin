import React from 'react';
import { Row, Col, Card, Icon } from 'antd';
import CountUp from 'react-countup';
import './Card.less';

class CountCard extends React.Component {

  render() {
    const { countcard } = this.props;

    return (
      <div>
        <Row gutter={16}>
          {
            countcard.map((v, k) => {
              return (
                <Col xs={24} sm={24} md={12} lg={6} xl={6} key={k}>
                  <Card
                    className='countCard'
                    bordered={false}
                    noHovering>
                    <Icon className='iconWarp' style={{ color: v.color }} type={v.icon} />
                    <div className='content'>
                      <p className='title'>{v.title || ''}</p>
                      <p className='number'>
                        <CountUp
                          start={0}
                          end={v.number}
                          duration={2.75}
                          useEasing
                          useGrouping
                          separator=","
                        />
                      </p>
                    </div>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </div>
    );
  }
}

CountCard.propTypes = {};

export default CountCard;
