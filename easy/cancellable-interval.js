export default function setCancellableInterval(callback, delay, ...args) {
  const timerId = setInterval(callback,delay, ...args)
  return () =>{
    clearInterval(timerId)
  }
}
