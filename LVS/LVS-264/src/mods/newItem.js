export default function (liText) {
  
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('mod-suites-browse-listing__card-amenities--primary');
  mainDiv.setAttribute("role", "presentation");

  const innerDiv = document.createElement('div');
  innerDiv.setAttribute("role", "listitem");

  mainDiv.appendChild(innerDiv);

  innerDiv.textContent = liText;
  
  return mainDiv.outerHTML;

}