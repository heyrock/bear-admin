import React from 'react';
import { Col, Row, Card, Input, Button, Icon } from 'antd';
import './Profile.less';
const { TextArea } = Input;

const profileImg = require('../../assets/img/profile.jpg');
const postImg = require('../../assets/img/post1.jpg');
const post2Img = require('../../assets/img/post2.jpeg');
const post3Img = require('../../assets/img/post3.jpeg');

const Profile = () => {

  return (
    <div>
      <Row>
        <Col xl={16} lg={16} md={16} sm={16} xs={24}>
          <div className="msgContent">
            <TextArea placeholder="What's on your mind?" autosize={{ minRows: 8, maxRows: 15 }} />
            <Row className="msgFooter">
              <Col span={16} className="msgFooterLeft">
                <Icon type="environment-o" />
                <Icon type="camera-o" />
                <Icon type="schedule" />
              </Col>
              <Col span={8}>
                <Button type="primary">发表</Button>
              </Col>
            </Row>
          </div>
          <Row gutter={40}>
            <Col span={12}>
              <Card noHovering bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src={postImg} />
                </div>
                <div className="custom-card">
                  <h3><Icon type="like-o" /><span>Like</span><span className="card-like">70+ 人喜欢</span></h3>
                  <p>坐热气球咯</p>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card noHovering bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src={post2Img} />
                </div>
                <div className="custom-card">
                  <h3><Icon type="like-o" /><span>Like</span><span className="card-like">130+ 人喜欢</span></h3>
                  <p>纽约的街头</p>
                </div>
              </Card>
            </Col>
          </Row>
          <Row gutter={40} style={{ marginTop: 20 }}>
            <Col span={12}>
              <Card noHovering bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src={post3Img} />
                </div>
                <div className="custom-card">
                  <h3><Icon type="like-o" /><span>Like</span><span className="card-like">30 人喜欢</span></h3>
                  <p>good view</p>
                </div>
              </Card>
            </Col>
            <Col span={12}>

            </Col>
          </Row>
        </Col>
        <Col xl={1} lg={1} md={1} sm={1} xs={24}></Col>
        <Col xl={7} lg={7} md={7} sm={7} xs={24}>
          <div className="profile">
            <div className="header">
              <img alt="avatar" src={profileImg} title="avatar" />
            </div>
            <div className="profileInfo">
              <h1>Marion Fleming</h1>
              <p>5261 Adelaide Ave</p>
              <p className="profileAbout">这里是一些个人简介，Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la...</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Profile;
