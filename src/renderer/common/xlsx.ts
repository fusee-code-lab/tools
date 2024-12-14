import { preload } from "@youliso/electronic/render";

export const xlsxRead = <T = any>(filePath: string) => {
  return preload.invoke<{ name: string; data: T[][] }[]>('xlsx-read', filePath);
};