export default function addTagsSRP(){
  
  // datepicker
  document.querySelector('#staydates').classList.add('custom_click_track');
  document.querySelector('#staydates').setAttribute('custom_click_track_value', 'SRP Datepicker|Stay Dates|internal');

  // edit button
  document.querySelector('.js-edit-search').classList.add('custom_click_track');
  document.querySelector('.js-edit-search').setAttribute('custom_click_track_value', 'SRP Edit Search|Edit|internal');
  
  // specific dates tab
  document.querySelector('.l-date-picker-body .tab1').classList.add('custom_click_track');
  document.querySelector('.l-date-picker-body .tab1').setAttribute('custom_click_track_value', 'SRP Dropdown Datepicker|Specific Dates|internal');
  
  // flexible dates tab
  document.querySelector('.l-date-picker-body .tab2').classList.add('custom_click_track');
  document.querySelector('.l-date-picker-body .tab2').setAttribute('custom_click_track_value', 'SRP Dropdown Datepicker|Flexible Dates|internal');

}