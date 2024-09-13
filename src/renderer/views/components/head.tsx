import { css } from '@emotion/css';
import { baseTheme } from '@/cfg/theme';
import { dragStyle, nodragStyle } from '../styles';

const style = css`
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  right: 0;
  height: ${baseTheme.headHeight}px;
  width: calc(100% - ${baseTheme.eventWidth}px);
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

export default (props: { title?: string; noDrag?: boolean }) => (
  <div class={css([style, props.noDrag ? nodragStyle : dragStyle])}>{props.title ?? ''}</div>
);
