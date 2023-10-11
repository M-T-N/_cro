export default function watchInput(elem, returnFunc){
  let observer =new MutationObserver(cb);
  function cb(mutations){
    returnFunc();
  }
  observer.observe(elem, {
    attributes: true
  });
}
