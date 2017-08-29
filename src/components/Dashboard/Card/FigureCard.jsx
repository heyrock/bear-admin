import React from 'react';
import classnames from 'classnames';
import { Row, Col, Card, Icon } from 'antd';
import CountUp from 'react-countup';
import './Card.less';

class FigureCard extends React.Component {

  render() {
    const { figurecard } = this.props;

    return (
      <div>
        <Row gutter={16} className="showcase-1">
          {
            figurecard.map((v, k) => {
              return (
                <Col xs={24} sm={24} md={12} lg={6} xl={6} key={k}>
                  <Card
                    title={
                      <div>
                        <div className={classnames('card-header', { [`${v.color}`]: true })}>
                          <h4><Icon type={v.icon} /></h4>
                        </div>
                        <div className={'card-content'}>
                          <p className={'category'}>{v.title}</p>
                          <h3>
                            <CountUp
                              start={0}
                              end={v.number}
                              duration={2.75}
                              useEasing
                              useGrouping
                              separator=","
                            />
                          </h3>
                        </div>
                      </div>}
                    bordered={false}
                    noHovering>
                    <div className={'card-footer'}>
                      <Icon type={v.subIcon} />
                      {' '}{v.sub}
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

FigureCard.propTypes = {};

export default FigureCard;
