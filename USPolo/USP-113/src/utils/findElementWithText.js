export default function findElementWithText(sel, text) {
  const elements = document.querySelectorAll(sel);
  const elArr = [];
  for (let i = 0; i < elements.length; i++) {
    elArr.push(elements[i]);
  }
  return elArr.filter(el => el.innerText.includes(text))
}