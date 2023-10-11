import modal from '../html/modal.html';

export default function () {
  // Add modal html if not present
  if (!document.querySelector('.tin_modal.tin_modal--fee')) {
    document.body.insertAdjacentHTML('beforeend', modal);

    document.querySelector('.tin_modal').addEventListener('click', (e) => {
      if (
        e.target.classList.contains('tin_modal') ||
        e.target.classList.contains('tin_modal-close')
      )
        document.querySelector('.tin_modal').style.display = 'none';
    });
  }

  // Add evt listener for icon
  document
    .querySelectorAll('.tin_breakdown-fee svg-icon')
    .forEach((el) =>
      el.addEventListener(
        'click',
        (e) => (document.querySelector('.tin_modal').style.display = 'block')
      )
    );
}
