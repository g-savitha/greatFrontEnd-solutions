export default function setCancellableTimeout(callback, delay, ...args) {
  const id = setTimeout(callback,delay,...args)
  return () =>{
    clearTimeout(id)
  }
}
