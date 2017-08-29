import React from 'react';
import { Card, Row, Col, Checkbox, Button } from 'antd';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const plainGropOptions = ['Apple', 'Pear', 'Orange'];
const gropOptions = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

class CheckBoxDemo extends React.Component {
  state = {
    checked: true,
    disabled: false,
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  }
  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled });
  }
  onChange = (e) => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  }

  onGropChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }

  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="基本">
              <Checkbox>Checkbox</Checkbox>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="受控的 Checkbox">
              <p style={{ marginBottom: '20px' }}>
                <Checkbox
                  checked={this.state.checked}
                  disabled={this.state.disabled}
                  onChange={this.onChange}
                >
                  {label}
                </Checkbox>
              </p>
              <p>
                <Button
                  type="primary"
                  size="small"
                  onClick={this.toggleChecked}
                >
                  {!this.state.checked ? 'Check' : 'Uncheck'}
                </Button>
                <Button
                  style={{ marginLeft: '10px' }}
                  type="primary"
                  size="small"
                  onClick={this.toggleDisable}
                >
                  {!this.state.disabled ? 'Disable' : 'Enable'}
                </Button>
              </p>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="全选">
              <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                <Checkbox
                  indeterminate={this.state.indeterminate}
                  onChange={this.onCheckAllChange}
                  checked={this.state.checkAll}
                >
                  Check all
                </Checkbox>
              </div>
              <br />
              <CheckboxGroup options={plainGropOptions} value={this.state.checkedList} onChange={this.onGropChange} />
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="Checkbox 组">
              <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
              <br />
              <CheckboxGroup options={gropOptions} defaultValue={['Pear']} />
              <br />
              <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} />
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default CheckBoxDemo;
