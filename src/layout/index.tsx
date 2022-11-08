import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { items } from './config';

const { Header, Content, Sider } = Layout;

interface Props {
  children: React.ReactNode;
}

const SLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

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
        <Header className="p-0 " />
        <Content className="mx-4 max-h-full overflow-hidden">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SLayout;
