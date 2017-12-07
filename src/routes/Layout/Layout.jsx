import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class LayoutDemo extends React.Component {
  render() {
    const head_footer = {
      background: '#7dbcea',
      color: '#fff'
    }

    const sider = {
      background: '#3ba0e9',
      color: '#fff',
      lineHeight: '120px'
    }

    const content = {
      background: 'rgba(16, 142, 233, 1)',
      color: '#fff',
      minHeight: '120px',
      lineHeight: '120px',
    }

    const footer = {
      lineHeight: 1.5
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <Layout>
          <Header style={head_footer}>Header</Header>
          <Content style={content}>Content</Content>
          <Footer style={Object.assign(head_footer, footer)}>Footer</Footer>
        </Layout>
        <br />
        <Layout>
          <Header style={head_footer}>Header</Header>
          <Layout>
            <Sider style={sider}>Sider</Sider>
            <Content style={content}>Content</Content>
          </Layout>
          <Footer style={Object.assign(head_footer, footer)}>Footer</Footer>
        </Layout>
        <br />
        <Layout>
          <Header style={head_footer}>Header</Header>
          <Layout>
            <Content style={content}>Content</Content>
            <Sider style={sider}>Sider</Sider>
          </Layout>
          <Footer style={Object.assign(head_footer, footer)}>Footer</Footer>
        </Layout>
        <br />
        <Layout>
          <Sider style={sider}>Sider</Sider>
          <Layout>
            <Header style={head_footer}>Header</Header>
            <Content style={content}>Content</Content>
            <Footer style={Object.assign(head_footer, footer)}>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}


export default LayoutDemo;
