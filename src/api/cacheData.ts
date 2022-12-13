import request from "@/utils/request";

export interface Params {
  stage: string;
  design_id: string;
  client: string;
  level: string;
  tool_type: string;
}

export async function getTableData(params: Params) {
  return request.get(
    `/BimToolApi/calc/biz/client/cache?stage=dev&design_id=3FO4M5RYATPC&client=STRUCT`,
  );
}

