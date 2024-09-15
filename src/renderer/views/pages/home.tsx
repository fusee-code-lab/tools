import { useNavigate, type RouteSectionProps } from '@solidjs/router';
import { windowShow } from '@youliso/electronic/ipc';
import { onMount } from 'solid-js';
import { Button } from '../components/basis';

const Text = () => {
  const navigate = useNavigate();
  return <Button text="about" onClick={() => navigate('/about')} />;
};

export default (props: RouteSectionProps) => {
  onMount(() => windowShow());

  return (
    <>
      <h1>home</h1>
      <Text />
    </>
  );
};
