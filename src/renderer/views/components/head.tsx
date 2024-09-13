import { css } from '@emotion/css';
import { dragStyles } from '../styles';

const style = css`
  ${dragStyles}
  width: 100%;
  height: 32px;
`;

const Head = () => (
  <div class="head">
    <div class={style}></div>
    <div></div>
  </div>
);

export default Head;
