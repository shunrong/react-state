import { unstable_batchedUpdates } from "react-dom";

export const batch = unstable_batchedUpdates;

/**
 * batch 批量更新
 * 在 batch 里面可以多次调用 setState 修改状态，而 react 只会更新一次
 * 也就是只会触发一次重渲
 */
