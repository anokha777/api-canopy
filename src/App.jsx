import { useState } from "react";
import { Layout, Menu, Spin, theme } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import {
  HeartFilled,
} from '@ant-design/icons';

import './App.css';
import sidebarData from '../api.json';
import { menuIcon } from "./utils/menu.jsx";
import { GET, POST } from "./utils/constants.js";
import axios from "axios";

function App() {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (menuParams) => {
    setIsLoading(true)
    if(menuParams?.method === GET) {
      axios.get(menuParams.url).then(res => {
        setData(res.data);
        setIsLoading(false);
      });
    } else if(menuParams?.method === POST) {
      axios.post(menuParams.url, menuParams.body).then(res => {
        setData(res.data);
        setIsLoading(false);
      });
    }

  }

  function getItem(label, key, icon, children, menuParams) {
    return { label, key, icon, children, onClick: () => handleMenuClick(menuParams) };
  }

  const menuItems = [];
  if(sidebarData && sidebarData.project.length > 0) {
    for(let i = 0; i < sidebarData?.project?.length; i++) {
      if(sidebarData?.project[i]?.subMenu.length === 1) {
        menuItems.push(getItem(sidebarData?.project[i]?.subMenu[0]?.name, sidebarData?.project[i]?.subMenu[0]?.name, menuIcon(sidebarData?.project[i]?.subMenu[0]?.icon), null,  sidebarData?.project[i]?.subMenu[0]));
      } else {
        let subMenuItem = [];  
        for(let j = 0; j < sidebarData?.project[i]?.subMenu?.length; j++) {
          subMenuItem.push(getItem(sidebarData?.project[i]?.subMenu[j]?.name, sidebarData?.project[i]?.subMenu[j]?.name, menuIcon(sidebarData?.project[i]?.subMenu[j]?.icon), null, sidebarData?.project[i]?.subMenu[j]))
        }
        menuItems.push(getItem(sidebarData?.project[i]?.name, sidebarData?.project[i]?.name, menuIcon(sidebarData?.project[i]?.icon), subMenuItem));
      }
    }
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={menuItems} />
        </Sider>
        {/* <Spin size="large" spinning={isLoading}> */}
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Spin size="large" spinning={isLoading}>
          <Content
            style={{
              margin: '1rem .5rem',
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          </Content>
          </Spin>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Sherwin Williams ©{new Date().getFullYear()} Created by <HeartFilled style={{color: 'red'}}/> Vishwanath Kandi
          </Footer>
        </Layout>
      {/* </Spin> */}
    </Layout>
  );
}

export default App
