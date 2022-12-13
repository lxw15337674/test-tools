import { Table } from 'antd';
import pagination from 'antd/lib/pagination';
import React from 'react';


const DataTable = ({ columns,data }) => {
   const dataSource = data?.map((item) => {
     return item.reduce((pre, cur, index) => {
       pre[columns[index].key] = cur;
       return pre;
     }, {});
   });
  return (
    <Table
      pagination={false}
      scroll={{ x: true, y: true }}
      bordered
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default DataTable;
