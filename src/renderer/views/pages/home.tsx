import { type RouteSectionProps } from '@solidjs/router';
import { windowShow } from '@youliso/electronic/render';
import { createSignal, Index, onMount, Show } from 'solid-js';
import { containerStyle } from '../styles';
import Button from '../components/basis/button';
import { showOpenDialog } from '@/renderer/common/dialog';
import { xlsxRead } from '@/renderer/common/xlsx';
import { css } from '@emotion/css';

const style = css`
  overflow: hidden;
  overflow-y: auto;
  height: calc(100% - 25px);
`;

const [xlsxData, setXlsxData] = createSignal<{ name: string; data: any[][] }[]>([]);

const Dialog = () => {
  const func = async () => {
    const res = await showOpenDialog({
      properties: ['openFile'],
      filters: [{ name: 'All Files', extensions: ['xlsx'] }]
    });
    if (!res.canceled) {
      const data = await xlsxRead(res.filePaths[0]);
      setXlsxData(data);
    }
  };

  return (
    <div>
      <Button onClick={func}>选择文件</Button>
    </div>
  );
};

const XlsxListNull = () => <div>请选择文件</div>;

export const XlsxList = () => {
  return (
    <Show when={xlsxData().length > 0} fallback={<XlsxListNull />}>
      <Index each={xlsxData()}>
        {(item, i) => <Index each={item().data}>{(e, i) => <div>{e().join(',')}</div>}</Index>}
      </Index>
    </Show>
  );
};

export default (props: RouteSectionProps) => {
  onMount(() => windowShow());

  return (
    <div class={containerStyle}>
      <Dialog />
      <div class={style}>
        <XlsxList />
      </div>
    </div>
  );
};
