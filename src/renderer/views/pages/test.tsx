import { navigate } from "@/renderer/router";

export default () => (
  <div>
    <button onClick={() => navigate('/home')}>返回</button>
  </div>
);
