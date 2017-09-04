import React from 'react';
import { Row, Col, Card, message } from 'antd';
import ReactEcharts from 'echarts-for-react';
import * as airportConfig from './airportConfig';

require('echarts/map/js/china.js');

class ChartsCard extends React.Component {

  onChartClick = () => {
    message.info('chart click');
  }

  render() {

    const { chartscard } = this.props;

    const onEvents = {
      click: this.onChartClick
    }

    const reStyle = {
      width: '100%',
      height: '220px'
    }

    return (
        <div>
        <Row gutter={16} style={{ marginTop: 20 }}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card
              bordered={false}
              noHovering>
              <ReactEcharts
                option={chartscard.sdoption}
                style={reStyle} />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card
              bordered={false}
              noHovering>
              <ReactEcharts
                option={chartscard.eeoption}
                onEvents={onEvents}
                style={reStyle} />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
            <Col>
            <Card
              bordered={false}
              noHovering>
              <ReactEcharts
                option={airportConfig.getOption}
                style={{height: '600px', width: '100%'}} />
            </Card>
            </Col>
        </Row>
        </div>
    );
  }
}

ChartsCard.propTypes = {};

export default ChartsCard;
