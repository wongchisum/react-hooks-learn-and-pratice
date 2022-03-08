import styles from "./index.module.less";
import { useToggle } from "../UseToggleDemo/hooks";
import { useRef } from "react";
import { useEventListener } from "./hooks";

const UseEventListenerDemo = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [show, toggleShow] = useToggle(false);

  // 实现点击模态框外遮罩内的范围，关闭弹窗的效果
  useEventListener(overlayRef.current, "click", (el) => {
    if (el && el.target && modalRef.current) {
      const clickHappedInModal = modalRef.current.contains(el.target);
      if (!clickHappedInModal) {
        toggleShow();
      }
    }
  });

  return (
    <div className={styles.UseEventListener}>
      <button onClick={toggleShow}>点击切换遮罩层显隐</button>
      <div ref={overlayRef} className={`overlay ${show ? "show" : "hidden"}`}>
        <div className="modal" ref={modalRef}>
          <div className="title">
            <div className="left">弹窗提示</div>
            <div className="right" onClick={toggleShow}>
              点击关闭
            </div>
          </div>
          <div className="content">我展示了一些信息...</div>
        </div>
      </div>
    </div>
  );
};

export default UseEventListenerDemo;
