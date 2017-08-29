import React from 'react';
import { Row, Col, Card, Icon } from 'antd';
import './Card.less';

class ImageCard extends React.Component {

  render() {
    const { imagecard } = this.props;

    return (
      <div>
        <Row gutter={32} className='showcase-2'>
          {
            imagecard && imagecard.map((v, k) => {
              return (
                <Col xs={12} sm={12} md={12} lg={8} xl={8} key={k}>
                  <Card
                    bordered={false}
                    noHovering>
                    <div className={'card-header'}>
                      <img src={require(`../../../assets/img/card-${v.image}.jpeg`)} alt="" />
                    </div>
                    <div className={'card-content'}>
                      <h4>{v.title}</h4>
                      <p>{v.desc}</p>
                    </div>
                    <div className={'card-footer'}>
                      <h4>{v.footerTitle}</h4>
                      <div className='position'>
                        <Icon type="environment" />{' '}{v.position}
                      </div>
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

ImageCard.propTypes = {};

export default ImageCard;
