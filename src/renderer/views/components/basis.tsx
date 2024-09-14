import { css, cx } from '@emotion/css';
import { nodragStyle } from '../styles';

const buttonStyle = css`
  ${nodragStyle}
  outline: none;
  border: none;
  margin: 0;
  padding: 4px 6px;
`;

export const Button = (props: {
  disabled?: boolean;
  className?: string;
  text: string;
  onClick?: () => void;
}) => (
  <button
    class={cx({
      [buttonStyle]: true,
      [props.className || '']: !!props.className
    })}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.text}
  </button>
);
