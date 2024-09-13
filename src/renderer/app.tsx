import { windowShow } from '@youliso/electronic/ipc';
import { createSignal, onCleanup, onMount } from 'solid-js';

const App = () => {
  const [count, setCount] = createSignal(0);
  const interval = setInterval(() => setCount((c) => c + 1), 1000);
  onCleanup(() => clearInterval(interval));
  onMount(() => windowShow());
  return <div>Count value is {count()}</div>;
};

export default App;
