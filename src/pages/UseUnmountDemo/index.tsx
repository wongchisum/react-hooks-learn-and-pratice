import { useToggle } from "../UseToggleDemo/hooks";
import { useUnmount } from "./hooks";
const Text = () => {
  useUnmount(() => {
    console.log("Unmount");
  });
  return <div>这个组件隐藏之后，控制台输出Unmount</div>;
};

export default function useUnmountDemo() {
  const [show, toggleShow] = useToggle(true);

  return (
    <div>
      <button onClick={toggleShow}>切换开关</button>
      {show && <Text />}
    </div>
  );
}
