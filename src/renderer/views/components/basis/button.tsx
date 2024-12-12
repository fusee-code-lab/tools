import { css, cx } from '@emotion/css';
import { type JSX } from 'solid-js';
import { nodragStyle } from '@/renderer/views/styles';

const defaultStyle = css`
  ${nodragStyle}
  outline: none;
  border: none;
  padding: 4px 10px;
`;

const styles = {
  default: css`
  
  `,
  primary: css``
};

const Button = (props: {
  disabled?: boolean;
  className?: string;
  type?: 'default' | 'primary';
  onClick?: () => void;
  children?: JSX.Element;
}) => {
  const typeCss = styles[props.type || 'default'];
  return (
    <button
      class={cx(defaultStyle, typeCss, props.className)}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
