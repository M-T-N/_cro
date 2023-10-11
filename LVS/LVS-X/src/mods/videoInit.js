export default function() {
    // Video modal and click handlers are handled by global object
    // Confirm our buttons weren't already initialized (race condition)
    if (window.SVP.videoModal._buttons.index(document.querySelector('.tin_suites-flex .js-video-btn')) > -1) return;
    // Remove previous click events so we don't double up
    window.jQuery(".js-video-btn", SVP.body).off('click');
    // Re-query DOM for our newly added buttons
    window.SVP.videoModal._buttons = window.jQuery(".js-video-btn", SVP.body);
    // Reinit videoModal object to attach event listeners to our buttons
    window.SVP.videoModal.init();
  }