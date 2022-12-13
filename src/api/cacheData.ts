import request from "@/utils/request";

export interface Params {
  stage: string;
  design_id: string;
  client: string;
  level: string;
  tool_type: string;
}
// params: Params;
export async function getTableData() {
  return request.get(
    `/BimToolApi/calc/biz/client/cache?stage=dev&design_id=3FO4M5RYATPC&client=STRUCT`,
  );
}

