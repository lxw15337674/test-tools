import { getTableData, Params } from '@/api/cacheData';
import { useSetState } from 'ahooks';
import { Button, Col, Input, Row, Select, Tabs } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
const { Option } = Select;

const ENV = [
  {
    value: 'dev',
    label: 'dev',
  },
  {
    value: 'prod_test',
    label: 'prod_test',
  },
  {
    value: 'prod',
    label: 'prod',
  },
];
const BUSINESS = [
  {
    value: 'STRUCT',
    label: 'STRUCT',
  },
  {
    value: 'DECO',
    label: 'DECO',
  },
  {
    value: 'SOFT',
    label: 'SOFT',
  },
  {
    value: 'LIGHTING',
    label: 'LIGHTING',
  },
  {
    value: 'MEP',
    label: 'MEP',
  },
  {
    value: 'CUSTOM',
    label: 'CUSTOM',
  },
];

const CUSTOM_TYPE = [
  {
    value: '全屋定制',
    label: '全屋定制',
  },
  {
    value: '厨卫定制',
    label: '厨卫定制',
  },
];


function App() {
  const [params, setParams] = useSetState<Params>({
    stage: ENV[0]?.value || '',
    design_id: '',
    client: BUSINESS[0]?.value || '',
    level: '',
    tool_type: CUSTOM_TYPE[0]?.value || '',
  });
  const getData = () => {
    getTableData(params).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <Row>
        <Col span={4}>
          环境：
          <Select
            value={params.stage}
            onChange={(v) => setParams({ stage: v })}
            style={{ width: 150 }}
          >
            {ENV.map((item) => {
              return <Option value={item.value} key={item.label}>{item.label}</Option>;
            })}
          </Select>
        </Col>
        <Col span={4}>
          方案：
          <Input
            style={{ width: 150 }}
            value={params.design_id}
            onChange={(v) => setParams({ design_id: v.target.value })}
          />
        </Col>
        <Col span={4}>
          业务线：
          <Select
            value={params.client}
            onChange={(v) => setParams({ client: v })}
            style={{ width: 100 }}
          >
            {BUSINESS.map((item) => {
              return <Option value={item.value} key={item.value}>{item.label}</Option>;
            })}
          </Select>
        </Col>
        <Col span={4}>
          楼层：
          <Input
            style={{ width: 150 }}
            value={params.level}
            onChange={(v) => setParams({ level: v.target.value })}
          />
        </Col>
        <Col span={4}>
          定制类型：
          <Select
            value={params.tool_type}
            onChange={(v) => setParams({ tool_type: v })}
            style={{ width: 100 }}
          >
            {CUSTOM_TYPE.map((item) => {
              return <Option value={item.value}>{item.label}</Option>;
            })}
          </Select>
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={getData}>
            请求
          </Button>
        </Col>
      </Row>
      <Tabs>
        <Tabs.TabPane tab="项目 1" key="item-1">
          <Row>
            <Col span={12}>时间戳：</Col>
            <Col span={12}>时间</Col>
          </Row>
          <TextArea />
        </Tabs.TabPane>
        <Tabs.TabPane tab="项目 2" key="item-2">
          内容 2
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default App;
