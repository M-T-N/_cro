/*
 * Adds toggle functionality to an accordion element
 *
 * @param {Element} toggleElement - The element on which a click will trigger the toggle functionality
 * @param {Element} accordionElement - The element which will get the accordion functionality
*/
export default function accordion(toggleElement, accordionElement) {

  // Set the accordion element to the toggle element if none specified
  let accordionElement = accordionElement || toggleElement;

  // Define the accordion logic
  function toggleAccordion() {
    if (parseInt(accordionElement.style.height)) {
      accordionElement.style.height = '0';
    } else {
      accordionElement.style.height = accordionElement.scrollHeight + 'px';
    }
  }

  // Add the event listner
  toggleElement.addEventListener('click', toggleAccordion);
  
}