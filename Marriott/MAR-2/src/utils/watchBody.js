export default function watchBody(elem, returnFunc){
  let observer =new MutationObserver(cb);
  function cb(mutations){
    returnFunc(mutations);
  }
  observer.observe(elem, {
    childList: true,
    subtree: true,
  });
}


export function watchBodySRP(elem, returnFunc){
  let observer =new MutationObserver(cb);
  function cb(mutations){
    returnFunc(mutations);
  }
  observer.observe(elem, {
    attributes: true
  });
}