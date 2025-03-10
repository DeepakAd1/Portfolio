export const container = (delay, x) => ({
  hidden: { x: x, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});
