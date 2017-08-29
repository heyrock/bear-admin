import React from 'react';
import { Card, Row, Col, Icon } from 'antd';
import './Icon.less';

class IconDemo extends React.Component {
  static defaultProps = {
    icons: [],
    svgIcons: []
  }

  icons = [
    'step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrows-alt', 'down', 'up', 'left', 'right', 'caret-up', 'caret-down', 'caret-left', 'caret-right', 'up-circle', 'down-circle', 'left-circle', 'right-circle', 'up-circle-o', 'down-circle-o', 'right-circle-o', 'left-circle-o', 'double-right', 'double-left', 'verticle-left', 'verticle-right', 'forward', 'backward', 'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'play-circle', 'play-circle-o', 'up-square', 'down-square', 'left-square', 'right-square', 'up-square-o', 'down-square-o', 'left-square-o', 'right-square-o', 'login', 'logout', 'menu-fold', 'menu-unfold',
    'question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle', 'pause', 'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle', 'plus-square', 'plus-square-o', 'minus-square', 'minus-square-o', 'info', 'info-circle-o', 'info-circle', 'exclamation', 'exclamation-circle-o', 'exclamation-circle', 'close', 'close-circle', 'close-circle-o', 'close-square', 'close-square-o', 'check', 'check-circle', 'check-circle-o', 'check-square', 'check-square-o', 'clock-circle-o', 'clock-circle',
    'android', 'android-o', 'apple', 'apple-o', 'windows', 'windows-o', 'ie', 'chrome', 'github', 'aliwangwang', 'aliwangwang-o', 'dingding', 'dingding-o',
    'lock', 'unlock', 'area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'code-o', 'copy', 'credit-card', 'delete', 'desktop', 'download', 'edit', 'ellipsis', 'file', 'file-text', 'file-unknown', 'file-pdf', 'file-excel', 'file-jpg', 'file-ppt', 'file-add', 'folder', 'folder-open', 'folder-add', 'hdd', 'frown', 'frown-o', 'meh', 'meh-o', 'smile', 'smile-o', 'inbox', 'laptop', 'appstore-o', 'appstore', 'line-chart', 'link', 'mail', 'mobile', 'notification', 'paper-clip', 'picture', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart', 'tablet', 'tag', 'tag-o', 'tags', 'tags-o', 'to-top', 'upload', 'user', 'video-camera', 'home', 'loading', 'loading-3-quarters', 'cloud-upload-o', 'cloud-download-o', 'cloud-upload', 'cloud-o', 'star-o', 'star', 'heart-o', 'heart', 'environment', 'environment-o', 'eye', 'eye-o', 'camera', 'camera-o', 'save', 'team', 'solution', 'phone', 'filter', 'exception', 'export', 'customer-service', 'qrcode', 'scan', 'like', 'like-o', 'dislike', 'dislike-o', 'message', 'pay-circle', 'pay-circle-o', 'calculator', 'pushpin', 'pushpin-o', 'bulb', 'select', 'switcher', 'rocket', 'bell', 'disconnect', 'database', 'compass', 'barcode', 'hourglass', 'key', 'flag', 'layout', 'printer', 'sound', 'usb', 'skin', 'tool', 'sync', 'wifi', 'car', 'schedule', 'user-add', 'user-delete', 'usergroup-add', 'usergroup-delete', 'man', 'woman', 'shop', 'gift', 'idcard', 'medicine-box', 'red-envelope', 'coffee', 'copyright', 'trademark', 'safety', 'wallet', 'bank', 'trophy', 'contacts', 'global', 'shake', 'api', 'fork'
  ];

  svgIcons = [
    'unknown', 'sun', 'cat', 'smog', 'fog', 'dust','cloudy','partly-cloudy','medium-rain','light-rain','thunderstorms','sleet','monkey','pelican','penguin','octopus',
    'siberian_husky','squirrel','toucan','tiger','turtle','Expression_1','Expression_2','Expression_3','Expression_5','Expression_6','Expression_7','Expression_8','Expression_10','Expression_15','Expression_16','Expression_19','Expression_20','Expression_21',
    'Expression_22','Expression_23','Expression_25','Expression_28','Expression_29','Expression_30','Apple','Asparagus','Banana','Bacon','Beet','Beer','Bread','Cherry','Cheese','Expression_35',
  ]

  render() {

    return (
      <div>
        <Row>
          <Col span={24}>
            <Card noHovering title="Antd Icons">
              <ul className="icon-list">
                {
                  this.icons.map((type, k) =>
                    <li key={k}><Icon type={type} />
                      <span className="ico-name">{type}</span>
                    </li>)
                }
              </ul>
            </Card >
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col span={24}>
            <Card noHovering title="其他 Icons">
              <ul className="icon-list">
                {
                  this.svgIcons.map((type, k) =>
                    <li key={k}>
                      <svg className="ico" aria-hidden="true">
                        <use xlinkHref={`#anticon-${type}`}></use>
                      </svg>
                      <div className="ico-name">{type}</div>
                    </li>)
                }
              </ul>
            </Card >
          </Col>
        </Row>
      </div >
    )
  }
}


export default IconDemo;
