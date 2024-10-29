import { css } from '@emotion/css';
import { windowShow } from '@youliso/electronic/render';
import { onMount } from 'solid-js';

const style = css`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--basic-color);
  color: var(--symbol-color);
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default () => {
  onMount(() => windowShow());
  return (
    <div class={style}>
      <img src="http://www.dmoe.cc/random.php" />
    </div>
  );
};
