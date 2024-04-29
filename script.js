const d = document,
  n = navigator;

function webCam(id) {
  const $camara = d.getElementById(id);
  console.log(n);
  n.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((el) => {
      console.log(el);
      $camara.srcObject = el;
      $camara.play();
    })
    .catch((err) => console.log(err));
}
webCam("webCam");

import { create } from "zustand";

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
function Counter() {
  const { count, inc } = useStore();
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
}
