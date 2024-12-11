import { type RouteSectionProps } from '@solidjs/router';
import { windowShow } from '@youliso/electronic/render';
import { onMount } from 'solid-js';

export default (props: RouteSectionProps) => {
  onMount(() => windowShow());

  return (
    <>
      <h1>home</h1>
    </>
  );
};
