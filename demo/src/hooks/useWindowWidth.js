import { useSyncExternalStore } from "react";

const windowStore = {
  subscribe(callback) {
    window.addEventListener("resize", callback);
    return () => {
      window.removeEventListener("resize", callback);
    };
  },
  getSnapshot() {
    return window.innerWidth;
  },
};

export const useWindowWidth = () => {
  const windowWidth = useSyncExternalStore(
    windowStore.subscribe,
    windowStore.getSnapshot,
  );
  return windowWidth;
};
