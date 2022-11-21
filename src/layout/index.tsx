import { Layout, Menu, MenuProps, notification } from 'antd';
import router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { items } from './config';
import { queryUserLogout } from '@/api/user';
const { Header, Content, Sider } = Layout;

interface Props {
  children: React.ReactNode;
}

const SLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const router = useRouter();
  const logout = () => {
    queryUserLogout().then(()=>{
    const { origin } = window.location;
    window.location.href = `https://kuauth.kujiale.com/loginpage?backurl=${origin}`;
    })
  };
  const topBarItems: MenuProps['items'] = [
    {
      label: <div className="h-4 py-4 leading-0">123</div>,
      key: 'item-1',
    },
    {
      label: <div className="h-4 py-4 leading-0" onClick={logout}>退出登录</div>,
      key: 'item-2',
    },
  ];

  return (
    <Layout className="h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          onClick={(e) => {
            router.push(e.key);
          }}
        />
      </Sider>
      <Layout>
        <Header className="p-2 border-inherit	border-b-2 mb-2 h-12 leading-4 ">
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            className="float-right"
            items={topBarItems}
          />
        </Header>
        <Content className="mx-4 max-h-full overflow-hidden">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SLayout;
