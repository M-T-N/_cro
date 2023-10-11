export default function () {
  const observer = new MutationObserver(handleMutation);
  observer.observe(document.querySelector('.progress-navigation__inner'), {
    childList: true,
  });

  function handleMutation(m) {
    if (
      document.querySelectorAll(
        '.progress-navigation__inner .progress-navigation__step-excerpt'
      )[3]
    ) {
      document.querySelectorAll(
        '.progress-navigation__inner .progress-navigation__step-excerpt'
      )[3].innerHTML = tinuiti.totalPrice;
    }
  }
}
