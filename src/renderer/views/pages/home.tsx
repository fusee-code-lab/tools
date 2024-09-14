import { windowShow } from '@youliso/electronic/ipc';
import { createSignal, For, onMount } from 'solid-js';
import { containerStyle } from '../styles';
import Head from '../components/head';

const Item = (props: { name: string }) => <div>{props.name}</div>;

const ItemList = (props: { items: string[] }) => {
  return <For each={props.items}>{(item, i) => <Item name={item} />}</For>;
};

export default () => {
  onMount(() => windowShow());

  const [list, setList] = createSignal(['hello world', '123', '321', '456']);
  const test = () => {
    setList((items) => [...items, Date.now() + '']);
  };

  return (
    <>
      <Head />
      <div class={containerStyle}>
        <button onClick={test}>test</button>
        <ItemList items={list()} />
      </div>
    </>
  );
};
