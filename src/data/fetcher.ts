import { AxiosResponse } from "axios";
import { ZodType, ZodTypeDef } from "zod";

import { restClient } from "./rest-client";

export function fetcher<TData, TApiItem, Def extends ZodTypeDef = ZodTypeDef>(
  url: string,
  responseTypeAndTransformer?: ZodType<TData, Def, TApiItem>,
) {
  return restClient
    .get<unknown, AxiosResponse<TData, undefined>, undefined>(url)
    .then(res => (responseTypeAndTransformer ? responseTypeAndTransformer.parse(res.data) : res.data));
}
