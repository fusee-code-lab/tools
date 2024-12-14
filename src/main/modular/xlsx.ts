import { preload } from '@youliso/electronic/main';
import xlsx, { WorkSheet } from 'node-xlsx';
import { writeFile } from 'node:fs/promises';


export const xlsxRead = (filePath: string) => {
  return xlsx.parse(filePath);
};


export const xlsxWrite = async <T>(data: WorkSheet<T>[], filePath: string) => {
  const buffer = xlsx.build(data);
  await writeFile(filePath, buffer, { encoding: 'binary' });
};


export const xlsxOn = () => {
  // 解析
  preload.handle('xlsx-read', (_, path) => xlsxRead(path));
}