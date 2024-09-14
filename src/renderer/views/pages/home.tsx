import type { RouteSectionProps } from '@solidjs/router';
import { windowShow } from '@youliso/electronic/ipc';
import { onMount } from 'solid-js';
import { Button } from '../components/basis';
import { navigate } from '@/renderer/router';

export default (props: RouteSectionProps) => {
  console.log(props);
  
  onMount(() => windowShow());

  return (
    <>
      <Button text="123" onClick={() => navigate('/test')} />
    </>
  );
};
