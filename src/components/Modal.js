import React, { useEffect, useRef } from "react";

export default function Modal({ children, show, closeCallback, style }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (show) {
      dialog.removeAttribute("open");
      dialog.showModal();
    } else {
      dialog.close();
    }
    const close = (e) => {
      if (e.key === "Escape") {
        closeCallback();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [closeCallback, show]);

  return (
    <dialog ref={ref} style={style}>
      <button onClick={closeCallback}>Close modal</button>
      {children}
    </dialog>
  );
}
