import { useNavigate, type RouteSectionProps } from '@solidjs/router';
import { Button } from '../components/basis';

export default (props: RouteSectionProps) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>about</h1>
      <Button text="home" onClick={() => navigate('/home')} />
    </>
  );
};
