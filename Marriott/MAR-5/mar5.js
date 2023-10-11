mar5(){

    // datepicker
    document.querySelector('#staydates').classList.add('custom_click_track');
    document.querySelector('#staydates').setAttribute('custom_click_track_value', 'SRP Datepicker|Stay Dates|internal');
    
}




// doc ready check
var cancel_interval_mar5 = setInterval(loadmar5, 30);
function loadmar5() {
  /******* START -----DOM is parsed  ************/
  if (document.readyState == "interactive" && typeof window.s === "object") {
    console.log("DOM is interactive.....");
    clearInterval(cancel_interval_mar5);
    mar5();
  }
  /******* END  ******/
  /******* START -----DOM is loaded  ************/
  else if (document.readyState == "complete" && typeof window.s === "object") {
    console.log("DOM is completed.....");
    clearInterval(cancel_interval_mar5);
    mar5();
  }
  else{
    console.log("DOM is still loading.....");
  }