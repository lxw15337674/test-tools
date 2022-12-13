import { getTableData, Params } from '@/api/cacheData';
import { Button, Col, Input, Row, Select, Tabs, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useObject, usePromise } from '@qunhe/budget-hooks';
import React from 'react';
import DataTable from '@/components/Table';
import { getTime } from '@/utils/time';
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
    value: 0,
    label: '厨卫',
  },
  {
    value: 1,
    label: '全屋',
  },
  {
    value: 2,
    label: '门窗',
  },
];

function App() {
  const [params, setParams] = useObject<Params>({
    stage: ENV[0]?.value || '',
    design_id: '3FO4M5RYATPC',
    client: BUSINESS[0]?.value || '',
    level: 1,
    tool_type: CUSTOM_TYPE[0]?.value || 0,
  });

  const { data, run } = usePromise<any>(() => getTableData(params));

  return (
    <div>
      <Row >
        <Col span={4}>
          环境：
          <Select
            value={params.stage}
            onChange={(v) => setParams({ stage: v })}
            style={{ width: 150 }}
          >
            {ENV.map((item) => {
              return (
                <Option value={item.value} key={item.label}>
                  {item.label}
                </Option>
              );
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
              return (
                <Option value={item.value} key={item.value}>
                  {item.label}
                </Option>
              );
            })}
          </Select>
        </Col>
        <Col span={4}>
          楼层：
          <Input
            style={{ width: 150 }}
            value={params.level}
            onChange={(v) => setParams({ level: Number(v.target.value) })}
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
              return (
                <Option value={item.value} key={item.value}>
                  {item.label}
                </Option>
              );
            })}
          </Select>
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={run}>
            请求
          </Button>
        </Col>
      </Row>
      <br/>
      <Tabs>
        {data?.map((item) => {
          return Object.entries(item.data).map(([key, cacheData]) => {
            return (
              <Tabs.TabPane tab={item.name} key={key}>
                <Typography.Title level={5}>时间</Typography.Title>
                <Row>
                  <Col span={12}>时间戳：{item.timestamp}</Col>
                  <Col span={12}>时间: {getTime(item.timestamp)}</Col>
                </Row>

                <Typography.Title level={4}>请求参数</Typography.Title>
                <Input.TextArea
                  value={JSON.stringify(item.requestParams, null, 4)}
                  disabled
                  autoSize
                />
                <Typography.Title level={4}>缓存数据</Typography.Title>
                {cacheData.map((tableData) => {
                  const column = tableData?.columns?.map((item) => {
                    return {
                      title: item?.name,
                      dataIndex: item?.name,
                      key: item?.name,
                      width: 100,
                    };
                  });
                  return (
                    <Row key={tableData.name}>
                      <Typography.Title level={5}>
                        {tableData.name}
                      </Typography.Title>
                      <DataTable data={tableData.data} columns={column} />
                    </Row>
                  );
                })}
              </Tabs.TabPane>
            );
          });
        })}
      </Tabs>
    </div>
  );
}

export default App;
