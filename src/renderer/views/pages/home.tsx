import { type RouteSectionProps } from '@solidjs/router';
import { windowShow } from '@youliso/electronic/render';
import { createSignal, onMount } from 'solid-js';
import Button from '../components/basis/button';
import Input from '../components/basis/input';

export default (props: RouteSectionProps) => {
  onMount(() => windowShow());

  return (
    <>
      <Button>test</Button>
      <br />
      <Input type="checkbox" />
    </>
  );
};
