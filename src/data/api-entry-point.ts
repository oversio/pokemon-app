import { LIMIT_PER_PAGE } from "@/constants";

export const ApiEntryPoint = {
  getList: (page: number = 1, size: number = LIMIT_PER_PAGE) => {
    return `/pokemon?limit=${size}&offset=${(page - 1) * size}`;
  },
  getItem: (name: string) => {
    return `/pokemon/${name}`;
  },
};
