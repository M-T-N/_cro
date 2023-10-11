import { qsa } from "./qs";
import { venTower, bothTowers, plzTower } from "./towerListPalazzo";

export function towerIcons(){

  const venIcon = `<svg-icon class="icon-tower icon-tower--vlv tower-label__icon"><svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 17px;">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7876 15.5401V2.90743L16.2467 1.32275L9.04725 5.12633L1 4.67726V15.5401H18.7876Z" fill="#E3A131" stroke="#E3A131" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1 6.47009L9.11712 6.91448L16.2167 3.33838L19 4.93274" stroke="white" stroke-linecap="square" stroke-linejoin="round"></path>
  <path d="M16.3555 0V14.5795V16.0302" stroke="white" stroke-linejoin="round"></path>
  <path d="M9.19918 3.57617L9.21293 14.5796V16.0302" stroke="white" stroke-linejoin="round"></path>
  </svg></svg-icon>`;

  const plzIcon = `<svg-icon class="icon-tower icon-tower--plzo tower-label__icon"><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 17px;">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6792 15.8304V4.97599H15.0915V2.98799H12.222V3.27189H9.29323V2.98799L6.89455 2.56211L5.69521 2.22643L5.68863 1.98528L4.35529 1L1.82984 1.85205V3.70487L1.29688 3.84004V15.767L15.6792 15.8304Z" fill="#006F71" stroke="#006F71" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M9.18873 2.12598V16.4999" stroke="white" stroke-linejoin="round"></path>
  <path d="M3.69434 16.3946V3.09473L6.89434 4.53497L9.29318 5.26399" stroke="white" stroke-linejoin="round"></path>
  <path d="M9.29297 4.97559H14.9504H16.6484" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M1 3.93165L3.69459 3.09473" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg></svg-icon>`;




  const bothHTML = `
    <div class="towers_overlay towers_overlay__both">
      <div class="towers_overlay--icons">
        ${venIcon}
        ${plzIcon}
      </div>
      <div class="towers_overlay--text">
        Both Towers
      </div>
    </div>
  `;

  const venHTML = `
    <div class="towers_overlay towers_overlay__single">
      <div class="towers_overlay--icons">
        ${venIcon}
      </div>
      <div class="towers_overlay--text">
        Venetian Tower
      </div>
    </div>
  `;

  const plzHTML = `
    <div class="towers_overlay towers_overlay__single">
      <div class="towers_overlay--icons">
        ${plzIcon}
      </div>
      <div class="towers_overlay--text">
        Palazzo Tower
      </div>
    </div>
  `;

  qsa(bothTowers).forEach(function(el){
    el.closest('.mod-suites-browse-listing__card').querySelector('.slick-list').insertAdjacentHTML('afterbegin', bothHTML);
  });
  
  qsa(plzTower).forEach(function(el){
    el.closest('.mod-suites-browse-listing__card').querySelector('.slick-list').insertAdjacentHTML('afterbegin', plzHTML);
  });

  qsa(venTower).forEach(function(el){
    el.closest('.mod-suites-browse-listing__card').querySelector('.slick-list').insertAdjacentHTML('afterbegin', venHTML);
  });


}