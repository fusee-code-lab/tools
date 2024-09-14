import type { RouteSectionProps } from '@solidjs/router';
import { navigate } from '@/renderer/router';

export default (props: RouteSectionProps) => {
  return (
    <>
      <button onClick={() => navigate('/home')}>返回</button>
    </>
  );
};
