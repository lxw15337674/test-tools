import { Avatar, Layout, Menu, MenuProps, notification } from 'antd';
import router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { items } from './config';
import { queryUserLogout } from '@/api/user';
import { useAuth } from '@/layout/useAuth';
import { useAppSelector } from '@/store';
import { deleteAllCookies } from '@/utils/cookie';
const { Header, Content, Sider } = Layout;

interface Props {
  children: React.ReactNode;
}

const SLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  useAuth();
  const user = useAppSelector((store) => store.user);
  const router = useRouter();

  const logout = () => {
    queryUserLogout().then(() => {
      deleteAllCookies();
      const { origin, href } = window.location;
      const encodeHref = encodeURIComponent(href);
      window.location.href = `https://kuauth.kujiale.com/loginpage?backurl=${encodeURIComponent(
        origin,
      )}/login.html&nexturlv2=${encodeHref}`;
    });
  };
  const topBarItems: MenuProps['items'] = [
    {
      label: (
        <span>
          <Avatar src={user.avatar} />
          <span className="ml-3">{user.name}</span>
        </span>
      ),
      key: 'avatar',
    },
    {
      label: (
        <div className="h-4 py-4 leading-0" onClick={logout}>
          退出登录
        </div>
      ),
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
        <Content className="mx-4 max-h-full overflow-auto">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SLayout;
