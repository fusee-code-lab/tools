import type { RouteSectionProps } from '@solidjs/router';
import Head from './components/head';
import { containerStyle } from './styles';

export default (props: RouteSectionProps) => {
  return (
    <div class="container">
      <Head title={window.customize.title ?? ''} />
      <div class={containerStyle}>{props.children}</div>
    </div>
  );
};
