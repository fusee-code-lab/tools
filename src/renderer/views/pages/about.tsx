import { useNavigate } from '@solidjs/router';

export default () => {
  const navigate = useNavigate();
  return (
    <div>
      about
      <button onClick={() => navigate('/home', { replace: true })}>back</button>
    </div>
  );
};
