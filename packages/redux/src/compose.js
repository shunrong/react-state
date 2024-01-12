export const compose = (...funcs) => {
  if (funcs.length === 0) return (arg) => arg;
  if (funcs.length === 1) return funcs[0];
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
};

/**
 * compose 实现原理
 * compose 是组合的意思
 * 注意它的执行是有顺序的，传入的是一个函数组成的数组，从最后一个函数开始执行
 * 执行的结果传给前一个函数，依次往前执行
 * 最后就是执行第一个函数并且返回结果
 */
