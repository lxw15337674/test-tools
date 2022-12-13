import request from '@/utils/request';

export interface Params {
  stage: string;
  design_id: string;
  client: string;
  level: number;
  tool_type: number;
}
export async function getTableData(params: Params) {
  return request.get(`/BimToolApi/calc/biz/client/cache`, { params });
}
